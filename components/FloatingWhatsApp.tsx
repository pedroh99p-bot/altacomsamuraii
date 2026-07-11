"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.65);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("rodape");
    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible || nearFooter) return null;

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
