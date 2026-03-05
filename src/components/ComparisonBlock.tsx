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
  /** Position in the sequence (0-based) — controls aircraft entry/exit direction */
  index?: number;
  isLast?: boolean;
}

const AircraftSVG = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
      fill="currentColor"
    />
  </svg>
);

const ComparisonBlock = ({
  heading,
  description,
  problemImage,
  problemAlt,
  problemCaption,
  solutionImage,
  solutionAlt,
  solutionCaption,
  index = 0,
  isLast = false,
}: ComparisonBlockProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ── Layer 3: Problem scene ── */
  // Problem stays visible but darkens to opacity 0.4
  const problemOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0.35]);
  const problemScale = useTransform(scrollYProgress, [0.15, 0.5], [1, 1.08]);

  /* ── Layer 2: Skyline / atmosphere ── */
  const skylineOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const skylineY = useTransform(scrollYProgress, [0.25, 0.5], ["8%", "0%"]);

  /* ── Layer 1: Aircraft — rises from skyline ── */
  const aircraftY = useTransform(scrollYProgress, [0.3, 0.55], ["120%", "0%"]);
  const aircraftOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7, 0.82], [0, 1, 1, 0]);
  const aircraftScale = useTransform(scrollYProgress, [0.3, 0.55], [0.6, 1]);

  /* ── Aircraft exit — flies toward next section ── */
  const exitY = useTransform(scrollYProgress, [0.72, 0.92], ["0%", "-200%"]);
  const exitX = useTransform(scrollYProgress, [0.72, 0.92], ["0%", isLast ? "80%" : "30%"]);

  /* ── Aircraft entry from previous section ── */
  const entryOpacity = useTransform(scrollYProgress, [0.05, 0.15], [index > 0 ? 0.6 : 0, 0]);
  const entryY = useTransform(scrollYProgress, [0.0, 0.15], ["-100%", "50%"]);

  /* ── Text transitions ── */
  const problemHeadingOpacity = useTransform(scrollYProgress, [0.12, 0.22, 0.38, 0.46], [0, 1, 1, 0]);
  const solutionHeadingOpacity = useTransform(scrollYProgress, [0.48, 0.58], [0, 1]);
  const solutionHeadingY = useTransform(scrollYProgress, [0.48, 0.58], [50, 0]);

  /* ── Atmospheric glow ── */
  const glowOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.7], [0, 0.5, 0.2]);

  /* ── Vignette darkening on problem ── */
  const vignetteOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "120vh" }}
    >
      {/* ═══ LAYER 3 — Problem scene (foreground that darkens) ═══ */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: problemOpacity,
          scale: problemScale,
        }}
      >
        <img
          src={problemImage}
          alt={problemAlt}
          className="w-full h-full object-cover"
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      {/* Additional vignette that intensifies as problem fades */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background)) 90%)",
          opacity: vignetteOpacity,
        }}
      />

      {/* ═══ LAYER 2 — Skyline / Solution backdrop ═══ */}
      <motion.div
        className="absolute inset-0 z-[3]"
        style={{
          opacity: skylineOpacity,
          y: skylineY,
        }}
      >
        <img
          src={solutionImage}
          alt={solutionAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/4" />
      </motion.div>

      {/* ═══ Atmospheric glow ═══ */}
      <motion.div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      {/* Horizon glow line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] z-[4] pointer-events-none"
        style={{
          top: "52%",
          background:
            "linear-gradient(90deg, transparent 5%, hsl(var(--primary) / 0.3) 30%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.3) 70%, transparent 95%)",
          opacity: glowOpacity,
        }}
      />

      {/* ═══ LAYER 1 — Aircraft (rises from skyline) ═══ */}
      <motion.div
        className="absolute z-[6] pointer-events-none left-1/2 -translate-x-1/2"
        style={{
          top: "38%",
          y: aircraftY,
          opacity: aircraftOpacity,
          scale: aircraftScale,
        }}
      >
        <div className="relative">
          <AircraftSVG
            size={56}
            className="text-primary drop-shadow-[0_0_24px_hsl(var(--primary)/0.8)]"
          />
          {/* Engine glow */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 blur-xl" />
          {/* Trail effect */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </motion.div>

      {/* Aircraft exit animation — flies toward next section */}
      <motion.div
        className="absolute z-[6] pointer-events-none left-1/2 -translate-x-1/2"
        style={{
          top: "38%",
          y: exitY,
          x: exitX,
          opacity: useTransform(scrollYProgress, [0.72, 0.78, 0.9, 0.95], [0, 0.7, 0.7, 0]),
        }}
      >
        <AircraftSVG
          size={40}
          className="text-primary/60 drop-shadow-[0_0_16px_hsl(var(--primary)/0.5)]"
        />
      </motion.div>

      {/* Aircraft entry from previous section */}
      {index > 0 && (
        <motion.div
          className="absolute z-[6] pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            top: "30%",
            y: entryY,
            opacity: entryOpacity,
          }}
        >
          <AircraftSVG
            size={32}
            className="text-primary/40 drop-shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
          />
        </motion.div>
      )}

      {/* ═══ Content overlay ═══ */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <div className="container-airavath text-center relative">
          {/* Problem headline */}
          <motion.div
            style={{ opacity: problemHeadingOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <span className="font-heading text-[11px] tracking-[6px] text-destructive/70 uppercase mb-5 block">
              The Problem
            </span>
            <h2 className="font-heading font-semibold text-[32px] md:text-[52px] lg:text-[60px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-5">
              {heading}
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-titanium max-w-[560px] mx-auto leading-[1.65]">
              {description}
            </p>
            <div className="mt-7 px-5 py-2.5 rounded-full border border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <span className="font-sub text-[12px] text-destructive/80 tracking-[3px] uppercase">
                {problemCaption}
              </span>
            </div>
          </motion.div>

          {/* Solution headline (fade-up, 800ms feel via scroll range) */}
          <motion.div
            style={{
              opacity: solutionHeadingOpacity,
              y: solutionHeadingY,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <span className="font-heading text-[11px] tracking-[6px] text-primary/70 uppercase mb-5 block">
              The Solution
            </span>
            <h2 className="font-heading font-semibold text-[32px] md:text-[52px] lg:text-[60px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-5">
              {solutionCaption}
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ═══ Scroll indicator ═══ */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5]"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.12, 0.25], [0.6, 0.6, 0]),
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] text-titanium/50 tracking-[3px] uppercase">
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
