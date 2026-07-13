"use client";

import Image from "next/image";
import { business } from "@/data/business";
import { getAuthorizedGoogleTestimonials } from "@/data/testimonials";
import { useTranslations } from "@/i18n/useTranslations";
import { SocialProofCarousel } from "./SocialProofCarousel";
import { WhatsAppButton } from "./WhatsAppButton";

export function SocialProofSection() {
  const { locale, t } = useTranslations();
  const testimonials = getAuthorizedGoogleTestimonials(locale);

  return (
    <section
      className="social-proof"
      id="prova-social"
      aria-labelledby="proof-title"
    >
      <span className="anchor-sentinel" id="comunidade" aria-hidden="true" />
      <div className="section-shell social-proof__layout">
        <div className="social-proof__heading">
          <span>{t.community.eyebrow}</span>
          <h2 id="proof-title">{t.community.title}</h2>
          <p>{t.community.body}</p>
        </div>

        <div className="social-proof__media">
          <Image
            src={business.assets.communityImage}
            alt={t.community.imageAlt}
            width={1170}
            height={779}
            sizes="(max-width: 900px) 100vw, 920px"
          />
        </div>

        {testimonials.length > 0 ? (
          <div className="social-proof__testimonials">
            <h3>{t.community.testimonialsTitle}</h3>
            <SocialProofCarousel items={testimonials} />
          </div>
        ) : null}

        <WhatsAppButton
          origin="social_proof"
          section="prova-social"
          ctaId="social-proof-whatsapp"
          variant="soft"
          message={t.community.whatsappMessage}
        >
          {t.community.cta}
        </WhatsAppButton>
      </div>
    </section>
  );
}
