import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

const team = [
  {
    name: "Founder / CEO",
    role: "Vision & Strategy",
    description:
      "Leading AIRAVATH's mission to build the next generation of aerial mobility infrastructure.",
  },
  {
    name: "Chief Technology Officer",
    role: "Aviation Systems",
    description:
      "Responsible for aircraft technology integration and advanced aviation engineering systems.",
  },
  {
    name: "Head of Infrastructure",
    role: "Vertiport Network",
    description:
      "Designing scalable vertiport infrastructure across major cities.",
  },
  {
    name: "Head of Operations",
    role: "Mobility Platform",
    description:
      "Developing operational systems for AIRAVATH aerial mobility services.",
  },
];

const TeamSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="team"
      className="relative overflow-hidden section-padding"
      style={{
        background: "linear-gradient(180deg, #000000, #030303)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.06] pointer-events-none" />

      <div className="container-airavath relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-[36px] md:text-[48px] font-semibold text-foreground tracking-futuristic text-center mb-[24px]"
        >
          Leadership & Founding Team
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-[18px] leading-[1.6] text-titanium text-center max-w-[720px] mx-auto mb-[120px]"
        >
          AIRAVATH is assembling a multidisciplinary team of aviation engineers,
          infrastructure experts, and mobility innovators dedicated to building
          the future of urban air transportation.
        </motion.p>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.3 }}
              className="group flex flex-col items-center text-center rounded-[12px] border border-border bg-card p-[32px] h-[340px] hover:-translate-y-2 hover:shadow-[0_0_24px_hsl(189_100%_50%/0.15)] hover:border-primary/30 transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className="w-[120px] h-[120px] rounded-full mb-[24px] flex-shrink-0 flex items-center justify-center border-2 border-primary/60 group-hover:border-primary transition-colors duration-300"
                style={{
                  background: "linear-gradient(180deg, #111111, #050505)",
                  boxShadow: "0 0 16px hsl(189 100% 50% / 0.15)",
                }}
              >
                <img
                  src={avatarPlaceholder}
                  alt={member.name}
                  className="w-[72px] h-[72px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Name */}
              <h3 className="font-sub text-[20px] font-medium text-foreground mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="font-body text-[14px] text-primary mb-[16px]">
                {member.role}
              </p>

              {/* Description */}
              <p className="font-body text-[14px] text-titanium leading-[1.5]">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
