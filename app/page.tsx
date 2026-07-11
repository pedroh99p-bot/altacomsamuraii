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

const rollerOneItems = [
  "Iniciantes bem-vindos",
  "Praia do Pontal",
  "Todos os níveis",
  "PT • EN • ES",
  "Ritmo adaptado",
] as const;

const rollerTwoItems = [
  "Técnica",
  "Confiança",
  "Comunidade",
  "Evolução",
  "Energia de praia",
  "Treino no seu ritmo",
] as const;

const rollerThreeItems = [
  "Sua primeira aula pode começar aqui",
  "Fale com o Samurai",
  "Praia do Pontal",
  "Comece no seu ritmo",
  "Iniciantes bem-vindos",
] as const;

export default function Home() {
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
          items={rollerOneItems}
          label="Iniciantes bem-vindos, Praia do Pontal, Todos os níveis, PT, EN, ES, Ritmo adaptado"
        />
        <AboutSamurai />
        <SocialProofSection />
        <EditorialRoller
          items={rollerTwoItems}
          variant="navy"
          reverse
          label="Técnica, Confiança, Comunidade, Evolução, Energia de praia, Treino no seu ritmo"
        />
        <PracticalExperienceSection />
        <FAQSection />
        <LocationSection />
        <EditorialRoller
          id="roller-final"
          items={rollerThreeItems}
          variant="sand"
          label="Sua primeira aula pode começar aqui, Fale com o Samurai, Praia do Pontal, Comece no seu ritmo, Iniciantes bem-vindos"
        />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
