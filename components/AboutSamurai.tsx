import Image from "next/image";
import { business } from "@/data/business";
import { specialistBullets } from "@/data/benefits";
import { WhatsAppButton } from "./WhatsAppButton";

export function AboutSamurai() {
  return (
    <section className="about" id="especialista" aria-labelledby="about-title">
      <div className="section-shell about__layout">
        <div className="about__heading">
          <span>O especialista</span>
          <h2 id="about-title">Aprenda com quem vive a praia todos os dias.</h2>
          <p>
            {business.instructor} une prática na areia, leitura do nível de cada
            aluno e acompanhamento próximo para transformar insegurança em
            evolução real.
          </p>
        </div>

        <div className="about__visual">
          <div className="about__portrait">
            <Image
              src={business.assets.samuraiPortrait}
              alt="Wallace Samurai Costa na praia com um cachorro"
              width={1209}
              height={1301}
              sizes="(max-width: 900px) 100vw, 48vw"
              className="about__image"
            />
          </div>
          <div className="about__caption">
            <strong>Wallace “Samurai” Costa</strong>
            <span>Altinha, praia e orientação próxima</span>
          </div>
        </div>

        <div className="about__details">
          <div className="about__feature">
            <strong>Treino com ritmo adaptado</strong>
            <span>
              A aula parte do seu momento: primeiro contato, confiança,
              técnica ou prática com mais acompanhamento.
            </span>
          </div>

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

          <WhatsAppButton
            origin="specialist"
            section="especialista"
            ctaId="specialist-whatsapp"
            message="Olá, Samurai! Vi sua apresentação no site e quero entender qual aula combina com meu nível."
          >
            Quero falar com o Samurai
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
