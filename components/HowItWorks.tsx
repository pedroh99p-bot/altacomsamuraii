import { howItWorksSteps } from "@/data/howItWorks";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function HowItWorks() {
  return (
    <section
      className="how-it-works"
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="section-shell">
        <div className="how-it-works__top">
          <SectionHeading
            eyebrow="Como funciona"
            title="Começar deve parecer simples."
            text="A jornada começa em uma conversa direta, passa por uma orientação honesta e chega na areia com o caminho mais claro."
          />
          <WhatsAppButton
            origin="how_it_works"
            section="como-funciona"
            ctaId="how-it-works-primary"
            variant="soft"
            message="Olá, Samurai! Quero entender os próximos passos para começar uma aula de altinha no Pontal."
          >
            Tirar dúvidas pelo WhatsApp
          </WhatsAppButton>
        </div>

        <ol className="how-it-works__timeline" aria-label="Passos para começar">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="how-step">
                <span className="how-step__number">{step.number}</span>
                <div className="how-step__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
