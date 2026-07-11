"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { useTranslations } from "@/i18n/useTranslations";
import { ConsentPreferencesButton } from "./ConsentPreferencesButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const { t } = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="rodape">
      <div className="section-shell site-footer__layout">
        <div className="site-footer__brand">
          <div className="site-footer__brand-row">
            <Image
              src={business.assets.logo}
              alt=""
              width={58}
              height={58}
              className="site-footer__logo"
            />
            <div>
              <strong>{business.name}</strong>
              <span>{business.instructor}</span>
            </div>
          </div>
          <p>{t.footer.description}</p>
          <div className="site-footer__brand-actions">
            <WhatsAppButton
              origin="footer"
              section="rodape"
              ctaId="footer-whatsapp"
              variant="ghost"
              icon={false}
              message={t.footer.whatsappMessage}
            >
              <MessageCircle aria-hidden="true" />
              {t.common.whatsapp}
            </WhatsAppButton>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social"
            >
              <Camera aria-hidden="true" />
              {t.common.instagram}
            </a>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label={t.footer.navigationTitle}>
          <h2>{t.footer.navigationTitle}</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {t.navigation[item.key]}
            </a>
          ))}
        </nav>

        <div className="site-footer__info">
          <h2>{t.footer.infoTitle}</h2>
          <span>
            <MapPin aria-hidden="true" />
            {t.common.beach}
          </span>
          <span>{t.common.neighborhood}</span>
          <span>{t.common.reference}</span>
          <span>{t.footer.serviceLanguages}</span>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} {business.name}. {t.footer.rights}</span>
          <Link href="/privacidade">{t.footer.privacy}</Link>
          <ConsentPreferencesButton />
        </div>
      </div>
      <div className="site-footer__credit">
        {business.productionCredit.url ? (
          <a
            href={business.productionCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.production}
          >
            {t.common.production}
          </a>
        ) : (
          <span>{t.common.production}</span>
        )}
      </div>
    </footer>
  );
}
