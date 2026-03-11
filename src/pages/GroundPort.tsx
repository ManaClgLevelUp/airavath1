import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Users, TrainFront, ShieldCheck, Zap, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hub-groundport.jpg";
import vertiportNetwork from "@/assets/vertiport-network.jpg";

const steps = [
  {
    number: "01",
    title: "Arrival & Check-In",
    description: "Passengers arrive at the street-level Ground Port via metro, taxi, or private vehicle. Automated kiosks and digital ID verification ensure seamless check-in within 60 seconds.",
  },
  {
    number: "02",
    title: "Security & Boarding",
    description: "Quick biometric security screening followed by entry into the premium departure lounge. Real-time flight status displays keep passengers informed.",
  },
  {
    number: "03",
    title: "Ground-to-Air Transfer",
    description: "Passengers are guided to the vertical lift platform where the eVTOL aircraft is prepped and ready. Boarding takes under 2 minutes.",
  },
  {
    number: "04",
    title: "Takeoff & Transit",
    description: "The aircraft lifts off vertically from the Ground Port pad, ascending to cruise altitude and connecting to the nearest Vertiport or Sky Port at the destination.",
  },
];

const features = [
  {
    icon: Building2,
    title: "Street-Level Access",
    description: "Located at ground level for maximum accessibility — no elevators or rooftop access needed. Integrated with sidewalks, transit stops, and parking.",
  },
  {
    icon: Users,
    title: "Premium Passenger Lounges",
    description: "Climate-controlled waiting areas with comfortable seating, refreshments, Wi-Fi, and real-time flight tracking displays.",
  },
  {
    icon: TrainFront,
    title: "Multi-Modal Integration",
    description: "Seamlessly connected to metro stations, bus stops, ride-hailing drop-offs, and bicycle docking stations for first/last mile connectivity.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Security",
    description: "AI-powered biometric screening and baggage checks that reduce wait times to under 90 seconds while maintaining the highest safety standards.",
  },
  {
    icon: Zap,
    title: "Rapid Charging Bays",
    description: "High-speed charging infrastructure for eVTOL aircraft, enabling fast turnaround between flights and maximizing fleet utilization.",
  },
  {
    icon: Clock,
    title: "24/7 Operations Center",
    description: "On-site command center monitoring all Ground Port operations, coordinating with the city-wide hub network in real time.",
  },
];

const specs = [
  { label: "Footprint", value: "2,500 – 5,000 m²" },
  { label: "Landing Pads", value: "2 – 4 simultaneous" },
  { label: "Passenger Capacity", value: "200+ / hour" },
  { label: "Turnaround Time", value: "< 5 minutes" },
  { label: "Charging Speed", value: "350 kW DC fast" },
  { label: "Noise Level", value: "< 65 dB at boundary" },
];

const GroundPort = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AIRAVATH Ground Port terminal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 container-airavath pt-32 pb-16">
          <Link to="/#ecosystem" className="inline-flex items-center gap-2 font-body text-body-sm text-primary mb-8 hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Hub Infrastructure
          </Link>
          <ScrollReveal>
            <h1 className="font-heading text-[40px] md:text-[64px] font-semibold text-foreground tracking-futuristic mb-6">
              Ground Port
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg text-titanium max-w-[640px] leading-[1.6]">
              Street-level mobility terminals that serve as the primary gateway to AIRAVATH's urban air mobility network — designed for maximum accessibility and seamless multi-modal integration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview with image */}
      <section className="section-padding">
        <div className="container-airavath">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-card overflow-hidden">
                <img src={vertiportNetwork} alt="Ground Port concept" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-6">
                The Foundation of Urban Air Mobility
              </h2>
              <p className="font-body text-[18px] text-titanium leading-[1.7] mb-6">
                Ground Ports are the entry-level infrastructure of the AIRAVATH ecosystem. Positioned at street level in key urban locations, they eliminate the need for rooftop or elevated access — making aerial mobility as easy as catching a bus.
              </p>
              <p className="font-body text-[18px] text-titanium leading-[1.7]">
                Each Ground Port integrates with existing public transit, ride-hailing services, and pedestrian networks, creating a true multi-modal transportation hub that bridges ground and air.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 2%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">
              How It Works
            </h2>
            <p className="font-body text-body-lg text-titanium max-w-[640px] mx-auto leading-[1.6]">
              From street to sky — the Ground Port passenger journey.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.15 * i}>
                <motion.div
                  className="bg-card border border-border rounded-card p-8 h-full relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-heading text-[48px] font-bold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <span className="font-heading text-[12px] tracking-[4px] text-primary/60 uppercase mb-4 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-sub text-[20px] text-foreground font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] text-titanium leading-[1.7]">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding">
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[60px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">
              Technical Specifications
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  className="bg-card border border-border rounded-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <p className="font-heading text-[12px] tracking-[3px] text-primary/60 uppercase mb-2">{spec.label}</p>
                  <p className="font-heading text-[22px] font-semibold text-foreground">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 0%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">
              Key Capabilities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.12 * i}>
                <motion.div
                  className="group bg-card border border-border rounded-card p-8 h-full hover:border-primary/30 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.1)] transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-sub text-feature text-foreground mb-3">{f.title}</h3>
                  <p className="font-body text-base text-titanium leading-[1.6]">{f.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-airavath text-center">
          <ScrollReveal>
            <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-foreground tracking-futuristic mb-6">
              Explore the Full Hub Network
            </h2>
            <p className="font-body text-body-lg text-titanium max-w-[540px] mx-auto mb-8 leading-[1.6]">
              Ground Ports work in concert with Vertiports, Sky Ports, and the Hub Network to deliver seamless city-wide aerial mobility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/vertiport" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">
                Vertiport <ChevronRight size={16} />
              </Link>
              <Link to="/sky-port" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">
                Sky Port <ChevronRight size={16} />
              </Link>
              <Link to="/hub-network" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">
                Hub Network <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default GroundPort;
