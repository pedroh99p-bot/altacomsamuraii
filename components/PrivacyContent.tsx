"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export function PrivacyContent() {
  const { t } = useTranslations();

  return (
    <main className="privacy-page">
      <div className="section-shell privacy-page__content">
        <Link href="/" className="privacy-page__back">
          <ArrowLeft aria-hidden="true" />
          {t.privacy.back}
        </Link>

        <span>{t.privacy.eyebrow}</span>
        <h1>{t.privacy.title}</h1>
        <p>{t.privacy.intro}</p>

        <div className="privacy-page__sections">
          {t.privacy.sections.map((section, index) => (
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
