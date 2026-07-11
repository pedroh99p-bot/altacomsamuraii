"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquareText } from "lucide-react";
import type { TestimonialItem } from "@/data/testimonials";
import { trackEvent } from "@/lib/analytics";

type SocialProofCarouselProps = {
  items: TestimonialItem[];
};

export function SocialProofCarousel({ items }: SocialProofCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  if (items.length === 0) {
    return (
      <div className="proof-carousel proof-carousel--empty">
        <MessageSquareText aria-hidden="true" />
        <h3>Espaço pronto para provas reais.</h3>
        <p>
          Prints, avaliações e depoimentos só aparecem aqui quando forem reais,
          autorizados e adicionados aos dados do site.
        </p>
      </div>
    );
  }

  const goTo = (index: number, ctaId: string) => {
    const safeIndex = Math.max(0, Math.min(index, items.length - 1));
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: safeIndex * track.clientWidth,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    setActive(safeIndex);
    trackEvent("testimonial_interaction", {
      section: "prova-social",
      cta_id: ctaId,
      testimonial_id: items[safeIndex]?.id,
    });
  };

  return (
    <div className="proof-carousel" aria-label="Provas sociais autorizadas">
      <div
        className="proof-carousel__track"
        ref={trackRef}
        onScroll={(event) => {
          const width = event.currentTarget.clientWidth;
          if (width <= 0) return;
          setActive(Math.round(event.currentTarget.scrollLeft / width));
        }}
      >
        {items.map((item) => (
          <article className="proof-slide" key={item.id}>
            {item.image ? (
              <img src={item.image} alt={item.alt} loading="lazy" />
            ) : null}
            <div>
              <span>{item.source}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              {item.date ? <time dateTime={item.date}>{item.date}</time> : null}
            </div>
          </article>
        ))}
      </div>

      <div className="proof-carousel__controls">
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => goTo(active - 1, "testimonial-prev")}
          disabled={active === 0}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="proof-carousel__dots" aria-label="Indicadores">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.id}
              aria-label={`Ir para prova social ${index + 1}`}
              aria-current={active === index}
              onClick={() => goTo(index, `testimonial-dot-${index + 1}`)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => goTo(active + 1, "testimonial-next")}
          disabled={active === items.length - 1}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
