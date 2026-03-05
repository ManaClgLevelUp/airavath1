import { TrendingUp, Cpu, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import cardAirTaxi from "@/assets/card-air-taxi.jpg";
import cardUam from "@/assets/card-uam.jpg";
import cardNextgen from "@/assets/card-nextgen.jpg";

const aircraftCards = [
  {
    title: "Electric Air Taxi",
    description:
      "Vertical take-off aircraft designed for efficient, quiet, and sustainable transportation within cities.",
    image: cardAirTaxi,
  },
  {
    title: "Urban Air Mobility",
    description:
      "Advanced aircraft networks designed to move passengers across cities in minutes rather than hours.",
    image: cardUam,
  },
  {
    title: "Next-Generation Aviation",
    description:
      "Future electric aircraft platforms designed for scalable aerial mobility across global cities.",
    image: cardNextgen,
  },
];

const validationBlocks = [
  {
    icon: TrendingUp,
    title: "Rapid Industry Growth",
    text: "Global investment in electric aviation is accelerating as cities search for faster mobility solutions.",
  },
  {
    icon: Cpu,
    title: "Advanced Flight Technology",
    text: "Breakthroughs in batteries, propulsion systems, and navigation technology are enabling electric aircraft.",
  },
  {
    icon: Building2,
    title: "Urban Infrastructure Development",
    text: "Cities are beginning to develop vertiports and aerial mobility infrastructure.",
  },
];

const FutureUAMSection = () => {
  return (
    <section className="relative bg-background overflow-hidden" style={{ paddingTop: "160px", paddingBottom: "160px" }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-[0.08]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="routeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(189, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(189, 100%, 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(189, 100%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q400,80 800,250 T1600,150" stroke="url(#routeGrad2)" strokeWidth="0.8" fill="none" />
          <path d="M0,400 Q300,250 700,380 T1400,280" stroke="url(#routeGrad2)" strokeWidth="0.5" fill="none" />
        </svg>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/15 animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-airavath relative z-10">
        {/* Heading */}
        <ScrollReveal className="flex flex-col items-center text-center mb-3x">
          <h2 className="font-heading font-semibold text-section text-foreground tracking-futuristic max-w-[720px]">
            The Future of Urban Air Mobility
          </h2>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal delay={0.15} className="flex justify-center mb-12x">
          <p className="font-body text-body-lg text-titanium text-center max-w-[700px] leading-[1.6]">
            Electric vertical take-off and landing aircraft are redefining how cities move. By combining
            electric propulsion, vertical lift capability, and intelligent flight systems, urban air
            mobility enables faster and more sustainable transportation above city traffic.
          </p>
        </ScrollReveal>

        {/* Aircraft Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12x">
          {aircraftCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.2 * i}>
              <div className="group bg-card border border-border rounded-card overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.15)] transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                {/* Content */}
                <div className="p-4x">
                  <h3 className="font-sub text-feature text-foreground mb-2x">
                    {card.title}
                  </h3>
                  <p className="font-body text-base text-titanium leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industry Validation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6x" style={{ marginTop: "96px" }}>
          {validationBlocks.map((block, i) => (
            <ScrollReveal key={block.title} delay={0.15 * i}>
              <div className="flex gap-3x">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sub text-feature text-foreground mb-1x">
                    {block.title}
                  </h4>
                  <p className="font-body text-base text-titanium leading-[1.6]">
                    {block.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureUAMSection;
