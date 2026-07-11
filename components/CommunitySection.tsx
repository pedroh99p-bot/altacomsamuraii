import Image from "next/image";
import { ArrowRight, UsersRound } from "lucide-react";
import { business } from "@/data/business";
import { communityCards } from "@/data/benefits";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function CommunitySection() {
  return (
    <section className="community" id="comunidade" aria-labelledby="community-title">
      <div className="section-shell community__layout">
        <div className="community__text">
          <SectionHeading
            eyebrow="Comunidade na areia"
            title="Mais que aprender altinha: fazer parte da praia."
            text="A aula cria um espaço leve para treinar, trocar energia e evoluir com pessoas em diferentes níveis."
          />
          <WhatsAppButton
            origin="community"
            section="comunidade"
            ctaId="community-experience"
            variant="soft"
            message="Olá, Samurai! Quero conhecer a experiência de altinha e entender como participar das aulas no Pontal."
          >
            Quero conhecer a experiência
          </WhatsAppButton>
        </div>

        <div className="community__image-wrap">
          <Image
            src={business.assets.communityImage}
            alt="Samurai e alunos reunidos depois de uma aula de altinha na praia"
            width={1779}
            height={779}
            sizes="(max-width: 900px) 100vw, 58vw"
            className="community__image"
          />
          <div className="community__gradient" aria-hidden="true" />
          <div className="community__seal">
            <UsersRound aria-hidden="true" />
            Comunidade real
          </div>
          <div className="community__cards">
            {communityCards.map((card) => (
              <article key={card.title}>
                <ArrowRight aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
