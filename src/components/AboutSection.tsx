import { PlaneTakeoff, Cpu, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const missionBlocks = [
  {
    icon: PlaneTakeoff,
    title: "Our Mission",
    description:
      "To build the infrastructure that enables fast, efficient, and sustainable aerial mobility for modern cities.",
  },
  {
    icon: Cpu,
    title: "Engineering Innovation",
    description:
      "Leveraging advanced aviation technologies to redefine how cities connect and move.",
  },
  {
    icon: Leaf,
    title: "Sustainable Aviation",
    description:
      "Developing electric aviation solutions that reduce environmental impact and support future cities.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative section-padding bg-background overflow-hidden"
    >
      {/* Background accent — vertical beam + grid */}
      <div className="absolute top-0 right-[30%] w-px h-full bg-primary/[0.08]" />
      <div className="absolute inset-0 grid-overlay opacity-[0.06] pointer-events-none" />

      <div className="container-airavath relative z-10">
        {/* Heading — left aligned */}
        <ScrollReveal delay={0.12} duration={0.7}>
          <h2 className="font-heading text-[36px] md:text-[48px] font-semibold text-foreground tracking-futuristic mb-[96px]">
            About AIRAVATH
          </h2>
        </ScrollReveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-[80px]">
          {/* Left — Story */}
          <div className="lg:col-span-6">
            {[
              "AIRAVATH is an emerging urban air mobility company focused on building the next generation of aerial transportation infrastructure.",
              "By integrating electric aircraft operations, vertiport networks, and intelligent mobility platforms, AIRAVATH aims to enable fast, safe, and sustainable transportation across the world's fastest growing cities.",
              "Our vision is to unlock the skies as the next transportation layer and redefine how people move through urban environments.",
            ].map((p, i) => (
              <ScrollReveal key={i} delay={0.15 * i + 0.2} duration={0.6}>
                <p className="font-body text-[18px] leading-[1.7] text-titanium max-w-[520px] mb-[24px] last:mb-0">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Right — Mission blocks */}
          <div className="lg:col-span-6 flex flex-col gap-[24px]">
            {missionBlocks.map((block, i) => (
              <ScrollReveal key={block.title} direction="right" delay={0.15 * i + 0.2} duration={0.6}>
                <div className="group flex items-start gap-5 rounded-[10px] border border-border bg-card p-5 md:p-[28px] min-h-[120px] hover:-translate-y-2 hover:shadow-[0_0_24px_hsl(189_100%_50%/0.15)] transition-all duration-500">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <block.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sub text-[22px] font-medium text-foreground mb-1">
                      {block.title}
                    </h3>
                    <p className="font-body text-[16px] text-titanium leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
