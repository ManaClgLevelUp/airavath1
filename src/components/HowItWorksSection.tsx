import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, MapPin, PlaneTakeoff, Flag } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: Smartphone,
    title: "Request Your Flight",
    description: "Passengers request air travel instantly using the AIRAVATH platform.",
  },
  {
    icon: MapPin,
    title: "Arrive at Vertiport",
    description: "Travel to the nearest AIRAVATH vertiport located across the city.",
  },
  {
    icon: PlaneTakeoff,
    title: "Take Off",
    description: "Board the electric aircraft and depart vertically from the vertiport.",
  },
  {
    icon: Flag,
    title: "Reach Your Destination",
    description: "Arrive at a vertiport near your destination within minutes.",
  },
];

const JourneyMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView) setStarted(true);
  }, [isInView]);

  const nodePositions = [0, 33.3, 66.6, 100];

  return (
    <div ref={ref} className="relative max-w-[1100px] w-full mx-auto h-[200px] md:h-[280px]">
      {/* Route line background */}
      <div className="absolute top-1/2 left-[28px] right-[28px] h-[2px] -translate-y-1/2 bg-border" />

      {/* Animated route line fill */}
      <motion.div
        className="absolute top-1/2 left-[28px] h-[2px] -translate-y-1/2 bg-primary origin-left"
        initial={{ scaleX: 0 }}
        animate={started ? { scaleX: 1 } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ right: "28px" }}
      />

      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `calc(28px + ${pos}% * (100% - 56px) / 100)` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={started ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: (i / 3) * 4, duration: 0.5, ease: "easeOut" }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={
              started
                ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }
                : {}
            }
            transition={{
              delay: (i / 3) * 4 + 1,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: 56, height: 56 }}
          />
          {/* Node circle */}
          <div className="w-14 h-14 rounded-full border-2 border-primary bg-background flex items-center justify-center relative z-10">
            {(() => {
              const Icon = steps[i].icon;
              return <Icon className="w-5 h-5 text-primary" />;
            })()}
          </div>
          {/* Label */}
          <div className="absolute top-[72px] left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-sub text-body-sm text-primary tracking-wide">
              {`0${i + 1}`}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Aircraft traveling along route */}
      {started && (
        <motion.div
          className="absolute top-1/2 -translate-y-[130%] z-20"
          animate={{
            left: ["28px", "calc(28px + 33.3% * (100% - 56px) / 100)", "calc(28px + 66.6% * (100% - 56px) / 100)", "calc(100% - 28px)"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-[0_0_8px_hsl(189_100%_50%/0.6)]">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-background"
      style={{ paddingTop: "180px", paddingBottom: "180px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-[0.06]" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-float"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-airavath relative z-10">
        {/* Heading */}
        <ScrollReveal className="flex flex-col items-center text-center mb-3x">
          <h2 className="font-heading font-semibold text-section text-foreground tracking-futuristic">
            How AIRAVATH Works
          </h2>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal delay={0.15} className="flex justify-center mb-[120px]">
          <p className="font-body text-body-lg text-titanium text-center max-w-[680px] leading-[1.6]">
            AIRAVATH simplifies urban air travel through a seamless process that connects
            passengers to vertiports and electric aircraft within minutes.
          </p>
        </ScrollReveal>

        {/* Journey Map */}
        <div className="mb-[120px]">
          <JourneyMap />
        </div>

        {/* Step Descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4x">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={0.15 * i} className="text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3x">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sub text-feature text-foreground mb-2x">
                  {step.title}
                </h3>
                <p className="font-body text-base text-titanium leading-[1.6] max-w-[240px]">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
