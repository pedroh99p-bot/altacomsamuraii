import { ArrowDown, BarChart3, MapPin, Smile, Waves } from "lucide-react";
import { business } from "@/data/business";
import { heroBenefits } from "@/data/benefits";
import { WhatsAppButton } from "./WhatsAppButton";

const benefitIcons = {
  "Iniciantes bem-vindos": Smile,
  "Todos os níveis": BarChart3,
  "Ritmo adaptado": Waves,
  "Praia do Pontal": MapPin,
} as const;

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <video
        className="hero__background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={business.assets.communityImage}
        aria-hidden="true"
      >
        <source src={business.assets.heroVideo} type="video/webm" />
      </video>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <div className="eyebrow">
            <MapPin aria-hidden="true" size={18} />
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
            {heroBenefits.map((benefit) => {
              const Icon = benefitIcons[benefit] ?? Waves;
              return (
                <li key={benefit}>
                  <Icon aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
