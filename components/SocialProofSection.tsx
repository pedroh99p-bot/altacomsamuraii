import Image from "next/image";
import { Camera, ShieldCheck } from "lucide-react";
import { business } from "@/data/business";
import { getAuthorizedTestimonials, socialProofNotes } from "@/data/testimonials";
import { SectionHeading } from "./SectionHeading";
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
      <div className="section-shell social-proof__layout">
        <div className="social-proof__media">
          <Image
            src={business.assets.communityImage}
            alt="Grupo da Altinha com Samurai reunido na praia depois de uma atividade"
            width={1779}
            height={779}
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="social-proof__badge">
            <Camera aria-hidden="true" />
            Experiência real de comunidade
          </div>
        </div>

        <div className="social-proof__content">
          <SectionHeading
            eyebrow="Prova social"
            title="Acolhimento antes de performance."
            text="A segunda metade da página prepara espaço para registros reais, mas não simula conversa, avaliação ou depoimento sem autorização."
          />

          <ul className="social-proof__notes">
            {socialProofNotes.map((note) => (
              <li key={note}>
                <ShieldCheck aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <SocialProofCarousel items={testimonials} />

          <WhatsAppButton
            origin="social_proof"
            section="prova-social"
            ctaId="social-proof-whatsapp"
            variant="soft"
            message="Olá, Samurai! Vi a experiência da comunidade no site e queria entender como participar das aulas."
          >
            Conversar sobre a experiência
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
