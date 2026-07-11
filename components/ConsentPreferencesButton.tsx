"use client";

import { openConsentPreferences } from "@/lib/analytics";
import { useTranslations } from "@/i18n/useTranslations";

export function ConsentPreferencesButton() {
  const { t } = useTranslations();

  return (
    <button type="button" className="footer__text-button" onClick={openConsentPreferences}>
      {t.footer.cookiePreferences}
    </button>
  );
}
