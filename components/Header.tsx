"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { useTranslations } from "@/i18n/useTranslations";
import { LanguageSelector } from "./LanguageSelector";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { t } = useTranslations();
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

      <nav className="desktop-nav" aria-label={t.header.navAria}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {t.navigation[item.key]}
          </a>
        ))}
      </nav>

      <div className="header-language">
        <LanguageSelector />
      </div>

      <div className="header-actions">
        <WhatsAppButton
          origin="hero"
          section="header"
          ctaId="header-whatsapp"
          variant="soft"
          className="header-cta"
          message={t.header.whatsappMessage}
        >
          {t.header.headerWhatsApp}
        </WhatsAppButton>
        <button
          type="button"
          className="icon-button menu-trigger"
          onClick={() => setOpen(true)}
          aria-label={t.header.openMenu}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
