export type TestimonialType =
  | "whatsapp_print"
  | "google_review"
  | "photo"
  | "video"
  | "text";

export type TestimonialItem = {
  id: string;
  type: TestimonialType;
  name: string;
  image: string;
  alt: string;
  text: string;
  source: string;
  date: string;
  authorized: boolean;
  order: number;
};

export const testimonials: TestimonialItem[] = [];

export const socialProofNotes = [
  "A experiência já é apresentada com foto real da comunidade.",
  "Prints e avaliações só entram quando forem reais e autorizados.",
  "O carrossel está preparado para receber WhatsApp, Google, fotos, vídeos e textos.",
] as const;

export function getAuthorizedTestimonials() {
  return testimonials
    .filter((item) => item.authorized)
    .sort((a, b) => a.order - b.order);
}
