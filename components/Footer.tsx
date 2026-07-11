import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { navigation, serviceLanguages } from "@/data/navigation";
import { ConsentPreferencesButton } from "./ConsentPreferencesButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
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
          <p>
            Aulas de altinha na {business.locale.beach}, no{" "}
            {business.locale.neighborhood}, com treino adaptado e contato
            direto pelo WhatsApp.
          </p>
          <div className="site-footer__brand-actions">
            <WhatsAppButton
              origin="footer"
              section="rodape"
              ctaId="footer-whatsapp"
              variant="ghost"
              icon={false}
              message="Olá, Samurai! Vim pelo rodapé do site e quero saber como funcionam as aulas."
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp
            </WhatsAppButton>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social"
            >
              <Camera aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__info">
          <h2>Informações</h2>
          <span>
            <MapPin aria-hidden="true" />
            {business.locale.beach}
          </span>
          <span>{business.locale.neighborhood}</span>
          <span>{business.locale.reference}</span>
          <span>Atendimento {serviceLanguages.join(", ")}</span>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} {business.name}. Todos os direitos reservados.</span>
          <Link href="/privacidade">Política de privacidade</Link>
          <ConsentPreferencesButton />
        </div>
      </div>
      <div className="site-footer__credit">
        {business.productionCredit.url ? (
          <a
            href={business.productionCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Produzido por ${business.productionCredit.name}`}
          >
            Produzido por {business.productionCredit.name}
          </a>
        ) : (
          <span>Produzido por {business.productionCredit.name}</span>
        )}
      </div>
    </footer>
  );
}
