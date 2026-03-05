import { Zap, PlaneTakeoff, Volume2, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import aircraftHero from "@/assets/aircraft-hero-tech.jpg";

const features = [
  {
    icon: Zap,
    title: "Electric Propulsion",
    description:
      "Electric motors power the aircraft with lower emissions and reduced operational noise compared to traditional aviation systems.",
  },
  {
    icon: PlaneTakeoff,
    title: "Vertical Takeoff & Landing",
    description:
      "Aircraft can take off and land vertically, eliminating the need for traditional runways and enabling urban operations.",
  },
  {
    icon: Volume2,
    title: "Ultra-Quiet Operation",
    description:
      "Advanced rotor systems significantly reduce noise levels, making urban air mobility practical for dense cities.",
  },
  {
    icon: Navigation,
    title: "Advanced Flight Systems",
    description:
      "AI-assisted navigation and flight control systems improve safety, efficiency, and operational reliability.",
  },
];

const AircraftTechSection = () => {
  return (
    <section
      id="technology"
      className="relative overflow-hidden"
      style={{
        paddingTop: "180px",
        paddingBottom: "180px",
        background: "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 1.6%) 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-[0.06]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="techRoute" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(189,100%,50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(189,100%,50%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(189,100%,50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,250 Q400,120 800,280 T1600,200" stroke="url(#techRoute)" strokeWidth="0.6" fill="none" />
          <path d="M0,450 Q350,300 750,420 T1500,350" stroke="url(#techRoute)" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      <div className="container-airavath relative z-10">
        {/* Heading */}
        <ScrollReveal className="flex flex-col items-center text-center mb-3x">
          <h2 className="font-heading font-semibold text-section text-foreground tracking-futuristic max-w-[720px]">
            Next-Generation Electric Aviation
          </h2>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal delay={0.15} className="flex justify-center">
          <p className="font-body text-body-lg text-titanium text-center max-w-[720px] leading-[1.6]">
            Electric vertical take-off and landing aircraft combine advanced propulsion systems,
            lightweight materials, and intelligent navigation technology to enable safe and efficient
            aerial mobility within modern cities.
          </p>
        </ScrollReveal>

        {/* Cinematic Aircraft Visual */}
        <div className="mt-[100px]"><ScrollReveal delay={0.2} className="flex justify-center">
          <motion.div
            className="relative max-w-[1200px] w-full"
            animate={{
              y: [0, -16, 0],
              rotate: [0, 0.4, 0, -0.4, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer glow frame */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-sm" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/10">
              <img
                src={aircraftHero}
                alt="Futuristic eVTOL aircraft in flight over city at night with glowing propulsion"
                className="w-full h-auto object-cover max-h-[560px]"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            </div>
            {/* Glow beneath aircraft */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-28 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>
        </ScrollReveal></div>

        {/* Technology Feature Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4x" style={{ marginTop: "120px" }}>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.15 * i} className="text-center">
              <div className="group flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3x transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(189_100%_50%/0.3)]">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sub text-feature text-foreground mb-2x">
                  {feature.title}
                </h3>
                <p className="font-body text-base text-titanium leading-[1.6] max-w-[260px]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AircraftTechSection;
