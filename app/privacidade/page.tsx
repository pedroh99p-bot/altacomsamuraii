import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { business } from "@/data/business";
import { privacySections } from "@/data/privacy";

export const metadata: Metadata = {
  title: `Política de privacidade | ${business.name}`,
  description:
    "Estrutura inicial de privacidade da Altinha com Samurai, incluindo cookies, analytics, marketing e pontos pendentes de confirmação.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="section-shell privacy-page__content">
        <Link href="/" className="privacy-page__back">
          <ArrowLeft aria-hidden="true" />
          Voltar para a landing page
        </Link>

        <span>Privacidade</span>
        <h1>Política de privacidade inicial</h1>
        <p>
          Esta página descreve a estrutura de privacidade do site{" "}
          {business.name}. Ela não substitui a validação jurídica final porque
          nome jurídico, CNPJ, e-mail de privacidade e prazos formais ainda
          precisam ser confirmados.
        </p>

        <div className="privacy-page__sections">
          {privacySections.map((section, index) => (
            <section key={section.title} aria-labelledby={`privacy-section-${index + 1}`}>
              <h2 id={`privacy-section-${index + 1}`}>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
