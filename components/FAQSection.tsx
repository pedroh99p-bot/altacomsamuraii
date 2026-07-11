"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionHeading } from "./SectionHeading";
import { FAQAccordion } from "./FAQAccordion";
import { WhatsAppButton } from "./WhatsAppButton";

export function FAQSection() {
  const { t } = useTranslations();

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-shell faq-section__layout">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow={t.faq.eyebrow}
            title={t.faq.title}
            text={t.faq.text}
          />
          <WhatsAppButton
            origin="faq"
            section="faq"
            ctaId="faq-whatsapp"
            variant="soft"
            message={t.faq.whatsappMessage}
          >
            {t.faq.cta}
          </WhatsAppButton>
        </div>
        <FAQAccordion items={t.faq.items} />
      </div>
    </section>
  );
}
