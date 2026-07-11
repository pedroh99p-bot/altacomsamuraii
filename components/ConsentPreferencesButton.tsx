"use client";

import { openConsentPreferences } from "@/lib/analytics";

export function ConsentPreferencesButton() {
  return (
    <button type="button" className="footer__text-button" onClick={openConsentPreferences}>
      Preferências de cookies
    </button>
  );
}
