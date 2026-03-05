import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ComparisonBlockProps {
  heading: string;
  description: string;
  problemImage: string;
  problemAlt: string;
  problemCaption: string;
  solutionImage: string;
  solutionAlt: string;
  solutionCaption: string;
}

const ComparisonBlock = ({
  heading,
  description,
  problemImage,
  problemAlt,
  problemCaption,
  solutionImage,
  solutionAlt,
  solutionCaption,
}: ComparisonBlockProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Problem layer sinks down as user scrolls (speed 0.6)
  const problemY = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "60%"]);
  const problemOpacity = useTransform(scrollYProgress, [0.3, 0.55], [1, 0]);
  const problemScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.05]);

  // Solution layer rises into view (speed 0.2)
  const solutionY = useTransform(scrollYProgress, [0.3, 0.65], ["40%", "0%"]);
  const solutionOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  // Heading animations
  const problemHeadingOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const solutionHeadingOpacity = useTransform(scrollYProgress, [0.45, 0.58], [0, 1]);
  const solutionHeadingY = useTransform(scrollYProgress, [0.45, 0.58], [60, 0]);

  // Aircraft position — flies across during transition
  const aircraftX = useTransform(scrollYProgress, [0.2, 0.8], ["-150px", "calc(100vw + 150px)"]);
  const aircraftY = useTransform(scrollYProgress, [0.2, 0.8], ["20px", "-40px"]);
  const aircraftOpacity = useTransform(scrollYProgress, [0.2, 0.28, 0.72, 0.8], [0, 0.8, 0.8, 0]);

  // Background atmosphere glow
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.55, 0.7], [0, 0.4, 0.15]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "120vh" }}
    >
      {/* ── Layer 3: Background atmosphere ── */}
      <div className="absolute inset-0 bg-background">
        {/* Atmospheric gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 70%, hsl(189 100% 50% / 0.08) 0%, transparent 70%)",
            opacity: glowOpacity,
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-overlay opacity-[0.03]" />
        {/* Horizon line glow */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            top: "55%",
            background:
              "linear-gradient(90deg, transparent, hsl(189 100% 50% / 0.2), transparent)",
            opacity: glowOpacity,
          }}
        />
      </div>

      {/* ── Layer 2: Problem image (sinks on scroll) ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: problemY,
          opacity: problemOpacity,
          scale: problemScale,
        }}
      >
        <img
          src={problemImage}
          alt={problemAlt}
          className="w-full h-full object-cover"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* ── Layer 2: Solution image (rises into view) ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: solutionY,
          opacity: solutionOpacity,
        }}
      >
        <img
          src={solutionImage}
          alt={solutionAlt}
          className="w-full h-full object-cover"
        />
        {/* Blue-tinted cinematic overlay */}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
      </motion.div>

      {/* ── Layer 1: Aircraft flyover ── */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{
          top: "42%",
          x: aircraftX,
          y: aircraftY,
          opacity: aircraftOpacity,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary drop-shadow-[0_0_16px_hsl(189_100%_50%/0.7)]"
        >
          <path
            d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="currentColor"
          />
        </svg>
        {/* Engine glow trail */}
        <div className="absolute top-1/2 -left-8 w-12 h-1 bg-gradient-to-l from-primary/60 to-transparent blur-sm -translate-y-1/2" />
      </motion.div>

      {/* ── Content overlay ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container-airavath text-center">
          {/* Problem headline (visible first) */}
          <motion.div
            style={{ opacity: problemHeadingOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="font-heading text-[11px] tracking-[6px] text-destructive/70 uppercase mb-5 block">
              The Problem
            </span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[56px] lg:text-[64px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-6">
              {heading}
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-titanium max-w-[580px] mx-auto leading-[1.6]">
              {description}
            </p>
            {/* Problem caption badge */}
            <div className="mt-8 px-5 py-2.5 rounded-full border border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <span className="font-sub text-[13px] text-destructive/80 tracking-[3px] uppercase">
                {problemCaption}
              </span>
            </div>
          </motion.div>

          {/* Solution headline (fades up at midpoint) */}
          <motion.div
            style={{
              opacity: solutionHeadingOpacity,
              y: solutionHeadingY,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="font-heading text-[11px] tracking-[6px] text-primary/70 uppercase mb-5 block">
              The Solution
            </span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[56px] lg:text-[64px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-6">
              {solutionCaption}
            </h2>
            {/* Accent line */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator at bottom ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15, 0.3], [0.6, 0.6, 0]),
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[11px] text-titanium/50 tracking-[3px] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ComparisonBlock;
