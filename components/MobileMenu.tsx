"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { WhatsAppButton } from "./WhatsAppButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`mobile-overlay${open ? " mobile-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu__top">
          <Image
            src={business.assets.logo}
            alt="Altinha com Samurai"
            width={42}
            height={42}
          />
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label="Menu mobile">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__languages">
          <span>Atendimento</span>
          <LanguageSelector />
        </div>
        <WhatsAppButton
          origin="hero"
          section="mobile-menu"
          ctaId="mobile-menu-whatsapp"
          className="mobile-menu__cta"
        >
          Agendar pelo WhatsApp
        </WhatsAppButton>
      </aside>
    </>
  );
}
