import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { GridCursor } from "./components/GridCursor";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle hash on page load
    const handleHashOnLoad = () => {
      const hash = window.location.hash;
      if (hash && hash !== "#") {
        // Make sure we're on home page
        if (currentPath !== "/") {
          setCurrentPath("/");
        }
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    };

    // Handle hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          // Make sure we're on home page first
          if (currentPath !== "/") {
            setCurrentPath("/");
            setTimeout(() => {
              const element = document.querySelector(href);
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }, 100);
          } else {
            const element = document.querySelector(href);
            if (element) {
              const offset = 80;
              const elementPosition =
                element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }
        }
      }
    };

    // Check hash on load
    handleHashOnLoad();

    document.addEventListener("click", handleHashClick);
    return () => {
      document.removeEventListener("click", handleHashClick);
    };
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Shader-based Grid Cursor Effect */}
      <GridCursor />

      <div className="relative z-10">
        <Navigation
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            {currentPath === "/" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Hero />
                <Services />
                <About />
                <Contact />
              </motion.div>
            )}

            {currentPath === "/team" && (
              <motion.div
                key="team"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Team />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
