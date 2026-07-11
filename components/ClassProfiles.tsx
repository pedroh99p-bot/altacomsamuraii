import { ArrowRight, Target } from "lucide-react";
import { classProfiles } from "@/data/classProfiles";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function ClassProfiles() {
  return (
    <section className="class-profiles" id="formatos" aria-labelledby="profiles-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Formatos de atendimento"
          title="Escolha pelo seu momento, não por um pacote."
          text="A conversa no WhatsApp ajuda a entender qual dinâmica faz mais sentido para seu nível, objetivo e segurança para começar."
          align="center"
        />

        <div className="class-profiles__grid">
          {classProfiles.map((profile, index) => (
            <article className="profile-card" key={profile.slug}>
              <span className="profile-card__index">0{index + 1}</span>
              <div className="profile-card__icon">
                <Target aria-hidden="true" />
              </div>
              <h3>{profile.title}</h3>
              <dl>
                <div>
                  <dt>Para quem serve</dt>
                  <dd>{profile.forWhom}</dd>
                </div>
                <div>
                  <dt>Objetivo principal</dt>
                  <dd>{profile.objective}</dd>
                </div>
                <div>
                  <dt>Dinâmica</dt>
                  <dd>{profile.dynamic}</dd>
                </div>
              </dl>
              <p className="profile-card__next">
                <ArrowRight aria-hidden="true" />
                {profile.nextStep}
              </p>
              <WhatsAppButton
                origin="class_profile"
                section="formatos"
                ctaId={`profile-${profile.slug}`}
                message={profile.message}
                variant={index === 1 ? "primary" : "ghost"}
                trackingEvent="class_profile_interest"
                trackingPayload={{ recommended_profile: profile.title }}
              >
                Quero esse caminho
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
