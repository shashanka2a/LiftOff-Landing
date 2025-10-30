import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

export default function App() {
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
