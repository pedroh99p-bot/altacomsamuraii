"use client";

import Image from "next/image";
import { MapPin, ShieldCheck, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

type AnimatedMetricProps = {
  value: number;
  suffix: string;
  label: string;
};

function AnimatedMetric({ value, suffix, label }: AnimatedMetricProps) {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const finish = () => {
      setDisplayValue(value);
      setHasAnimated(true);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      finish();
      return;
    }

    let frame = 0;
    const duration = 1100;

    const animate = (startedAt: number) => {
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(eased * value));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          finish();
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate(performance.now());
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [hasAnimated, value]);

  return (
    <article ref={ref} className="about__metric">
      <strong aria-label={`${value}${suffix} - ${label}`}>
        <span aria-hidden="true">{displayValue}</span>
        {suffix ? <em aria-hidden="true">{suffix}</em> : null}
      </strong>
      <span>{label}</span>
    </article>
  );
}

export function AboutSamurai() {
  const { t } = useTranslations();

  return (
    <section className="about" id="especialista" aria-labelledby="about-title">
      <div className="section-shell about__layout">
        <div className="about__heading">
          <span>{t.specialist.eyebrow}</span>
          <h2 id="about-title">{t.specialist.title}</h2>
          <p>{t.specialist.body}</p>
          <div className="about__location">
            <MapPin aria-hidden="true" />
            {t.specialist.locationBadge}
          </div>
        </div>

        <div className="about__visual">
          <div className="about__portrait">
            <Image
              src={business.assets.samuraiPortrait}
              alt={t.specialist.imageAlt}
              width={1209}
              height={1301}
              sizes="(max-width: 900px) 100vw, 48vw"
              className="about__image"
            />
          </div>
          <div className="about__caption">
            <strong>{t.specialist.captionName}</strong>
            <span>{t.specialist.captionText}</span>
          </div>
        </div>

        <div className="about__details">
          <div className="about__metrics" aria-label={t.specialist.metricsAria}>
            {t.specialist.metrics.map((metric) => (
              <AnimatedMetric
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>

          <div className="about__features">
            {t.specialist.features.map((feature, index) => {
              const Icon = index === 0 ? Waves : ShieldCheck;
              return (
                <div key={feature.title}>
                  <Icon aria-hidden="true" />
                  <strong>{feature.title}</strong>
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>

          <WhatsAppButton
            origin="specialist"
            section="especialista"
            ctaId="specialist-whatsapp"
            message={t.specialist.whatsappMessage}
          >
            {t.specialist.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
