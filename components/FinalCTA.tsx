import Image from "next/image";
import { ArrowDown } from "lucide-react";
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
        <span>Altinha com Samurai</span>
        <h2 id="final-title">Sua primeira evolução pode começar na areia.</h2>
        <p>
          Iniciantes são bem-vindos, o treino é adaptado e o contato é direto
          com Samurai na Praia do Pontal.
        </p>
        <div className="final-cta__actions">
          <WhatsAppButton
            origin="final_cta"
            section="agendar"
            ctaId="final-cta-whatsapp"
            message="Olá, Samurai! Quero agendar pelo WhatsApp e entender como começar na Praia do Pontal."
          >
            Agendar pelo WhatsApp
          </WhatsAppButton>
          <a className="secondary-link" href="#quiz">
            <ArrowDown aria-hidden="true" />
            Fazer pré-atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
