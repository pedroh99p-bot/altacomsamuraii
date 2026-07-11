"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  createConsentPreferences,
  openConsentEventName,
  readConsent,
  saveConsent,
  type ConsentPreferences,
} from "@/lib/analytics";
import { useTranslations } from "@/i18n/useTranslations";

type DraftPreferences = Pick<
  ConsentPreferences,
  "essential" | "analytics" | "marketing"
>;

const defaultDraft: DraftPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function ConsentBanner() {
  const { t } = useTranslations();
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState<DraftPreferences>(defaultDraft);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
      return;
    }

    setDraft({
      essential: true,
      analytics: existing.analytics,
      marketing: existing.marketing,
    });
  }, []);

  useEffect(() => {
    const onOpen = () => {
      const current = readConsent();
      setDraft({
        essential: true,
        analytics: current?.analytics === true,
        marketing: current?.marketing === true,
      });
      setCustomizing(true);
      setVisible(true);
    };

    window.addEventListener(openConsentEventName, onOpen);
    return () => window.removeEventListener(openConsentEventName, onOpen);
  }, []);

  if (!visible) return null;

  const save = (analytics: boolean, marketing: boolean) => {
    saveConsent(createConsentPreferences(analytics, marketing));
    setVisible(false);
    setCustomizing(false);
  };

  return (
    <div className="consent" role="dialog" aria-labelledby="consent-title">
      <div className="consent__panel">
        <div className="consent__copy">
          <span>{t.consent.eyebrow}</span>
          <h2 id="consent-title">{t.consent.title}</h2>
          <p>{t.consent.text}</p>
          <Link href="/privacidade">{t.consent.privacyLink}</Link>
        </div>

        {customizing ? (
          <div className="consent__options" aria-label={t.consent.optionsAria}>
            <label>
              <span>
                <strong>{t.consent.essentialTitle}</strong>
                <small>{t.consent.essentialText}</small>
              </span>
              <input type="checkbox" checked disabled />
            </label>
            <label>
              <span>
                <strong>{t.consent.analyticsTitle}</strong>
                <small>{t.consent.analyticsText}</small>
              </span>
              <input
                type="checkbox"
                checked={draft.analytics}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    analytics: event.target.checked,
                  }))
                }
              />
            </label>
            <label>
              <span>
                <strong>{t.consent.marketingTitle}</strong>
                <small>{t.consent.marketingText}</small>
              </span>
              <input
                type="checkbox"
                checked={draft.marketing}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    marketing: event.target.checked,
                  }))
                }
              />
            </label>
          </div>
        ) : null}

        <div className="consent__actions">
          <button type="button" onClick={() => save(false, false)}>
            {t.consent.reject}
          </button>
          <button type="button" onClick={() => setCustomizing(true)}>
            {t.consent.customize}
          </button>
          <button
            type="button"
            className="consent__primary"
            onClick={() =>
              customizing ? save(draft.analytics, draft.marketing) : save(true, true)
            }
          >
            {customizing ? t.consent.save : t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
