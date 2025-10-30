import { Navigation } from "../src/components/Navigation";
import { Hero } from "../src/components/Hero";
import { Showreel } from "../src/components/Showreel";
import { Services } from "../src/components/Services";
import { CaseStudies } from "../src/components/CaseStudies";
import { Process } from "../src/components/Process";
import { Footer } from "../src/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0E1116]">
      <Navigation />
      <Hero />
      <Showreel />
      <Services />
      <CaseStudies />
      <Process />
      <Footer />
    </div>
  );
}


