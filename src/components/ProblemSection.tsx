import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import problemTraffic from "@/assets/problem-traffic.jpg";
import problemSky from "@/assets/problem-sky.jpg";

interface CountUpProps {
  target: string;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ target, suffix = "", duration = 1200 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numMatch = target.match(/^([\d.]+)/);
    if (!numMatch) { setDisplay(target); return; }
    const numericValue = parseFloat(numMatch[1]);
    const rest = target.slice(numMatch[1].length);
    const startTime = performance.now();
    const animate = (t: number) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = numericValue * eased;
      setDisplay((Number.isInteger(numericValue) ? Math.round(cur) : cur.toFixed(1)) + rest);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
};

import { useEffect, useState } from "react";

const stats = [
  { number: "120+", description: "Average yearly hours lost in traffic in major cities.", suffix: " Hours" },
  { number: "$1", description: "Estimated economic cost of global traffic congestion.", suffix: " Trillion" },
  { number: "70%", description: "Projected urban population worldwide by 2050.", suffix: "" },
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const problemY = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "60%"]);
  const problemOpacity = useTransform(scrollYProgress, [0.3, 0.55], [1, 0]);
  const solutionY = useTransform(scrollYProgress, [0.3, 0.65], ["40%", "0%"]);
  const solutionOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const problemTextOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const solutionTextOpacity = useTransform(scrollYProgress, [0.45, 0.58], [0, 1]);
  const solutionTextY = useTransform(scrollYProgress, [0.45, 0.58], [60, 0]);
  const aircraftX = useTransform(scrollYProgress, [0.2, 0.8], ["-150px", "calc(100vw + 150px)"]);
  const aircraftY = useTransform(scrollYProgress, [0.2, 0.8], ["20px", "-40px"]);
  const aircraftOpacity = useTransform(scrollYProgress, [0.2, 0.28, 0.72, 0.8], [0, 0.8, 0.8, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.55, 0.7], [0, 0.4, 0.15]);
  const statsOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0.6, 0.75], [40, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height: "150vh" }}>
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 70%, hsl(189 100% 50% / 0.08) 0%, transparent 70%)",
            opacity: glowOpacity,
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-[0.03]" />
      </div>

      {/* Problem image layer */}
      <motion.div className="absolute inset-0" style={{ y: problemY, opacity: problemOpacity }}>
        <img src={problemTraffic} alt="Heavy traffic congestion" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Solution image layer */}
      <motion.div className="absolute inset-0" style={{ y: solutionY, opacity: solutionOpacity }}>
        <img src={problemSky} alt="eVTOL aircraft above city" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
      </motion.div>

      {/* Aircraft flyover */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{ top: "42%", x: aircraftX, y: aircraftY, opacity: aircraftOpacity }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-[0_0_16px_hsl(189_100%_50%/0.7)]">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
        </svg>
        <div className="absolute top-1/2 -left-8 w-12 h-1 bg-gradient-to-l from-primary/60 to-transparent blur-sm -translate-y-1/2" />
      </motion.div>

      {/* Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="container-airavath text-center relative">
          {/* Problem text */}
          <motion.div style={{ opacity: problemTextOpacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-heading text-[11px] tracking-[6px] text-destructive/70 uppercase mb-5 block">The Problem</span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[56px] lg:text-[64px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-6">
              Cities Are Running Out of Time
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-titanium max-w-[580px] mx-auto leading-[1.6]">
              Urban transportation systems are reaching their limits. Traffic congestion wastes billions of hours every year.
            </p>
            <div className="mt-8 px-5 py-2.5 rounded-full border border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <span className="font-sub text-[13px] text-destructive/80 tracking-[3px] uppercase">Hours Lost in Traffic</span>
            </div>
          </motion.div>

          {/* Solution text + stats */}
          <motion.div style={{ opacity: solutionTextOpacity, y: solutionTextY }} className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-heading text-[11px] tracking-[6px] text-primary/70 uppercase mb-5 block">The Solution</span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[56px] lg:text-[64px] text-foreground tracking-futuristic leading-[1.1] max-w-[800px] mx-auto mb-6">
              Minutes in the Sky
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-12" />

            {/* Stats row */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[900px]" style={{ opacity: statsOpacity, y: statsY }}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading text-[38px] leading-[1.1] text-primary tracking-futuristic mb-2">
                    <CountUp target={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="font-body text-[14px] text-titanium max-w-[240px] mx-auto leading-[1.6]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.3], [0.6, 0.6, 0]) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[11px] text-titanium/50 tracking-[3px] uppercase">Scroll</span>
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

export default ProblemSection;
