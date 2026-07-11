import {
  campaignKeys,
  readStoredCampaignRecord,
  type CampaignRecord,
} from "@/lib/whatsapp";

export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "",
} as const;

export const consentStorageKey = "samurai_consent_v1";
export const consentEventName = "samurai:consent-updated";
export const openConsentEventName = "samurai:open-consent";

export type ConsentPreferences = {
  version: 1;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

export const analyticsEvents = [
  "page_view",
  "view_content",
  "hero_cta_click",
  "whatsapp_click",
  "quiz_start",
  "quiz_answer",
  "quiz_step",
  "quiz_complete",
  "class_profile_interest",
  "testimonial_interaction",
  "map_interaction",
  "faq_open",
  "scroll_50",
  "scroll_90",
  "lead",
] as const;

export type AnalyticsEventName = (typeof analyticsEvents)[number];
export type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsPayload = Record<string, AnalyticsValue>;

type DataLayerItem = Record<string, unknown> | unknown[];

declare global {
  interface Window {
    dataLayer?: DataLayerItem[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      version?: string;
      queue?: unknown[][];
    };
  }
}

export function createConsentPreferences(
  analytics: boolean,
  marketing: boolean,
): ConsentPreferences {
  return {
    version: 1,
    essential: true,
    analytics,
    marketing,
    savedAt: new Date().toISOString(),
  };
}

export function readConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(consentStorageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    if (parsed.version !== 1 || parsed.essential !== true) return null;

    return {
      version: 1,
      essential: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      savedAt:
        typeof parsed.savedAt === "string"
          ? parsed.savedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(consentStorageKey, JSON.stringify(preferences));
    window.dispatchEvent(
      new CustomEvent(consentEventName, { detail: preferences }),
    );
  } catch {
    return;
  }
}

export function hasAnalyticsConsent() {
  return readConsent()?.analytics === true;
}

export function hasMarketingConsent() {
  return readConsent()?.marketing === true;
}

export function openConsentPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(openConsentEventName));
}

function withCampaignPayload(payload: AnalyticsPayload) {
  const campaign = readStoredCampaignRecord();

  return campaignKeys.reduce<AnalyticsPayload>(
    (nextPayload, key) => {
      if (nextPayload[key] === undefined && campaign[key]) {
        nextPayload[key] = campaign[key];
      }
      return nextPayload;
    },
    { ...payload },
  );
}

function canTrack(event: string) {
  if (event === "lead") {
    return hasAnalyticsConsent() || hasMarketingConsent();
  }

  return hasAnalyticsConsent();
}

export function pushDataLayer(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined" || !canTrack(event)) return;

  const fullPayload = withCampaignPayload(payload);

  window.dispatchEvent(
    new CustomEvent("samurai:analytics", {
      detail: { event, ...fullPayload },
    }),
  );

  pushDataLayer(event, fullPayload);

  if (window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", event, fullPayload);
  }

  if (window.fbq && hasMarketingConsent()) {
    if (event === "lead") {
      window.fbq("track", "Lead", fullPayload);
    } else {
      window.fbq("trackCustom", event, fullPayload);
    }
  }
}

export function trackLead(payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined" || !canTrack("lead")) return;

  try {
    if (window.sessionStorage.getItem("samurai_lead_tracked_v1")) return;
    window.sessionStorage.setItem("samurai_lead_tracked_v1", "1");
  } catch {
    return;
  }

  trackEvent("lead", payload);
}

export function getCampaignPayload(): CampaignRecord {
  return readStoredCampaignRecord();
}
