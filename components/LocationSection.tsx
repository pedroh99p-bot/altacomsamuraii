import { Compass, MapPin, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "./SectionHeading";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppButton } from "./WhatsAppButton";

export function LocationSection() {
  const hasMap = Boolean(business.location.mapEmbedSrc);

  return (
    <section
      className="location-section"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <div className="section-shell location-section__layout">
        <div className="location-section__copy">
          <SectionHeading
            eyebrow="Localização"
            title="Praia do Pontal, Recreio dos Bandeirantes."
            text="A região de referência é o Posto 12. Como não há coordenadas confirmadas no projeto, o ponto exato é sempre alinhado no WhatsApp."
          />

          <div className="meeting-card">
            <MapPin aria-hidden="true" />
            <span>Ponto de encontro</span>
            <h3>{business.location.meetingPoint}</h3>
            <p>{business.location.neighborhoodAndCity}</p>
          </div>

          <div className="location-section__actions">
            <TrackedLink
              className="route-link"
              href={business.location.routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="map_interaction"
              payload={{ section: "localizacao", cta_id: "open-route" }}
            >
              <Navigation aria-hidden="true" />
              Abrir rota
            </TrackedLink>
            <WhatsAppButton
              origin="location"
              section="localizacao"
              ctaId="location-whatsapp"
              variant="ghost"
              message="Olá, Samurai! Quero confirmar o ponto de encontro da aula na Praia do Pontal, região do Posto 12."
            >
              Confirmar ponto exato
            </WhatsAppButton>
          </div>
        </div>

        <div className="location-map">
          {hasMap ? (
            <iframe
              title="Mapa aproximado da Praia do Pontal, região do Posto 12"
              src={business.location.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="location-map__fallback">
              <Compass aria-hidden="true" />
              <h3>Mapa pendente de confirmação.</h3>
              <p>
                A referência confirmada é Praia do Pontal, Recreio dos
                Bandeirantes, região do Posto 12.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
