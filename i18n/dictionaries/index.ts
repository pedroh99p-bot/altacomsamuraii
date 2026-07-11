import { en } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";
import type { Dictionary } from "../types";

export const dictionaries = {
  "pt-BR": ptBR,
  en,
  es,
} as const;

export type Locale = keyof typeof dictionaries;
export type { Dictionary };

export const defaultLocale: Locale = "pt-BR";
export const localeStorageKey = "altinha_locale";

export const localeOptions = [
  { locale: "pt-BR", flag: "br" },
  { locale: "en", flag: "us" },
  { locale: "es", flag: "es" },
] as const satisfies readonly { locale: Locale; flag: string }[];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pt-BR" || value === "en" || value === "es";
}
