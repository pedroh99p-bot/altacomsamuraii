"use client";

import { ArrowDown, BarChart3, MapPin, Smile, Waves } from "lucide-react";
import { useEffect, useRef } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

const benefitIcons = [Smile, BarChart3, Waves, MapPin] as const;
const heroReadyEvent = "samurai:hero-ready";

export function Hero() {
  const { t } = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let dispatched = false;

    const markReady = () => {
      if (dispatched) return;
      dispatched = true;
      window.dispatchEvent(new Event(heroReadyEvent));
    };

    if (!video) {
      window.requestAnimationFrame(markReady);
      return;
    }

    if (video.readyState >= 2) {
      window.requestAnimationFrame(markReady);
      return;
    }

    video.addEventListener("loadeddata", markReady, { once: true });
    video.addEventListener("canplay", markReady, { once: true });
    video.addEventListener("error", markReady, { once: true });

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("error", markReady);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {/* Hero video configured to loop indefinitely with autoplay, muted, and playsinline */}
      <video
        ref={videoRef}
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
            {t.hero.eyebrow}
          </div>
          <h1 id="hero-title">
            {t.hero.title} <span>{t.hero.titleHighlight}</span>
          </h1>
          <p>{t.hero.body}</p>
          <div className="hero__actions">
            <WhatsAppButton
              origin="hero"
              section="hero"
              ctaId="hero-primary"
              message={t.hero.whatsappMessage}
            >
              {t.hero.primaryCta}
            </WhatsAppButton>
            <a className="secondary-link" href="#quiz">
              <ArrowDown aria-hidden="true" size={18} />
              {t.hero.secondaryCta}
            </a>
          </div>
          <ul className="hero__chips" aria-label={t.hero.chipsAria}>
            {t.hero.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Waves;
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
