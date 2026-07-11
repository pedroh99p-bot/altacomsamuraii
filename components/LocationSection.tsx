"use client";

import { Compass, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppButton } from "./WhatsAppButton";

export function LocationSection() {
  const { t } = useTranslations();
  const hasMap = Boolean(business.location.mapEmbedSrc);

  return (
    <section
      className="location-section"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <div className="section-shell location-section__layout">
        <div className="location-section__copy">
          <div className="location-section__heading">
            <span>{t.location.eyebrow}</span>
            <h2 id="location-title">{t.location.title}</h2>
            <p>{t.location.body}</p>
          </div>

          <div className="meeting-card">
            <MapPin aria-hidden="true" />
            <span>{t.location.meetingLabel}</span>
            <h3>{t.location.meetingPoint}</h3>
            <p>{t.location.neighborhoodAndCity}</p>
            <small>
              <ShieldCheck aria-hidden="true" />
              {t.location.exactNote}
            </small>
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
              {t.location.route}
            </TrackedLink>
            <WhatsAppButton
              origin="location"
              section="localizacao"
              ctaId="location-whatsapp"
              message={t.location.whatsappMessage}
            >
              {t.location.cta}
            </WhatsAppButton>
          </div>
        </div>

        <div className="location-map">
          {hasMap ? (
            <iframe
              title={t.location.mapTitle}
              src={business.location.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="location-map__fallback">
              <Compass aria-hidden="true" />
              <h3>{t.location.mapPendingTitle}</h3>
              <p>{t.location.mapPendingText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
