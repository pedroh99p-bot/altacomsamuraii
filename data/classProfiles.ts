export type ClassProfileId = "zero" | "confidence" | "technique";

export type ClassProfile = {
  id: ClassProfileId;
  emoji: string;
  titleKey: string;
  descriptionKey: string;
  audienceKey: string;
  ctaKey: string;
  whatsappMessageKey: string;
  order: number;
  enabled: boolean;
};

export const classProfiles: ClassProfile[] = [
  {
    id: "zero",
    emoji: "⚽",
    titleKey: "classProfiles.profiles.zero.title",
    descriptionKey: "classProfiles.profiles.zero.description",
    audienceKey: "classProfiles.profiles.zero.audience",
    ctaKey: "classProfiles.profiles.zero.cta",
    whatsappMessageKey: "classProfiles.profiles.zero.whatsappMessage",
    order: 1,
    enabled: true,
  },
  {
    id: "confidence",
    emoji: "💪",
    titleKey: "classProfiles.profiles.confidence.title",
    descriptionKey: "classProfiles.profiles.confidence.description",
    audienceKey: "classProfiles.profiles.confidence.audience",
    ctaKey: "classProfiles.profiles.confidence.cta",
    whatsappMessageKey: "classProfiles.profiles.confidence.whatsappMessage",
    order: 2,
    enabled: true,
  },
  {
    id: "technique",
    emoji: "🎯",
    titleKey: "classProfiles.profiles.technique.title",
    descriptionKey: "classProfiles.profiles.technique.description",
    audienceKey: "classProfiles.profiles.technique.audience",
    ctaKey: "classProfiles.profiles.technique.cta",
    whatsappMessageKey: "classProfiles.profiles.technique.whatsappMessage",
    order: 3,
    enabled: true,
  },
];

export function getEnabledClassProfiles() {
  return classProfiles
    .filter((profile) => profile.enabled)
    .sort((a, b) => a.order - b.order);
}
