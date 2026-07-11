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
          <span>Privacidade</span>
          <h2 id="consent-title">Controle seus cookies.</h2>
          <p>
            Usamos essenciais para o site funcionar. Analytics e marketing só
            entram se você permitir. Você pode mudar isso no rodapé.
          </p>
          <Link href="/privacidade">Ver política de privacidade</Link>
        </div>

        {customizing ? (
          <div className="consent__options" aria-label="Preferências de cookies">
            <label>
              <span>
                <strong>Essenciais</strong>
                <small>Necessários para navegação e segurança.</small>
              </span>
              <input type="checkbox" checked disabled />
            </label>
            <label>
              <span>
                <strong>Analytics</strong>
                <small>Ajuda a entender seções, CTAs e origem de campanha.</small>
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
                <strong>Marketing</strong>
                <small>Permite pixels de mídia quando houver ID real.</small>
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
            Recusar
          </button>
          <button type="button" onClick={() => setCustomizing(true)}>
            Personalizar
          </button>
          <button
            type="button"
            className="consent__primary"
            onClick={() =>
              customizing ? save(draft.analytics, draft.marketing) : save(true, true)
            }
          >
            {customizing ? "Salvar preferências" : "Aceitar"}
          </button>
        </div>
      </div>
    </div>
  );
}
