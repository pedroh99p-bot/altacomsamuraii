"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCTA() {
  const { t } = useTranslations();

  return (
    <section className="final-cta" id="agendar" aria-labelledby="final-title">
      <Image
        src={business.assets.communityImage}
        alt=""
        fill
        sizes="100vw"
        className="final-cta__image"
      />
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="section-shell final-cta__content">
        <div className="final-cta__copy">
          <span>
            <Sparkles aria-hidden="true" />
            {t.finalCta.eyebrow}
          </span>
          <h2 id="final-title">{t.finalCta.title}</h2>
          <p>{t.finalCta.text}</p>
          <div className="final-cta__actions">
            <WhatsAppButton
              origin="final_cta"
              section="agendar"
              ctaId="final-cta-whatsapp"
              message={t.finalCta.whatsappMessage}
            >
              {t.finalCta.primary}
            </WhatsAppButton>
            <a className="secondary-link" href="#quiz">
              <ArrowDown aria-hidden="true" />
              {t.finalCta.secondary}
            </a>
          </div>
        </div>
        <div className="final-cta__visual" aria-hidden="true">
          <span>{t.finalCta.visualTop}</span>
          <strong>{t.finalCta.visualStrong}</strong>
        </div>
      </div>
    </section>
  );
}
