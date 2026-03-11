import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Landmark, Eye, Crown, Wind, Sun, Radar, ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hub-skyport.jpg";
import visionSkyline from "@/assets/vision-skyline.jpg";

const steps = [
  {
    number: "01",
    title: "VIP Arrival",
    description: "Passengers arrive at the building's dedicated Sky Port lobby via express elevator. VIP concierge and private check-in ensure a premium experience.",
  },
  {
    number: "02",
    title: "Rooftop Lounge",
    description: "Passengers enter the panoramic rooftop lounge with 360° city views. Premium refreshments and private waiting areas available before departure.",
  },
  {
    number: "03",
    title: "Express Boarding",
    description: "Direct walk-out boarding onto the rooftop landing pad. No stairs, no transfers — step from lounge to aircraft in under 60 seconds.",
  },
  {
    number: "04",
    title: "Vertical Departure",
    description: "The eVTOL lifts off from the rooftop pad, clearing the building and entering the aerial corridor. Passengers enjoy unobstructed city views during ascent.",
  },
];

const features = [
  {
    icon: Crown,
    title: "Premium Experience",
    description: "Sky Ports are designed for executive and VIP travelers. Luxury lounges, concierge services, and private boarding create a first-class aerial experience.",
  },
  {
    icon: Eye,
    title: "Panoramic City Views",
    description: "Located atop the tallest buildings, Sky Ports offer breathtaking 360° views during boarding, creating an unforgettable travel experience.",
  },
  {
    icon: Landmark,
    title: "Prime Locations",
    description: "Positioned on landmark skyscrapers in business districts, financial centers, and luxury hotel towers for maximum convenience.",
  },
  {
    icon: Wind,
    title: "Wind Management",
    description: "Advanced wind deflection barriers and real-time atmospheric monitoring ensure safe operations even at rooftop heights.",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    description: "Rooftop solar arrays supplement charging infrastructure, reducing the carbon footprint of Sky Port operations.",
  },
  {
    icon: Radar,
    title: "360° Radar Coverage",
    description: "Full-perimeter radar and LiDAR systems provide comprehensive airspace awareness for approach and departure safety.",
  },
];

const specs = [
  { label: "Elevation", value: "100 – 400m+" },
  { label: "Pad Size", value: "600 – 1,200 m²" },
  { label: "Pads", value: "1 – 2 per building" },
  { label: "Express Elevator", value: "< 90 seconds" },
  { label: "Wind Tolerance", value: "55 km/h gusts" },
  { label: "Solar Output", value: "150 kW peak" },
];

const SkyPort = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AIRAVATH Sky Port rooftop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative z-10 container-airavath pt-32 pb-16">
          <Link to="/#ecosystem" className="inline-flex items-center gap-2 font-body text-body-sm text-primary mb-8 hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Hub Infrastructure
          </Link>
          <ScrollReveal>
            <h1 className="font-heading text-[40px] md:text-[64px] font-semibold text-foreground tracking-futuristic mb-6">
              Sky Port
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg text-titanium max-w-[640px] leading-[1.6]">
              Rooftop landing infrastructure on skyscrapers and high-rise buildings — delivering premium, express aerial mobility from the city's highest points.
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
                <img src={visionSkyline} alt="Sky Port view" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-6">
                The Pinnacle of Urban Air Mobility
              </h2>
              <p className="font-body text-[18px] text-titanium leading-[1.7] mb-6">
                Sky Ports sit atop the city's tallest structures, providing the fastest access to aerial mobility with the shortest vertical climb. They're designed for executives, VIP travelers, and time-critical services.
              </p>
              <p className="font-body text-[18px] text-titanium leading-[1.7]">
                With express elevator access, panoramic lounges, and direct rooftop boarding, Sky Ports deliver a premium experience that redefines urban transportation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(0 0% 2%) 100%)" }}>
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[80px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">The Sky Port Experience</h2>
            <p className="font-body text-body-lg text-titanium max-w-[640px] mx-auto leading-[1.6]">From lobby to liftoff — a premium journey above the skyline.</p>
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

      {/* Specs */}
      <section className="section-padding">
        <div className="container-airavath">
          <ScrollReveal className="text-center mb-[60px]">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold text-foreground tracking-futuristic mb-4">Technical Specifications</h2>
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
              <Link to="/vertiport" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Vertiport <ChevronRight size={16} /></Link>
              <Link to="/hub-network" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-body hover:border-primary/30 transition-all">Hub Network <ChevronRight size={16} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default SkyPort;
