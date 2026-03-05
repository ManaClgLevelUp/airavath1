import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import airavathLogo from "@/assets/airavath-logo.png";

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
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 50);
        if (!mobileOpen) {
          if (currentY > lastScrollY.current && currentY > 80) {
            setHidden(true);
          } else if (currentY < lastScrollY.current) {
            setHidden(false);
          }
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? "bg-background/65 backdrop-blur-[12px] border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div>
          <div className="container-airavath h-[64px] flex items-center">
            {/* Logo — cols 1-3 */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex-shrink-0 mr-8x group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label="AIRAVATH Home"
            >
              <img
                src={airavathLogo}
                alt="AIRAVATH"
                className="h-9 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(189_100%_50%/0.5)]"
              />
            </a>

            {/* Desktop Menu — center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative font-sub text-base font-medium text-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm py-1"
                  >
                    {link.label}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA — right side */}
            <div className="hidden lg:block flex-shrink-0">
              <Button variant="nav" size="nav" onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Join The Future
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden ml-auto text-foreground p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm transition-colors hover:text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] bg-background border-l border-border lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close button */}
                <div className="flex justify-end p-4x">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground p-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-6x pt-4x flex-1" aria-label="Mobile navigation">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                      className="font-sub text-xl font-medium text-foreground hover:text-primary transition-colors py-[14px] border-b border-border/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA at bottom */}
                <div className="p-6x">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Button variant="nav" size="nav" className="w-full" onClick={() => { setMobileOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                      Join The Future
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
