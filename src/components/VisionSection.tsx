import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section id="vision" className="relative section-padding">
      <div className="container-airavath">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12x items-center">
          <div>
            <ScrollReveal direction="left">
              <p className="font-sub text-body-sm text-primary tracking-wide-futuristic uppercase mb-3x">
                Our Vision
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-heading text-section text-foreground mb-4x tracking-futuristic">
                Cities Without <span className="text-gradient-blue">Limits</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="font-body text-body-lg text-muted-foreground mb-4x">
                We envision a world where urban air mobility is as accessible as ground transportation. 
                Our integrated ecosystem of eVTOL aircraft and vertiport infrastructure will connect 
                cities in ways never before possible.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <p className="font-body text-body-lg text-muted-foreground mb-6x">
                By 2030, AIRAVATH aims to operate in 50+ metropolitan areas, reducing urban commute 
                times by 80% while maintaining zero carbon emissions.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex gap-3x">
                <Button variant="hero" size="lg">
                  Learn More
                </Button>
                <Button variant="hero-outline" size="lg">
                  Watch Film
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-card border border-border rounded-card p-6x">
                <div className="space-y-6x">
                  {[
                    { year: "2025", milestone: "First prototype flight" },
                    { year: "2027", milestone: "Type certification" },
                    { year: "2028", milestone: "Commercial operations launch" },
                    { year: "2030", milestone: "50+ city network" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4x">
                      <div className="font-heading text-subheading text-primary min-w-[80px]">
                        {item.year}
                      </div>
                      <div>
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mb-1x" />
                      </div>
                      <p className="font-sub text-feature text-foreground">
                        {item.milestone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-card bg-primary/5 -z-10 blur-xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
