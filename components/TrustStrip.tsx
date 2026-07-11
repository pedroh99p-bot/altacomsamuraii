import { quickInformation } from "@/data/benefits";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function TrustStrip() {
  const [featured, ...cards] = quickInformation;
  const FeaturedIcon = featured.icon;

  return (
    <section className="quick-info" id="informacoes" aria-labelledby="quick-title">
      <div className="section-shell quick-info__grid">
        <div className="quick-info__intro">
          <SectionHeading
            eyebrow="Primeiros passos"
            title="Antes de chamar, entenda o essencial."
            text="A experiência foi pensada para tirar dúvidas rápidas e deixar claro que você não precisa chegar pronto."
          />
          <WhatsAppButton
            origin="quick_info"
            section="informacoes"
            ctaId="quick-info-schedule"
            variant="ghost"
            message="Olá, Samurai! Vi as informações da aula no site e gostaria de saber os próximos horários na Praia do Pontal."
          >
            Ver próximos horários
          </WhatsAppButton>
        </div>

        <article className="info-card info-card--featured">
          <FeaturedIcon aria-hidden="true" />
          <span>Local principal</span>
          <h3>{featured.title}</h3>
          <p>{featured.text}</p>
        </article>

        <div className="quick-info__cards">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <article className="info-card" key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
