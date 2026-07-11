import { AboutSamurai } from "@/components/AboutSamurai";
import { ClassDetails } from "@/components/ClassDetails";
import { ClassProfiles } from "@/components/ClassProfiles";
import { CommunitySection } from "@/components/CommunitySection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LocationSection } from "@/components/LocationSection";
import { ObjectionSection } from "@/components/ObjectionSection";
import { Preloader } from "@/components/Preloader";
import { Quiz } from "@/components/Quiz";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TopbarRoller } from "@/components/TopbarRoller";
import { TrustStrip } from "@/components/TrustStrip";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Preloader />
      <TopbarRoller />
      <Header />
      <main>
        <Hero />
        <WaveDivider variant="videoToLight" />
        <TrustStrip />
        <WaveDivider variant="lightToBlue" />
        <CommunitySection />
        <WaveDivider variant="blueToWhite" />
        <ObjectionSection />
        <WaveDivider variant="whiteToBlue" />
        <AboutSamurai />
        <WaveDivider variant="blueToWhite" />
        <HowItWorks />
        <WaveDivider variant="whiteToBlue" />
        <ClassDetails />
        <WaveDivider variant="blueToWhite" />
        <ClassProfiles />
        <WaveDivider variant="whiteToBlue" />
        <SocialProofSection />
        <WaveDivider variant="blueToWhite" />
        <LocationSection />
        <WaveDivider variant="whiteToBlue" />
        <Quiz />
        <WaveDivider variant="blueToWhite" />
        <FAQSection />
        <WaveDivider variant="whiteToBlue" />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
