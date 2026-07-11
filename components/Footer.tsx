import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
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
          <p>
            Aulas de altinha na {business.locale.beach}, {business.locale.neighborhood},{" "}
            região do Posto 12.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <span>Atendimento {serviceLanguages.join(" • ")}</span>
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

        <div className="site-footer__bottom">
          <span>© {year} {business.name}. Todos os direitos reservados.</span>
          <Link href="/privacidade">Política de privacidade</Link>
          <ConsentPreferencesButton />
        </div>
      </div>
    </footer>
  );
}
