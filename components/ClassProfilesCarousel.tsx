"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  getEnabledClassProfiles,
  type ClassProfileId,
} from "@/data/classProfiles";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { cx } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";

const profiles = getEnabledClassProfiles();

export function ClassProfilesCarousel() {
  const { t } = useTranslations();
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const viewedRef = useRef(false);
  const activeTrackedRef = useRef(0);
  const [active, setActive] = useState(0);

  const getCopy = (id: ClassProfileId) => t.classProfiles.profiles[id];

  const scrollToProfile = (index: number, source: string) => {
    const safeIndex = Math.max(0, Math.min(index, profiles.length - 1));
    const track = trackRef.current;
    const target = track?.querySelector<HTMLElement>(
      `[data-profile-index="${safeIndex}"]`,
    );

    if (!track || !target) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActive(safeIndex);

    const profile = profiles[safeIndex];
    const copy = getCopy(profile.id);
    trackEvent("class_profile_change", {
      section: "class_profiles",
      cta_id: source,
      profile_id: profile.id,
      profile_name: copy.title,
    });
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || viewedRef.current) return;

        viewedRef.current = true;
        const profile = profiles[active];
        const copy = getCopy(profile.id);
        trackEvent("class_profile_view", {
          section: "class_profiles",
          profile_id: profile.id,
          profile_name: copy.title,
        });
      },
      { threshold: 0.42 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [active, t]);

  useEffect(() => {
    if (!viewedRef.current || activeTrackedRef.current === active) return;

    activeTrackedRef.current = active;
    const profile = profiles[active];
    const copy = getCopy(profile.id);
    trackEvent("class_profile_view", {
      section: "class_profiles",
      profile_id: profile.id,
      profile_name: copy.title,
    });
  }, [active, t]);

  const updateActiveFromScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-profile-index]"),
    );
    const trackLeft = track.getBoundingClientRect().left;
    const nextActive = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: active, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActive(nextActive);
  };

  return (
    <div
      className="class-profile-carousel"
      ref={rootRef}
      aria-label={t.classProfiles.ariaLabel}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollToProfile(active - 1, "class-profile-keyboard-prev");
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollToProfile(active + 1, "class-profile-keyboard-next");
        }
      }}
    >
      <div
        className="class-profile-carousel__track"
        ref={trackRef}
        tabIndex={0}
        onScroll={updateActiveFromScroll}
      >
        {profiles.map((profile, index) => {
          const copy = getCopy(profile.id);
          const isActive = active === index;
          const ctaId = `class-profile-${profile.id}`;

          return (
            <article
              className={cx(
                "class-profile-card",
                isActive && "class-profile-card--active",
              )}
              data-profile-index={index}
              key={profile.id}
              aria-current={isActive}
            >
              <div className="class-profile-card__top">
                <span aria-hidden="true">{profile.emoji}</span>
                <small>
                  {t.classProfiles.progress
                    .replace("{current}", String(index + 1))
                    .replace("{total}", String(profiles.length))}
                </small>
              </div>
              <h4>{copy.title}</h4>
              <p>{copy.description}</p>
              <div className="class-profile-card__audience">
                <strong>{t.classProfiles.audienceLabel}</strong>
                <span>{copy.audience}</span>
              </div>
              <WhatsAppButton
                origin="class_profile"
                section="class_profiles"
                ctaId={ctaId}
                message={copy.whatsappMessage}
                variant={isActive ? "soft" : "ghost"}
                trackingEvent="class_profile_interest"
                trackingPayload={{
                  profile_id: profile.id,
                  profile_name: copy.title,
                }}
              >
                {copy.cta}
              </WhatsAppButton>
            </article>
          );
        })}
      </div>

      <div className="class-profile-carousel__controls">
        <button
          type="button"
          aria-label={t.classProfiles.previous}
          onClick={() => scrollToProfile(active - 1, "class-profile-prev")}
          disabled={active === 0}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div
          className="class-profile-carousel__dots"
          aria-label={t.classProfiles.dots}
        >
          {profiles.map((profile, index) => (
            <button
              type="button"
              key={profile.id}
              aria-label={t.classProfiles.dot.replace(
                "{index}",
                String(index + 1),
              )}
              aria-current={active === index}
              onClick={() =>
                scrollToProfile(index, `class-profile-dot-${index + 1}`)
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={t.classProfiles.next}
          onClick={() => scrollToProfile(active + 1, "class-profile-next")}
          disabled={active === profiles.length - 1}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <p className="class-profile-carousel__status" aria-live="polite">
        {t.classProfiles.progress
          .replace("{current}", String(active + 1))
          .replace("{total}", String(profiles.length))}
      </p>
    </div>
  );
}
