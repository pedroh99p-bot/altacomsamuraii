"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { navigation, serviceLanguages } from "@/data/navigation";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Altinha com Samurai">
        <Image
          src={business.assets.logo}
          alt=""
          width={46}
          height={46}
          priority
        />
        <span>
          <strong>Altinha</strong>
          <small>com Samurai</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <span className="language-pill">{serviceLanguages.join(" • ")}</span>
        <WhatsAppButton
          origin="hero"
          section="header"
          ctaId="header-whatsapp"
          variant="soft"
          className="header-cta"
        >
          WhatsApp
        </WhatsAppButton>
        <button
          type="button"
          className="icon-button menu-trigger"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
