import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleGrid from "@/components/ParticleGrid";
import heroSkyline from "@/assets/hero-skyline.jpg";
import heroLiftoff from "@/assets/hero-liftoff.jpg";
import heroFlight from "@/assets/hero-flight.jpg";
import aircraftSilhouette from "@/assets/aircraft-silhouette.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[900px] flex items-center overflow-hidden"
    >
      {/* Background slideshow with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {/* Scene 1 — Skyline */}
        <img
          src={heroSkyline}
          alt="Modern city skyline at sunset"
          className="absolute inset-0 w-full h-full object-cover hero-slide-1"
        />
        {/* Scene 2 — Liftoff */}
        <img
          src={heroLiftoff}
          alt="eVTOL aircraft lifting off from vertiport"
          className="absolute inset-0 w-full h-full object-cover hero-slide-2"
        />
        {/* Scene 3 — Flight */}
        <img
          src={heroFlight}
          alt="eVTOL aircraft flying above city"
          className="absolute inset-0 w-full h-full object-cover hero-slide-3"
        />

        {/* 40% dark overlay */}
        <div className="absolute inset-0 bg-background/40" />
        {/* Bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        {/* Left side gradient for left-aligned text */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Particle / grid overlay */}
      <ParticleGrid />

      {/* Aircraft flyover effect */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <img
          src={aircraftSilhouette}
          alt=""
          aria-hidden="true"
          className="absolute top-[20%] w-16 h-auto opacity-0 animate-aircraft-fly"
          style={{ filter: "blur(1px) brightness(2)" }}
        />
      </div>

      {/* Hero Content — left aligned */}
      <div className="relative z-10 container-airavath w-full">
        <div className="max-w-[720px]">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4x"
          >
            <span className="font-sub text-body-sm text-primary tracking-wide-futuristic uppercase">
              Urban Air Mobility
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="font-heading font-semibold text-foreground tracking-futuristic leading-[1.1] mb-3x max-w-[680px] text-[42px] md:text-hero"
          >
            The Future of Urban Air Travel
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-body-lg text-titanium max-w-[520px] mb-4x leading-[1.6]"
          >
            AIRAVATH is building the next generation of on-demand air mobility
            through electric aircraft and smart vertiport infrastructure designed
            for the world's fastest growing cities.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button
              variant="hero"
              size="lg"
              className="md:w-auto w-full"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join The Future
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="font-sub text-[11px] text-muted-foreground tracking-wide-futuristic uppercase mb-2">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-bounce" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[6]" />
    </section>
  );
};

export default HeroSection;
