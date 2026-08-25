export const business = {
  name: "Altinha com Samurai",
  siteUrl: "https://altinhacomsamurai.com.br",
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
      "https://www.google.com/maps?q=Praia%20do%20Pontal%20Posto%2012%20Recreio%20dos%20Bandeirantes%20Rio%20de%20Janeiro&output=embed",
    routeUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Praia%20do%20Pontal%20Posto%2012%20Recreio%20dos%20Bandeirantes%20Rio%20de%20Janeiro",
    exactAddress: null,
    coordinates: null,
    mapStatus: "approximate",
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
    heroVideo: "/media/altinha-samurai.webm",
    introVideo: "/media/altinha-samurai.webm",
    logo: "/media/logo-altinha-com-samurai.webp",
    communityImage: "/media/comunidade-altinha.webp",
    samuraiPortrait: "/media/samurai-especialista.webp",
    finalOfferImage: "/media/oferta-final-altinha.jpg",
  },
  privacy: {
    legalName: null,
    taxId: null,
    contactEmail: null,
  },
  productionCredit: {
    name: "Montana Tech Lab",
    url: null as string | null,
  },
} as const;
