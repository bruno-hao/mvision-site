import { Atmosphere } from "@/components/Atmosphere";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { QuickProof } from "@/components/QuickProof";
import { Specialties } from "@/components/Specialties";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { StoreShowcase } from "@/components/StoreShowcase";
import { Audiences } from "@/components/Audiences";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <QuickProof />
        <Specialties />
        <About />
        <HowItWorks />
        <StoreShowcase />
        <Audiences />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
