import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Plane, BatteryCharging, Building, Wifi, Gauge, Shield, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hub-vertiport.jpg";
import solutionVertiport from "@/assets/solution-vertiport.jpg";

const steps = [
  {
    number: "01",
    title: "Approach & Landing",
    description: "eVTOL aircraft approach the mid-building Vertiport using precision GPS guidance. Automated air traffic management ensures safe approach paths.",
  },
  {
    number: "02",
    title: "Rapid Turnaround",
    description: "Aircraft dock at the Vertiport pad. Passengers disembark while the aircraft undergoes rapid charging and safety checks — all within 5 minutes.",
  },
  {
    number: "03",
    title: "Passenger Flow",
    description: "Arriving passengers exit through the Vertiport terminal directly into the building's elevator core. Departing passengers check in at the Vertiport lounge.",
  },
  {
    number: "04",
    title: "Departure & Ascent",
    description: "New passengers board the charged aircraft. The eVTOL lifts off vertically from the platform and connects to the aerial corridor network.",
  },
];

const features = [
  {
    icon: Building,
    title: "Mid-Building Integration",
    description: "Vertiports are engineered into existing commercial towers at optimal heights, eliminating the need for new standalone structures.",
  },
  {
    icon: Plane,
    title: "Rapid Turnaround Ops",
    description: "Designed for 5-minute turnaround cycles — passengers off, charge, safety check, passengers on, takeoff. Maximum fleet efficiency.",
  },
  {
    icon: BatteryCharging,
    title: "Charging Infrastructure",
    description: "Integrated 350 kW DC fast-charging stations enable aircraft to reach 80% charge during the turnaround window.",
  },
  {
    icon: Wifi,
    title: "Smart Building Connect",
    description: "IoT-connected to the host building's systems for fire safety, HVAC integration, and shared elevator/stairwell access.",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    description: "Every Vertiport is equipped with wind sensors, weather monitoring, and AI-driven traffic management for safe operations.",
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description: "Automated fire suppression, emergency containment barriers, and backup power systems ensure round-the-clock operational safety.",
  },
];

const specs = [
  { label: "Platform Area", value: "800 – 1,500 m²" },
  { label: "Building Level", value: "Floors 5 – 30" },
  { label: "Pads", value: "1 – 2 simultaneous" },
  { label: "Turnaround", value: "< 5 minutes" },
  { label: "Max Wind", value: "45 km/h operational" },
  { label: "Weight Capacity", value: "5,000 kg per pad" },
];

const Vertiport = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AIRAVATH Vertiport platform" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 container-airavath pt-32 pb-16">
          <Link to="/#ecosystem" className="inline-flex items-center gap-2 font-body text-body-sm text-primary mb-8 hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Hub Infrastructure
          </Link>
          <ScrollReveal>
            <h1 className="font-heading text-[40px] md:text-[64px] font-semibold text-foreground tracking-futuristic mb-6">
              Vertiport
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg text-titanium max-w-[640px] leading-[1.6]">
              Elevated landing platforms integrated into commercial buildings — designed for rapid turnaround operations and seamless urban connectivity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-airavath">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-card overflow-hidden">
                <img src={solutionVertiport} alt="Vertiport infrastructure" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-6">
                The Mid-City Mobility Node
              </h2>
              <p className="font-body text-[18px] text-titanium leading-[1.7] mb-6">
                Vertiports represent the workhorse of the AIRAVATH network. Positioned on mid-level building platforms, they provide the highest density of landing infrastructure across the city without requiring rooftop modifications.
              </p>
              <p className="font-body text-[18px] text-titanium leading-[1.7]">
                Each Vertiport is engineered for rapid operations — charging, boarding, and turnaround happen simultaneously, enabling one aircraft movement every 5 minutes per pad.
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
              Operational Cycle
            </h2>
            <p className="font-body text-body-lg text-titanium max-w-[640px] mx-auto leading-[1.6]">
              The Vertiport turnaround — precision-engineered for speed and safety.
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
                  <span className="font-heading text-[48px] font-bold text-primary/10 absolute top-4 right-4">{step.number}</span>
                  <span className="font-heading text-[12px] tracking-[4px] text-primary/60 uppercase mb-4 block">Step {step.number}</span>
                  <h3 className="font-sub text-[20px] text-foreground font-medium mb-3">{step.title}</h3>
                  <p className="font-body text-[15px] text-titanium leading-[1.7]">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
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
                <motion.div key={spec.label} className="bg-card border border-border rounded-card p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }}>
                  <p className="font-heading text-[12px] tracking-[3px] text-primary/60 uppercase mb-2">{spec.label}</p>
                  <p className="font-heading text-[22px] font-semibold text-foreground">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 0%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">Key Capabilities</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.12 * i}>
                <motion.div className="group bg-card border border-border rounded-card p-8 h-full hover:border-primary/30 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.1)] transition-all duration-500" whileHover={{ y: -4 }}>
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
            <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-foreground tracking-futuristic mb-6">Explore the Full Hub Network</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ground-port" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Ground Port <ChevronRight size={16} /></Link>
              <Link to="/sky-port" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Sky Port <ChevronRight size={16} /></Link>
              <Link to="/hub-network" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Hub Network <ChevronRight size={16} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Vertiport;
