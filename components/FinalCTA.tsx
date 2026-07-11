import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { business } from "@/data/business";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCTA() {
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
            Comece na areia
          </span>
          <h2 id="final-title">Sua primeira evolução pode começar na areia.</h2>
          <p>
            Não importa se você nunca jogou ou se já pratica. O primeiro passo é
            conversar com o Samurai e entender a melhor forma de começar.
          </p>
          <div className="final-cta__actions">
            <WhatsAppButton
              origin="final_cta"
              section="agendar"
              ctaId="final-cta-whatsapp"
              message="Olá, Samurai! Quero agendar pelo WhatsApp e entender como começar na Praia do Pontal."
            >
              Falar com o Samurai no WhatsApp
            </WhatsAppButton>
            <a className="secondary-link" href="#quiz">
              <ArrowDown aria-hidden="true" />
              Descobrir a aula ideal
            </a>
          </div>
        </div>
        <div className="final-cta__visual" aria-hidden="true">
          <span>Praia do Pontal</span>
          <strong>Comece no seu ritmo</strong>
        </div>
      </div>
    </section>
  );
}
