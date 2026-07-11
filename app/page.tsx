"use client";

import { AboutSamurai } from "@/components/AboutSamurai";
import { EditorialRoller } from "@/components/EditorialRoller";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroVideoSection } from "@/components/IntroVideoSection";
import { LocationSection } from "@/components/LocationSection";
import { Preloader } from "@/components/Preloader";
import { PracticalExperienceSection } from "@/components/PracticalExperienceSection";
import { Quiz } from "@/components/Quiz";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TopbarRoller } from "@/components/TopbarRoller";
import { useTranslations } from "@/i18n/useTranslations";

export default function Home() {
  const { t } = useTranslations();

  return (
    <>
      <Preloader />
      <TopbarRoller />
      <Header />
      <main>
        <Hero />
        <IntroVideoSection />
        <Quiz />
        <EditorialRoller
          items={t.rollers.one.items}
          label={t.rollers.one.label}
        />
        <AboutSamurai />
        <SocialProofSection />
        <EditorialRoller
          items={t.rollers.two.items}
          variant="navy"
          reverse
          label={t.rollers.two.label}
        />
        <PracticalExperienceSection />
        <FAQSection />
        <LocationSection />
        <EditorialRoller
          id="roller-final"
          items={t.rollers.three.items}
          variant="sand"
          label={t.rollers.three.label}
        />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
