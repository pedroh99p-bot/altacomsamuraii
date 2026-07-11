"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { TestimonialItem } from "@/data/testimonials";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";

type SocialProofCarouselProps = {
  items: TestimonialItem[];
};

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#4285f4"
        d="M21.6 12.23c0-.75-.07-1.47-.19-2.16H12v4.09h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.46Z"
      />
      <path
        fill="#34a853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.59A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#fbbc05"
        d="M6.41 13.9A6 6 0 0 1 6.1 12c0-.66.11-1.3.31-1.9V7.51H3.06A10 10 0 0 0 2 12c0 1.61.39 3.14 1.06 4.49l3.35-2.59Z"
      />
      <path
        fill="#ea4335"
        d="M12 5.98c1.47 0 2.78.5 3.82 1.49l2.87-2.87C16.95 2.98 14.7 2 12 2a10 10 0 0 0-8.94 5.51l3.35 2.59C7.2 7.74 9.4 5.98 12 5.98Z"
      />
    </svg>
  );
}

export function SocialProofCarousel({ items }: SocialProofCarouselProps) {
  const { t } = useTranslations();
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const viewedRef = useRef(new Set<string>());
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const hasAutoplay = items.length >= 2 && !reducedMotion;

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const scrollToTestimonial = (
    index: number,
    ctaId: string,
    triggeredByAutoplay = false,
  ) => {
    const safeIndex = (index + items.length) % items.length;
    const track = trackRef.current;
    const target = track?.querySelector<HTMLElement>(
      `[data-testimonial-index="${safeIndex}"]`,
    );

    if (!track || !target) return;

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActive(safeIndex);

    const item = items[safeIndex];
    trackEvent("testimonial_change", {
      section: "prova-social",
      cta_id: ctaId,
      testimonial_id: item.id,
    });

    if (!triggeredByAutoplay) {
      trackEvent("testimonial_interaction", {
        section: "prova-social",
        cta_id: ctaId,
        testimonial_id: item.id,
      });
    }
  };

  useEffect(() => {
    if (!hasAutoplay || !isVisible || paused) return;

    const timer = window.setTimeout(() => {
      scrollToTestimonial(active + 1, "testimonial-autoplay", true);
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [active, hasAutoplay, isVisible, paused]);

  useEffect(() => {
    if (!isVisible) return;

    const item = items[active];
    if (!item || viewedRef.current.has(item.id)) return;

    viewedRef.current.add(item.id);
    trackEvent("testimonial_view", {
      section: "prova-social",
      testimonial_id: item.id,
      source: item.source,
    });
  }, [active, isVisible, items]);

  const updateActiveFromScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(
      track.querySelectorAll<HTMLElement>("[data-testimonial-index]"),
    );
    const trackLeft = track.getBoundingClientRect().left;
    const nextActive = slides.reduce(
      (best, slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: active, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActive(nextActive);
  };

  if (items.length === 0) return null;

  return (
    <div
      className="proof-carousel"
      ref={rootRef}
      aria-label={t.testimonials.carouselAria}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className="proof-carousel__track"
        ref={trackRef}
        onScroll={updateActiveFromScroll}
      >
        {items.map((item, index) => (
          <article
            className="proof-slide"
            key={item.id}
            data-testimonial-index={index}
            aria-current={active === index}
          >
            <div className="proof-slide__source">
              <GoogleIcon />
              <span>{t.testimonials.googleReview}</span>
            </div>
            {item.rating === 5 ? (
              <div
                className="proof-slide__stars"
                aria-label={t.testimonials.starsLabel.replace(
                  "{rating}",
                  String(item.rating),
                )}
              >
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} aria-hidden="true" />
                ))}
              </div>
            ) : null}
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <footer>
              <span>{item.source}</span>
              {item.date ? <time dateTime={item.date}>{item.date}</time> : null}
            </footer>
          </article>
        ))}
      </div>

      {items.length >= 2 ? (
        <div className="proof-carousel__controls">
          <button
            type="button"
            aria-label={t.testimonials.previous}
            onClick={() => scrollToTestimonial(active - 1, "testimonial-prev")}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="proof-carousel__dots" aria-label={t.testimonials.dots}>
            {items.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={t.testimonials.dot.replace(
                  "{index}",
                  String(index + 1),
                )}
                aria-current={active === index}
                onClick={() =>
                  scrollToTestimonial(index, `testimonial-dot-${index + 1}`)
                }
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={t.testimonials.next}
            onClick={() => scrollToTestimonial(active + 1, "testimonial-next")}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
