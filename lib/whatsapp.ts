import { business } from "@/data/business";
import type { QuizAnswerLabels } from "@/data/quiz";

export const campaignKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type CampaignKey = (typeof campaignKeys)[number];
export type CampaignRecord = Partial<Record<CampaignKey, string>>;

export type WhatsAppOrigin =
  | "hero"
  | "intro_video"
  | "quick_info"
  | "community"
  | "objections"
  | "specialist"
  | "practical_details"
  | "how_it_works"
  | "class_details"
  | "class_profile"
  | "social_proof"
  | "location"
  | "quiz"
  | "faq"
  | "floating"
  | "final_cta"
  | "footer";

export type WhatsAppOptions = {
  origin: WhatsAppOrigin;
  section?: string;
  ctaId?: string;
  message?: string;
  search?: string;
  campaign?: CampaignRecord;
  quizData?: QuizAnswerLabels;
};

export const campaignStorageKey = "samurai_first_campaign_v1";

export function extractCampaignRecord(search = ""): CampaignRecord {
  const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);

  return campaignKeys.reduce<CampaignRecord>((record, key) => {
    const value = params.get(key);
    if (value) record[key] = value;
    return record;
  }, {});
}

export function campaignRecordToEntries(record: CampaignRecord = {}) {
  return campaignKeys
    .map((key) => [key, record[key]] as const)
    .filter((entry): entry is readonly [CampaignKey, string] => Boolean(entry[1]));
}

export function persistCampaignParams(search = "") {
  if (typeof window === "undefined") return;

  try {
    if (window.localStorage.getItem(campaignStorageKey)) return;

    const record = extractCampaignRecord(search);
    if (campaignRecordToEntries(record).length > 0) {
      window.localStorage.setItem(campaignStorageKey, JSON.stringify(record));
    }
  } catch {
    return;
  }
}

export function readStoredCampaignRecord(): CampaignRecord {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(campaignStorageKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CampaignRecord;
    return campaignKeys.reduce<CampaignRecord>((record, key) => {
      if (typeof parsed[key] === "string" && parsed[key]) {
        record[key] = parsed[key];
      }
      return record;
    }, {});
  } catch {
    return {};
  }
}

export function resolveCampaignRecord(search = ""): CampaignRecord {
  const stored = readStoredCampaignRecord();
  if (campaignRecordToEntries(stored).length > 0) return stored;
  return extractCampaignRecord(search);
}

function buildQuizText(quizData?: QuizAnswerLabels) {
  if (!quizData) return "";

  const lines = [
    ["Meu nível", quizData.level],
    ["Meu objetivo", quizData.goal],
    ["Prefiro começar", quizData.format],
    ["Melhor período", quizData.period],
    ["Minha principal dúvida", quizData.concern],
  ]
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([label, value]) => `${label}: ${value}`);

  return lines.length ? `Respostas do pré-atendimento:\n${lines.join("\n")}` : "";
}

export function buildWhatsAppUrl({
  origin,
  section,
  ctaId,
  message = "Olá, Samurai! Conheci as aulas pelo site e gostaria de saber como funciona para começar.",
  search = "",
  campaign,
  quizData,
}: WhatsAppOptions) {
  const campaignRecord = campaign ?? extractCampaignRecord(search);
  const campaignEntries = campaignRecordToEntries(campaignRecord);
  const campaignText = campaignEntries.length
    ? `Origem da campanha:\n${campaignEntries
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")}`
    : "";

  const contextLines = [
    `Origem do clique: ${origin}`,
    section ? `Seção: ${section}` : "",
    ctaId ? `CTA: ${ctaId}` : "",
  ].filter(Boolean);

  const parts = [
    message.trim(),
    buildQuizText(quizData),
    contextLines.join("\n"),
    campaignText,
  ].filter(Boolean);

  return `${business.whatsappBase}?text=${encodeURIComponent(parts.join("\n\n"))}`;
}
