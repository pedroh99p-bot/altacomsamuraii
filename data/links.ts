import { business } from "./business";

export const links = {
  whatsapp: business.whatsappBase,
  instagram: business.instagram,
  route: business.location.routeUrl,
} as const;
