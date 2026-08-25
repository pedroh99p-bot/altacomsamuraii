export const business = {
  name: "Altinha com Samurai",
  siteUrl: "https://altacomsamuraii.vercel.app",
  instructor: 'Wallace "Samurai" Costa',
  service:
    "Aulas de altinha na praia para iniciantes, intermediários e avançados.",
  phone: "5521983565005",
  whatsappBase: "https://wa.me/5521983565005",
  instagram: "https://www.instagram.com/samuraialta7/",
  locale: {
    beach: "Praia do Pontal",
    reference: "próximo ao Posto 12",
    neighborhood: "Recreio dos Bandeirantes",
    city: "Rio de Janeiro",
  },
  location: {
    meetingPoint: "Praia do Pontal, região do Posto 12",
    neighborhoodAndCity: "Recreio dos Bandeirantes, Rio de Janeiro",
    mapQuery:
      "Praia do Pontal Posto 12 Recreio dos Bandeirantes Rio de Janeiro",
    mapEmbedSrc:
      "https://www.google.com/maps?q=-23.031944,-43.471111&z=16&output=embed",
    routeUrl:
      "https://www.google.com/maps/dir/?api=1&destination=-23.031944,-43.471111",
    exactAddress: null,
    coordinates: {
      latitude: -23.031944,
      longitude: -43.471111,
    },
    mapStatus: "verified",
  },
  serviceFacts: {
    frequency: "Aulas todos os dias",
    schedule: "Horários prioritariamente cedo e no fim da tarde",
    duration: "Aproximadamente uma hora",
    levels: "Do primeiro contato ao aluno que já joga",
    materials: "Orientação e materiais utilizados na aula",
    languages: "Atendimento em PT, EN e ES",
  },
  assets: {
    heroVideo: "/media/altinha-samurai-hero.webm",
    introVideo: "/media/altinha-samurai-otimizado.webm",
    heroPoster: "/media/hero-poster.webp",
    logo: "/media/logo-altinha-com-samurai.webp",
    communityImage: "/media/comunidade-altinha.webp",
    samuraiPortrait: "/media/samurai-especialista.webp",
    finalOfferImage: "/media/oferta-final-altinha.jpg",
    socialImage:
      "https://res.cloudinary.com/dhbrxzt5a/image/upload/f_jpg,q_auto:good,w_1200,h_630,c_fill/v1787678460/dfabab1c-8996-42f0-8837-08e79b69e079_mod4yj.jpg",
  },
  privacy: {
    legalName: null,
    taxId: null,
    contactEmail: null,
  },
  productionCredit: {
    name: "Montana Tech Lab",
    url: "https://www.instagram.com/montanatechlab/" as string | null,
  },
} as const;
