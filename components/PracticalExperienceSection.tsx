"use client";

import {
  CheckCircle2,
  Clock3,
  Languages,
  MapPin,
  MessageCircle,
  Shirt,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { ClassProfilesCarousel } from "./ClassProfilesCarousel";
import { WhatsAppButton } from "./WhatsAppButton";

const stepIcons = [MessageCircle, CheckCircle2, Sparkles, MapPin] as const;
const factIcons = [Clock3, MapPin, Waves, Sun, Languages] as const;

export function PracticalExperienceSection() {
  const { t } = useTranslations();

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
          <span>{t.practical.eyebrow}</span>
          <h2 id="practical-title">{t.practical.title}</h2>
          <p>{t.practical.body}</p>
        </div>

        <ol className="practical__timeline" aria-label={t.practical.stepsAria}>
          {t.practical.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Sparkles;
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
            <span>{t.practical.firstClass.eyebrow}</span>
          </div>
          <h3>{t.practical.firstClass.title}</h3>
          <p>{t.practical.firstClass.text}</p>
          <div className="practical__facts">
            {t.practical.facts.map((fact, index) => {
              const Icon = factIcons[index] ?? Waves;
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
            <h3>{t.practical.checklistTitle}</h3>
          </div>
          <ul>
            {t.practical.checklist.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="practical__profiles" aria-label={t.classProfiles.ariaLabel}>
          <div className="practical__profiles-heading">
            <Waves aria-hidden="true" />
            <h3>{t.classProfiles.heading}</h3>
          </div>
          <ClassProfilesCarousel />
        </div>

        <div className="practical__cta">
          <WhatsAppButton
            origin="practical_details"
            section="como-funciona"
            ctaId="practical-details-whatsapp"
            message={t.practical.whatsappMessage}
          >
            {t.practical.primaryCta}
          </WhatsAppButton>
          <a href="#quiz">
            <MessageCircle aria-hidden="true" />
            {t.practical.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
