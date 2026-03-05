import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleGrid from "@/components/ParticleGrid";
import heroImage from "@/assets/hero-evtol.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: 0 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Futuristic eVTOL aircraft flying over city"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      <ParticleGrid />

      {/* Content */}
      <div className="relative z-10 container-airavath text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sub text-body-sm text-primary tracking-wide-futuristic uppercase mb-6x"
        >
          The Future of Urban Air Mobility
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-hero max-w-5xl mx-auto mb-6x leading-[1.1] tracking-futuristic"
        >
          <span className="text-foreground">Redefining </span>
          <span className="text-gradient-blue">Flight</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8x"
        >
          AIRAVATH is pioneering next-generation eVTOL aircraft and vertiport infrastructure
          to transform how cities move — silently, sustainably, and at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4x"
        >
          <Button variant="hero" size="lg">
            Explore Technology
          </Button>
          <Button variant="hero-outline" size="lg">
            Investor Relations
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20x grid grid-cols-2 md:grid-cols-4 gap-8x max-w-4xl mx-auto"
        >
          {[
            { value: "320", unit: "km/h", label: "Cruise Speed" },
            { value: "250", unit: "km", label: "Range" },
            { value: "6", unit: "PAX", label: "Passenger Capacity" },
            { value: "Zero", unit: "", label: "Emissions" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-section text-foreground">
                {stat.value}
                <span className="text-primary text-subheading ml-1">{stat.unit}</span>
              </div>
              <div className="font-sub text-body-sm text-muted-foreground mt-1x tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
