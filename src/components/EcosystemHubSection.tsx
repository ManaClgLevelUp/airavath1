import { Building2, Plane, Landmark, Network, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const hubs = [
  {
    icon: Building2,
    title: "Ground Port",
    link: "/ground-port",
    description:
      "Ground-level mobility hubs used for passenger access and service operations. These hubs serve as the primary entry point for urban air mobility, featuring premium passenger lounges, boarding areas, and ground transportation connections.",
    features: ["Street-level access", "Passenger lounges", "Ground transport integration", "Service operations center"],
  },
  {
    icon: Plane,
    title: "Vertiport",
    link: "/vertiport",
    description:
      "Landing and takeoff areas located on elevated building platforms — typically on first floor or mid-building levels. Vertiports are designed for rapid turnaround operations and seamless integration with existing commercial buildings.",
    features: ["Mid-building platforms", "Rapid turnaround", "Commercial integration", "Charging infrastructure"],
  },
  {
    icon: Landmark,
    title: "Sky Port",
    link: "/sky-port",
    description:
      "Landing infrastructure located on top of skyscrapers and high-rise buildings. Sky Ports provide the fastest access to aerial mobility from premium locations in city centers and business districts.",
    features: ["Rooftop landing pads", "Premium locations", "Express boarding", "Panoramic views"],
  },
  {
    icon: Network,
    title: "Hub Network",
    link: "/hub-network",
    description:
      "Multiple hubs connected to form a city-wide mobility network. The hub network enables AIRAVATH to operate seamless aerial transportation across entire metropolitan areas, connecting Ground Ports, Vertiports, and Sky Ports into a unified system.",
    features: ["City-wide coverage", "Interconnected routes", "Fleet coordination", "Real-time scheduling"],
  },
];

const EcosystemHubSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "160px",
        paddingBottom: "160px",
        background: "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 1.5%) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-[0.06]" />
      </div>

      <div className="container-airavath relative z-10">
        <ScrollReveal className="flex flex-col items-center text-center mb-3x">
          <h2 className="font-heading font-semibold text-section text-foreground tracking-futuristic max-w-[820px]">
            Urban Air Mobility Hub Infrastructure
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="flex justify-center mb-[100px]">
          <p className="font-body text-body-lg text-titanium text-center max-w-[720px] leading-[1.6]">
            AIRAVATH operates a multi-tier hub infrastructure that forms the backbone of the
            urban air mobility network. Each hub type serves a specific role in the ecosystem,
            together creating a comprehensive city-wide aerial transportation system.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hubs.map((hub, i) => (
            <ScrollReveal key={hub.title} delay={0.15 * i}>
              <motion.div
                className="group bg-card border border-border rounded-card p-8 md:p-10 h-full hover:border-primary/30 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.1)] transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <hub.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sub text-[24px] font-medium text-foreground mb-2">
                      {hub.title}
                    </h3>
                    <p className="font-body text-[16px] text-titanium leading-[1.7]">
                      {hub.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 ml-[74px] mb-6">
                  {hub.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 font-body text-[14px] text-titanium/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-[74px]">
                  <Link
                    to={hub.link}
                    className="inline-flex items-center gap-2 font-body text-[14px] text-primary hover:text-foreground transition-colors group/link"
                  >
                    Learn More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemHubSection;
