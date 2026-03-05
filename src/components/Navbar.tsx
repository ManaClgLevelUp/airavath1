import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import airavathLogo from "@/assets/airavath-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Vision", href: "#vision" },
  { label: "Investors", href: "#investors" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > 100 && currentY > lastScrollY);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-[88px] flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-background/65 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-airavath flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={airavathLogo}
            alt="AIRAVATH"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sub text-base text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg">
            Join The Future
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[88px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border lg:hidden"
          >
            <div className="container-airavath py-8x flex flex-col gap-6x">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sub text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4x w-full">
                Join The Future
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
