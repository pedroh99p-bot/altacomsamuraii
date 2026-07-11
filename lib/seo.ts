import { business } from "@/data/business";
import { faqItems } from "@/data/faq";

export const siteTitle =
  "Aula de Altinha no Recreio | Praia do Pontal | Altinha com Samurai";

export const siteDescription =
  "Aula de altinha para iniciantes e diferentes níveis na Praia do Pontal, Recreio dos Bandeirantes, região do Posto 12. Fale com Samurai pelo WhatsApp.";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: business.name,
    url: business.siteUrl,
    telephone: `+${business.phone}`,
    image: [business.assets.logo, business.assets.communityImage],
    description: business.service,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locale.city,
      addressCountry: "BR",
    },
    areaServed: [
      business.locale.neighborhood,
      business.locale.city,
      business.locale.beach,
    ],
    sameAs: [business.instagram],
  };
}

export function getServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aula de altinha na Praia do Pontal",
    serviceType: "Aula de altinha",
    description: business.service,
    provider: {
      "@type": "Person",
      name: business.instructor,
    },
    areaServed: {
      "@type": "Place",
      name: `${business.locale.beach}, ${business.locale.neighborhood}, ${business.locale.city}`,
    },
    availableLanguage: ["pt-BR", "en", "es"],
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.instructor,
    alternateName: "Samurai",
    worksFor: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
    },
    sameAs: [business.instagram],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessJsonLd(),
      getServiceJsonLd(),
      getPersonJsonLd(),
      getFaqJsonLd(),
    ],
  };
}
