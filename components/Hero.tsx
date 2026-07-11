import { ArrowDown, Play, Waves } from "lucide-react";
import { business } from "@/data/business";
import { heroBenefits } from "@/data/benefits";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <div className="eyebrow">
            <Waves aria-hidden="true" size={18} />
            Aulas na Praia do Pontal • Posto 12
          </div>
          <h1 id="hero-title">
            Aprenda altinha com quem <span>vive a praia.</span>
          </h1>
          <p>
            Aulas para quem nunca tocou em uma bola, para iniciantes que querem
            ganhar confiança e para quem já joga e quer evoluir com técnica na
            areia.
          </p>
          <div className="hero__actions">
            <WhatsAppButton
              origin="hero"
              section="hero"
              ctaId="hero-primary"
              message="Olá, Samurai! Conheci as aulas pelo site e gostaria de saber como funciona para começar na Praia do Pontal."
            >
              Agendar pelo WhatsApp
            </WhatsAppButton>
            <a className="secondary-link" href="#quiz">
              <ArrowDown aria-hidden="true" size={18} />
              Descobrir a aula ideal
            </a>
          </div>
          <ul className="hero__chips" aria-label="Benefícios principais">
            {heroBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="hero__media" aria-label="Vídeo de aula de altinha">
          <div className="hero__video-frame">
            <video
              className="hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={business.assets.communityImage}
            >
              <source src={business.assets.heroVideo} type="video/webm" />
            </video>
            <div className="hero__video-overlay" aria-hidden="true" />
            <div className="hero__video-badge">
              <Play aria-hidden="true" size={16} />
              Treino real na areia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
