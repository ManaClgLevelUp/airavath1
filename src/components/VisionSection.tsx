import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import visionSkyline from "@/assets/vision-skyline.jpg";

/* ── Aircraft formation dots ── */
const AircraftFormation = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* V-formation: 5 aircraft dots */}
    {[
      { x: 0, y: 0, delay: 0 },
      { x: -40, y: -30, delay: 0.4 },
      { x: 40, y: -30, delay: 0.4 },
      { x: -80, y: -60, delay: 0.8 },
      { x: 80, y: -60, delay: 0.8 },
    ].map((a, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary"
        style={{
          top: "45%",
          left: "50%",
          marginLeft: a.x,
          marginTop: a.y,
          boxShadow: "0 0 12px 4px hsl(189 100% 50% / 0.6)",
        }}
        animate={{ x: [0, 300], y: [0, -40] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: a.delay,
        }}
      />
    ))}
  </div>
);

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative overflow-hidden"
      style={{ paddingTop: 220, paddingBottom: 220 }}
    >
      {/* Cinematic background with parallax */}
      <motion.div className="absolute inset-0 -top-[15%] -bottom-[15%]" style={{ y: bgY }}>
        <img
          src={visionSkyline}
          alt="Futuristic city skyline at night with aircraft"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 55% black overlay */}
      <div className="absolute inset-0 bg-background/55" />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background:
            "linear-gradient(to top, hsl(189 100% 50% / 0.15), transparent)",
        }}
      />

      {/* Aircraft formation */}
      <AircraftFormation />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container-airavath">
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-[28px] font-medium text-primary mb-[24px]"
            style={{ letterSpacing: "2px" }}
          >
            Our Vision
          </motion.p>

          {/* Statement */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-[40px] md:text-[64px] font-semibold text-foreground leading-[1.15] mb-[32px] tracking-futuristic"
          >
            A World Where Cities Move Through the Sky
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-[18px] leading-[1.6] text-titanium max-w-[620px]"
          >
            AIRAVATH envisions a future where urban mobility extends beyond roads
            and railways. By connecting cities through electric aviation
            infrastructure, we aim to redefine how people move across the world's
            most dynamic urban environments.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
