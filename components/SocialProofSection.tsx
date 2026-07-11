import Image from "next/image";
import { Camera, MessageSquareText, ShieldCheck, UsersRound } from "lucide-react";
import { business } from "@/data/business";
import { communityCards } from "@/data/benefits";
import { getAuthorizedTestimonials, socialProofNotes } from "@/data/testimonials";
import { SocialProofCarousel } from "./SocialProofCarousel";
import { WhatsAppButton } from "./WhatsAppButton";

export function SocialProofSection() {
  const testimonials = getAuthorizedTestimonials();

  return (
    <section
      className="social-proof"
      id="prova-social"
      aria-labelledby="proof-title"
    >
      <span className="anchor-sentinel" id="comunidade" aria-hidden="true" />
      <div className="section-shell social-proof__layout">
        <div className="social-proof__media" aria-label="Comunidade real na areia">
          <Image
            src={business.assets.communityImage}
            alt="Grupo da Altinha com Samurai reunido na praia depois de uma atividade"
            width={1779}
            height={779}
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="social-proof__badge">
            <UsersRound aria-hidden="true" />
            Comunidade real
          </div>
          <div className="social-proof__media-note">
            <Camera aria-hidden="true" />
            Foto real da experiência na praia
          </div>
        </div>

        <div className="social-proof__content">
          <div className="social-proof__heading">
            <span>Comunidade e prova social</span>
            <h2 id="proof-title">
              Mais que uma aula: uma experiência compartilhada na areia.
            </h2>
            <p>
              Pessoas de níveis diferentes treinam em um ambiente leve,
              acolhedor e pensado para evoluir junto, sem simular depoimentos
              ou avaliações que ainda não foram autorizados.
            </p>
          </div>

          <div className="social-proof__cards">
            {communityCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <ul className="social-proof__notes">
            {socialProofNotes.map((note) => (
              <li key={note}>
                <ShieldCheck aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          {testimonials.length > 0 ? (
            <SocialProofCarousel items={testimonials} />
          ) : (
            <div className="proof-carousel proof-carousel--empty">
              <MessageSquareText aria-hidden="true" />
              <h3>Espaço preparado para histórias reais.</h3>
              <p>
                Quando houver prints, avaliações ou depoimentos autorizados,
                eles entram aqui sem improviso e sem simulação.
              </p>
            </div>
          )}

          <WhatsAppButton
            origin="social_proof"
            section="prova-social"
            ctaId="social-proof-whatsapp"
            variant="soft"
            message="Olá, Samurai! Vi a experiência da comunidade no site e queria entender como participar das aulas."
          >
            Quero participar dessa experiência
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
