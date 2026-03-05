import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer id="contact" className="relative py-12x border-t border-border">
      <div className="container-airavath">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8x mb-12x">
          <div>
            <h3 className="font-heading text-feature text-foreground mb-3x tracking-futuristic">
              AIRAVATH
            </h3>
            <p className="font-body text-body-sm text-muted-foreground max-w-xs">
              Pioneering the future of urban air mobility through advanced eVTOL technology and vertiport infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-sub text-base text-foreground mb-3x">Quick Links</h4>
            <div className="space-y-2x">
              {["Technology", "Vision", "Investors", "Team", "Careers"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block font-body text-body-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sub text-base text-foreground mb-3x">Stay Updated</h4>
            <p className="font-body text-body-sm text-muted-foreground mb-3x">
              Join our newsletter for the latest developments.
            </p>
            <Button variant="hero" size="default">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="border-t border-border pt-6x flex flex-col md:flex-row items-center justify-between gap-3x">
          <p className="font-body text-body-sm text-muted-foreground">
            © 2026 AIRAVATH. All rights reserved.
          </p>
          <div className="flex gap-4x">
            <a href="#" className="font-body text-body-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="font-body text-body-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
