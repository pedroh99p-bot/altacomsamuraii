import { faqItems } from "@/data/faq";
import { SectionHeading } from "./SectionHeading";
import { FAQAccordion } from "./FAQAccordion";
import { WhatsAppButton } from "./WhatsAppButton";

export function FAQSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-shell faq-section__layout">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow="FAQ"
            title="Respostas diretas antes de chamar."
            text="As respostas abaixo usam apenas informações confirmadas. Valor, disponibilidade e formato são alinhados no contato."
          />
          <WhatsAppButton
            origin="faq"
            section="faq"
            ctaId="faq-whatsapp"
            variant="soft"
            message="Olá, Samurai! Li o FAQ e queria tirar uma dúvida sobre as aulas de altinha."
          >
            Tirar dúvida no WhatsApp
          </WhatsAppButton>
        </div>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
