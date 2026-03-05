import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import airavathLogo from "@/assets/airavath-logo.png";
import footerSkyline from "@/assets/footer-skyline.jpg";

const navColumns = [
  {
    title: "Company",
    links: [
      { label: "About AIRAVATH", href: "#about" },
      { label: "Vision", href: "#vision" },
      { label: "Leadership Team", href: "#team" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Aircraft Technology", href: "#technology" },
      { label: "Vertiport Infrastructure", href: "#vertiport" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Investor Relations", href: "#contact" },
      { label: "Strategic Partnerships", href: "#contact" },
      { label: "Media Inquiries", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X (Twitter)" },
  { icon: Youtube, label: "YouTube" },
];

const FooterSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative h-[420px] md:h-[420px] min-h-[420px] overflow-hidden flex flex-col">
      {/* Background */}
      <img
        src={footerSkyline}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Aircraft light animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 6, 12].map((delay) => (
          <motion.div
            key={delay}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{ top: `${15 + delay * 2}%`, boxShadow: "0 0 8px 3px hsl(189 100% 50% / 0.5)" }}
            animate={{ x: ["-5vw", "105vw"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay }}
          />
        ))}
      </div>

      <div className="relative z-10 container-airavath flex flex-col items-center flex-1 pt-10">
        {/* Logo + tagline */}
        <img src={airavathLogo} alt="AIRAVATH" className="h-10 w-auto mb-[24px]" />
        <p className="font-sub text-[16px] text-titanium text-center">
          The Future of Urban Air Travel
        </p>

        {/* Navigation */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mt-[60px] w-full max-w-[800px]">
          {navColumns.map((col) => (
            <div key={col.title} className="text-center">
              <h4 className="font-sub text-[18px] text-foreground mb-[16px]">
                {col.title}
              </h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="block font-body text-[14px] text-titanium hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-[24px] mt-[60px]">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="text-foreground hover:text-primary hover:drop-shadow-[0_0_8px_hsl(189_100%_50%/0.6)] transition-all duration-300"
            >
              <s.icon size={28} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-[13px] text-[#777] text-center mt-auto pb-6">
          © 2026 AIRAVATH. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
