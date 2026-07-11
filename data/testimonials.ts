import type { Locale } from "@/i18n/dictionaries";

export type TestimonialType = "google" | "whatsapp" | "text";

export type TestimonialItem = {
  id: string;
  type: TestimonialType;
  name: string;
  text: string;
  rating: number | null;
  source: string;
  date: string | null;
  authorized: boolean;
  locale: Locale | "all";
  order: number;
  enabled: boolean;
};

export const testimonials: TestimonialItem[] = [];

export function getAuthorizedTestimonials(locale?: Locale) {
  return testimonials
    .filter((item) => item.authorized && item.enabled)
    .filter((item) => !locale || item.locale === "all" || item.locale === locale)
    .sort((a, b) => a.order - b.order);
}

export function getAuthorizedGoogleTestimonials(locale?: Locale) {
  return getAuthorizedTestimonials(locale).filter(
    (item) => item.type === "google" && item.rating === 5,
  );
}
