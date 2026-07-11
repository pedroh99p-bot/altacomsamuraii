"use client";

import { localeOptions } from "@/i18n/dictionaries";
import { useTranslations } from "@/i18n/useTranslations";

export function LanguageSelector() {
  const { locale, setLocale, t } = useTranslations();

  return (
    <div
      className="language-selector"
      aria-label={t.languages.label}
    >
      {localeOptions.map((option) => {
        const isActive = locale === option.locale;
        const label = t.languages.options[option.locale];

        return (
          <button
            key={option.locale}
            type="button"
            className={isActive ? "is-active" : undefined}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            onClick={() => setLocale(option.locale)}
          >
            <span
              className={`language-selector__flag language-selector__flag--${option.flag}`}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}
