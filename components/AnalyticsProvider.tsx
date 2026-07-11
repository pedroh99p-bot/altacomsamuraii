"use client";

import { useEffect, useRef, useState } from "react";
import {
  analyticsConfig,
  consentEventName,
  readConsent,
  trackEvent,
  type ConsentPreferences,
} from "@/lib/analytics";
import { persistCampaignParams } from "@/lib/whatsapp";

let devNoticeShown = false;

function loadExternalScript(id: string, src: string) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadAnalyticsScripts(consent: ConsentPreferences) {
  const hasAnyId =
    analyticsConfig.gtmId ||
    analyticsConfig.gaMeasurementId ||
    analyticsConfig.metaPixelId;

  if (process.env.NODE_ENV === "development" && !hasAnyId && !devNoticeShown) {
    devNoticeShown = true;
    console.info(
      "[Altinha com Samurai] Analytics sem IDs públicos configurados; integrações externas não foram carregadas.",
    );
  }

  if (consent.analytics && analyticsConfig.gtmId) {
    window.dataLayer = window.dataLayer ?? [];

    if (!document.getElementById("samurai-gtm-script")) {
      window.dataLayer.push({
        "gtm.start": Date.now(),
        event: "gtm.js",
      });
    }

    loadExternalScript(
      "samurai-gtm-script",
      `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
        analyticsConfig.gtmId,
      )}`,
    );
  }

  if (consent.analytics && analyticsConfig.gaMeasurementId) {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      ((...args: unknown[]) => {
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push(args);
      });

    loadExternalScript(
      "samurai-ga-script",
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        analyticsConfig.gaMeasurementId,
      )}`,
    );

    window.gtag("js", new Date());
    window.gtag("config", analyticsConfig.gaMeasurementId, {
      send_page_view: false,
    });
  }

  if (consent.marketing && analyticsConfig.metaPixelId) {
    window.fbq =
      window.fbq ??
      Object.assign(
        (...args: unknown[]) => {
          window.fbq = window.fbq ?? Object.assign(() => undefined, {});
          window.fbq.queue = window.fbq.queue ?? [];
          window.fbq.queue.push(args);
        },
        { loaded: true, version: "2.0", queue: [] as unknown[][] },
      );

    loadExternalScript(
      "samurai-meta-script",
      "https://connect.facebook.net/en_US/fbevents.js",
    );
    window.fbq("init", analyticsConfig.metaPixelId);
    window.fbq("track", "PageView");
  }
}

export function AnalyticsProvider() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const pageTracked = useRef(false);
  const scrollTracked = useRef({ 50: false, 90: false });

  useEffect(() => {
    persistCampaignParams(window.location.search);
    setConsent(readConsent());

    const onConsent = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentPreferences>;
      setConsent(customEvent.detail ?? readConsent());
    };

    window.addEventListener(consentEventName, onConsent);
    return () => window.removeEventListener(consentEventName, onConsent);
  }, []);

  useEffect(() => {
    if (!consent) return;

    loadAnalyticsScripts(consent);

    if (consent.analytics && !pageTracked.current) {
      pageTracked.current = true;
      trackEvent("page_view", { section: "page" });
    }
  }, [consent]);

  useEffect(() => {
    if (!consent?.analytics) return;

    const onScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;

      const progress = (window.scrollY / documentHeight) * 100;

      if (progress >= 50 && !scrollTracked.current[50]) {
        scrollTracked.current[50] = true;
        trackEvent("scroll_50", { section: "page" });
      }

      if (progress >= 90 && !scrollTracked.current[90]) {
        scrollTracked.current[90] = true;
        trackEvent("scroll_90", { section: "page" });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [consent?.analytics]);

  useEffect(() => {
    if (!consent?.analytics || !("IntersectionObserver" in window)) return;

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = entry.target.getAttribute("id");
          if (!section || seen.has(section)) return;

          seen.add(section);
          trackEvent("view_content", { section });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );

    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [consent?.analytics]);

  return null;
}
