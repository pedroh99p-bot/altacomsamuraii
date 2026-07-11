"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  dictionaries,
  isLocale,
  localeStorageKey,
  type Dictionary,
  type Locale,
} from "@/i18n/dictionaries";
import { trackEvent } from "@/lib/analytics";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(localeStorageKey);
      if (isLocale(stored)) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      } else {
        document.documentElement.lang = defaultLocale;
      }
    } catch {
      document.documentElement.lang = defaultLocale;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState((previousLocale) => {
      if (previousLocale === nextLocale) return previousLocale;

      try {
        window.localStorage.setItem(localeStorageKey, nextLocale);
      } catch {
        // Locale persistence is helpful but not required for navigation.
      }

      trackEvent("language_change", {
        previous_language: previousLocale,
        selected_language: nextLocale,
      });

      return nextLocale;
    });
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContext must be used inside LocaleProvider");
  }

  return context;
}
