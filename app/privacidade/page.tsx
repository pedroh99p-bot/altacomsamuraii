import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Política de privacidade | ${business.name}`,
  description:
    "Estrutura inicial de privacidade da Altinha com Samurai, incluindo cookies, analytics, marketing e pontos pendentes de confirmação.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
