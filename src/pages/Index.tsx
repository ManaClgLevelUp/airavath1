import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FutureUAMSection from "@/components/FutureUAMSection";
import SolutionSection from "@/components/SolutionSection";
import AircraftTechSection from "@/components/AircraftTechSection";
import VertiportSection from "@/components/VertiportSection";
import FeaturesSection from "@/components/FeaturesSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FutureUAMSection />
      <SolutionSection />
      <AircraftTechSection />
      <VertiportSection />
      <FeaturesSection />
      <VisionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
