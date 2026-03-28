import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { TheRealProblem } from '@/components/sections/TheRealProblem';
import { SolutionsBlueprint } from '@/components/sections/SolutionsBlueprint';
import { DeploymentBlueprint } from '@/components/sections/DeploymentBlueprint';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { IncludedFeatures } from '@/components/sections/IncludedFeatures';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        {/* EL PROBLEMA Y EL POR QUÉ (WHY) */}
        <HeroSection />
        <ProblemAgitation />
        <TheRealProblem />
        <SolutionsBlueprint />
        
        {/* EL CÓMO (HOW) */}
        <DeploymentBlueprint />
        
        {/* EL QUÉ (WHAT) */}
        <ServicesBento />
        <IncludedFeatures />
        <Testimonials />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
