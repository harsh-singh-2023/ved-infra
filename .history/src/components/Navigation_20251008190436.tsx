import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import vedLogo from "<assets />logo.png";
import { navigateToContact } from "./utils/navigation";

interface NavigationProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export function Navigation({ onNavigate, currentPath }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      {/* Top Tech Line */}
      <motion.div
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Tech Corner Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M 0 20 L 20 20 L 20 0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-30 pointer-events-none rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M 0 20 L 20 20 L 20 0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center cursor-pointer relative group"
            onClick={() => onNavigate("/")}
          >
            <motion.div
              className="absolute -inset-2 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={vedLogo}
              alt="Ved Constructions & Infra"
              className="h-11 w-auto relative z-10"
              whileHover={{ filter: "brightness(1.1)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative px-4 py-2 text-foreground/70 hover:text-foreground transition-colors group"
                onClick={(e) => {
                  if (item.href === "/" || item.href === "/team") {
                    e.preventDefault();
                    onNavigate(item.href);
                  }
                }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-px bg-primary"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Tech accent */}
                <motion.div
                  className="absolute top-1/2 right-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button with Enhanced Effect */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Button 
                className="relative"
                onClick={navigateToContact}
              >
                Get in Touch
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 relative group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-primary/10"
            >
              <motion.div 
                className="py-6 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-primary/5 rounded-lg transition-all relative group"
                    onClick={(e) => {
                      if (item.href === "/" || item.href === "/team") {
                        e.preventDefault();
                        onNavigate(item.href);
                      }
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <motion.span
                        className="opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <Button 
                    className="w-full"
                    onClick={() => {
                      navigateToContact();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get in Touch
                    <span className="ml-2">→</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Animated Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ width: scrolled ? "100%" : "0%" }}
        animate={{ width: scrolled ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
}
