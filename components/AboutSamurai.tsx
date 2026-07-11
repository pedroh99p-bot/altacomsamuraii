import Image from "next/image";
import { business } from "@/data/business";
import { specialistBullets } from "@/data/benefits";
import { confirmedMetrics } from "@/data/metrics";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function AboutSamurai() {
  return (
    <section className="about" id="especialista" aria-labelledby="about-title">
      <div className="section-shell about__layout">
        <div className="about__portrait">
          <Image
            src={business.assets.samuraiPortrait}
            alt="Wallace Samurai Costa na praia"
            width={1209}
            height={1301}
            sizes="(max-width: 900px) 100vw, 42vw"
            className="about__image"
          />
          <div className="about__caption">
            <strong>Wallace “Samurai” Costa</strong>
            <span>Altinha, praia e orientação próxima</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="O especialista"
            title="Aprenda com quem vive a praia todos os dias."
            text="Samurai conduz a aula com proximidade, leitura do nível de cada aluno e uma dinâmica prática para transformar insegurança em evolução na areia."
          />

          <div className="about__bullets">
            {specialistBullets.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="about__metrics" aria-label="Informações confirmadas">
            {confirmedMetrics.map((metric) => (
              <article key={metric.label}>
                <strong>
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>

          <WhatsAppButton
            origin="specialist"
            section="especialista"
            ctaId="specialist-whatsapp"
            message="Olá, Samurai! Vi sua apresentação no site e quero entender qual aula combina com meu nível."
          >
            Falar com o Samurai
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
