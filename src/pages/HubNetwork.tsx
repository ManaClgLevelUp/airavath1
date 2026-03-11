import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Network, Route, Radio, BarChart3, Globe, Cpu, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hub-network.jpg";
import solutionNetwork from "@/assets/solution-network.jpg";

const steps = [
  {
    number: "01",
    title: "Route Planning",
    description: "AI-powered algorithms analyze demand, weather, airspace, and fleet availability to compute optimal routes across the entire hub network in real time.",
  },
  {
    number: "02",
    title: "Fleet Coordination",
    description: "Aircraft across all Ground Ports, Vertiports, and Sky Ports are coordinated centrally to balance demand, minimize wait times, and optimize energy usage.",
  },
  {
    number: "03",
    title: "Live Traffic Management",
    description: "The network operations center monitors all active flights, managing separation, sequencing, and contingency routing across the city.",
  },
  {
    number: "04",
    title: "Dynamic Scaling",
    description: "The network automatically scales operations up or down based on demand patterns — adding routes during peak hours and optimizing during off-peak.",
  },
];

const features = [
  {
    icon: Globe,
    title: "City-Wide Coverage",
    description: "The hub network spans the entire metropolitan area, connecting business districts, airports, hospitals, residential zones, and tourism landmarks.",
  },
  {
    icon: Route,
    title: "Interconnected Routes",
    description: "Every hub is connected to every other hub through optimized aerial corridors, creating a mesh network with no single point of failure.",
  },
  {
    icon: Cpu,
    title: "AI Operations Engine",
    description: "Machine learning algorithms continuously optimize fleet positioning, route efficiency, pricing, and predictive maintenance scheduling.",
  },
  {
    icon: Radio,
    title: "UTM Integration",
    description: "Full integration with Unmanned Traffic Management systems, coordinating with aviation authorities and other aerial operators in shared airspace.",
  },
  {
    icon: BarChart3,
    title: "Demand Analytics",
    description: "Real-time demand forecasting enables proactive fleet positioning and dynamic capacity allocation across the network.",
  },
  {
    icon: Network,
    title: "Multi-Hub Transfers",
    description: "Passengers can seamlessly transfer between hub types — Ground Port to Sky Port, Vertiport to Vertiport — with unified ticketing and scheduling.",
  },
];

const stats = [
  { value: "50+", label: "Hubs per City" },
  { value: "200+", label: "Daily Routes" },
  { value: "< 8 min", label: "Average Wait" },
  { value: "99.7%", label: "Network Uptime" },
  { value: "24/7", label: "Operations" },
  { value: "3 Tiers", label: "Hub Types" },
];

const HubNetwork = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AIRAVATH Hub Network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 container-airavath pt-32 pb-16">
          <Link to="/#ecosystem" className="inline-flex items-center gap-2 font-body text-body-sm text-primary mb-8 hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Hub Infrastructure
          </Link>
          <ScrollReveal>
            <h1 className="font-heading text-[40px] md:text-[64px] font-semibold text-foreground tracking-futuristic mb-6">
              Hub Network
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg text-titanium max-w-[640px] leading-[1.6]">
              The unified city-wide aerial mobility network connecting Ground Ports, Vertiports, and Sky Ports into a seamless, AI-coordinated transportation system.
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
                <img src={solutionNetwork} alt="Network operations" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-6">
                One Network, Infinite Connections
              </h2>
              <p className="font-body text-[18px] text-titanium leading-[1.7] mb-6">
                The AIRAVATH Hub Network is the orchestration layer that transforms individual landing pads into a cohesive transportation system. Powered by AI, it coordinates fleet movements, manages airspace, and optimizes operations across every hub in the city.
              </p>
              <p className="font-body text-[18px] text-titanium leading-[1.7]">
                Think of it as the nervous system of urban air mobility — sensing demand, routing aircraft, and adapting to conditions in real time.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 2%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[60px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">
              Network at Scale
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} className="bg-card border border-border rounded-card p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }}>
                  <p className="font-heading text-[32px] font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-heading text-[12px] tracking-[3px] text-titanium uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding">
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">How the Network Operates</h2>
            <p className="font-body text-body-lg text-titanium max-w-[640px] mx-auto leading-[1.6]">AI-driven coordination from route planning to dynamic scaling.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.15 * i}>
                <motion.div className="bg-card border border-border rounded-card p-8 h-full relative overflow-hidden group hover:border-primary/30 transition-all duration-500" whileHover={{ y: -4 }}>
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

      {/* Features */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 0%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">Network Capabilities</h2>
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
            <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-foreground tracking-futuristic mb-6">Explore Individual Hub Types</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ground-port" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Ground Port <ChevronRight size={16} /></Link>
              <Link to="/vertiport" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Vertiport <ChevronRight size={16} /></Link>
              <Link to="/sky-port" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Sky Port <ChevronRight size={16} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HubNetwork;
