"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalAreaVisible, setFinalAreaVisible] = useState(false);
  const finalAreaEntries = useRef(new Set<string>());

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.65);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || !("IntersectionObserver" in window)) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.02 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const watchedElements = [
      document.getElementById("roller-final"),
      document.getElementById("agendar"),
      document.getElementById("rodape"),
    ].filter((element): element is HTMLElement => Boolean(element));

    if (watchedElements.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;

          if (entry.isIntersecting) {
            finalAreaEntries.current.add(id);
          } else {
            finalAreaEntries.current.delete(id);
          }
        });

        setFinalAreaVisible(finalAreaEntries.current.size > 0);
      },
      { threshold: 0.08 },
    );

    watchedElements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      finalAreaEntries.current.clear();
    };
  }, []);

  if (!visible || heroVisible || finalAreaVisible) return null;

  return (
    <div className="floating-wa">
      <WhatsAppButton
        origin="floating"
        section="floating"
        ctaId="floating-whatsapp"
        ariaLabel="Chamar Altinha com Samurai no WhatsApp"
        message="Olá, Samurai! Vim pelo botão flutuante do site e quero entender como funcionam as aulas de altinha."
      >
        WhatsApp
      </WhatsAppButton>
    </div>
  );
}
