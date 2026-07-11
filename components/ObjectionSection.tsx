import { objections } from "@/data/benefits";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function ObjectionSection() {
  return (
    <section className="objections" id="comecar" aria-labelledby="objection-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Começar sem medo"
          title="Nunca jogou? Aqui é o lugar certo para começar."
          text="Você não precisa ter grupo, técnica ou coordenação perfeita. A aula organiza o caminho para o seu corpo entender a bola, o ritmo e a roda."
          align="center"
        />

        <div className="objections__grid">
          {objections.map((item) => {
            const Icon = item.icon;
            return (
              <article
                className={`objection-card objection-card--${item.size}`}
                key={item.title}
              >
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="objections__cta">
          <WhatsAppButton
            origin="objections"
            section="comecar"
            ctaId="objections-beginner"
            message="Olá, Samurai! Tenho vontade de começar na altinha e queria saber como funciona para iniciantes."
          >
            Quero começar com orientação
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
