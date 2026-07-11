import {
  CheckCircle2,
  Clock3,
  Languages,
  MapPin,
  MessageCircle,
  Shirt,
  Sparkles,
  Sun,
  UserRound,
  Waves,
} from "lucide-react";
import { business } from "@/data/business";
import { classChecklist } from "@/data/classDetails";
import { classProfiles } from "@/data/classProfiles";
import { howItWorksSteps } from "@/data/howItWorks";
import { WhatsAppButton } from "./WhatsAppButton";

const classFacts = [
  {
    label: "Duração média",
    value: business.serviceFacts.duration,
    icon: Clock3,
  },
  {
    label: "Local",
    value: `${business.locale.beach}, ${business.locale.reference}`,
    icon: MapPin,
  },
  {
    label: "Níveis",
    value: business.serviceFacts.levels,
    icon: Waves,
  },
  {
    label: "Períodos",
    value: business.serviceFacts.schedule,
    icon: Sun,
  },
  {
    label: "Idiomas",
    value: business.serviceFacts.languages,
    icon: Languages,
  },
] as const;

export function PracticalExperienceSection() {
  return (
    <section
      className="practical"
      id="como-funciona"
      aria-labelledby="practical-title"
    >
      <span className="anchor-sentinel" id="detalhes" aria-hidden="true" />
      <span className="anchor-sentinel" id="formatos" aria-hidden="true" />
      <div className="section-shell practical__layout">
        <div className="practical__intro">
          <span>Como funciona</span>
          <h2 id="practical-title">
            Tudo que você precisa saber antes de chegar na areia.
          </h2>
          <p>
            O contato é direto, o treino respeita seu nível e os detalhes finais
            são confirmados pelo WhatsApp antes da primeira aula.
          </p>
        </div>

        <ol className="practical__timeline" aria-label="Passos para começar">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number}>
                <span>{step.number}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>

        <article className="practical__first-class">
          <div>
            <Sparkles aria-hidden="true" />
            <span>Sua primeira aula</span>
          </div>
          <h3>Orientação na areia, ritmo adaptado e materiais da aula.</h3>
          <p>
            A experiência acontece na {business.locale.beach}, no{" "}
            {business.locale.neighborhood}, na região do Posto 12. Você pode
            começar sozinho e confirmar o ponto de encontro no contato.
          </p>
          <div className="practical__facts">
            {classFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label}>
                  <Icon aria-hidden="true" />
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              );
            })}
          </div>
        </article>

        <div className="practical__checklist">
          <div>
            <Shirt aria-hidden="true" />
            <h3>O que levar</h3>
          </div>
          <ul>
            {classChecklist.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              );
            })}
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>Confirmação do ponto de encontro</span>
            </li>
          </ul>
        </div>

        <div className="practical__profiles" aria-label="Perfis de aula">
          <div className="practical__profiles-heading">
            <UserRound aria-hidden="true" />
            <h3>Escolha pelo seu momento</h3>
          </div>
          <div className="practical__profile-grid">
            {classProfiles.map((profile, index) => (
              <article key={profile.slug} className={index === 0 ? "is-featured" : undefined}>
                <span>0{index + 1}</span>
                <h4>{profile.title}</h4>
                <p>{profile.objective}</p>
                <small>{profile.nextStep}</small>
                <WhatsAppButton
                  origin="class_profile"
                  section="formatos"
                  ctaId={`profile-${profile.slug}`}
                  message={profile.message}
                  variant={index === 0 ? "soft" : "ghost"}
                  trackingEvent="class_profile_interest"
                  trackingPayload={{ recommended_profile: profile.title }}
                >
                  Quero esse caminho
                </WhatsAppButton>
              </article>
            ))}
          </div>
        </div>

        <div className="practical__cta">
          <WhatsAppButton
            origin="practical_details"
            section="como-funciona"
            ctaId="practical-details-whatsapp"
            message="Olá, Samurai! Vi os detalhes das aulas no site e gostaria de entender qual opção faz mais sentido para mim."
          >
            Agendar minha primeira aula
          </WhatsAppButton>
          <a href="#quiz">
            <MessageCircle aria-hidden="true" />
            Refazer o pré-atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
