import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Award, Rocket, Handshake } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { navigateToContact } from "./utils/navigation";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    badge: "Fresh Start, Bold Vision",
    title: "Ready to Build Your Dreams Into Reality",
    description: "We're Ved Constructions & Infra - a passionate new team of construction experts eager to take on projects of any scale. Your vision is our mission.",
    icon: Rocket,
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    badge: "Committed to Excellence",
    title: "Your Trusted Partner from Day One",
    description: "Starting fresh means we're hungry to prove ourselves. We bring dedication, modern techniques, and unwavering commitment to every single project.",
    icon: Award,
  },
  {
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    badge: "Let's Build Together",
    title: "Your Project, Our Priority",
    description: "We believe in building relationships, not just structures. As a new company, every client matters immensely to us. Let's create something amazing together.",
    icon: Handshake,
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(3, 2, 19, 0.9) 0%, rgba(0, 0, 0, 1) 100%)",
          }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(3, 2, 19, 0.9) 0%, rgba(0, 0, 0, 1) 100%)",
              "radial-gradient(circle at 80% 70%, rgba(3, 2, 19, 0.9) 0%, rgba(0, 0, 0, 1) 100%)",
              "radial-gradient(circle at 20% 30%, rgba(3, 2, 19, 0.9) 0%, rgba(0, 0, 0, 1) 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              initial={{ y1: "-10%", y2: "-10%" }}
              animate={{
                y1: ["0%", "110%"],
                y2: ["0%", "110%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2.5,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dynamic Background Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{
            clipPath: direction > 0 
              ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
              : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            scale: 1.1,
          }}
          animate={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
          }}
          exit={{
            clipPath: direction > 0
              ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
              : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            scale: 0.95,
          }}
          transition={{
            clipPath: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
            scale: { duration: 1.2, ease: "easeOut" },
          }}
          className="absolute inset-0 z-[1]"
        >
          <ImageWithFallback
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>
          
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)",
            }}
            animate={{
              y: [0, 8],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full mb-6 backdrop-blur-md"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <CurrentIcon className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-white/90 text-sm">{slides[currentSlide].badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/90 mb-8 max-w-2xl text-lg"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="group"
                  onClick={navigateToContact}
                >
                  Let's Start Building
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={navigateToContact}
                >
                  Talk to Our Team
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Why Choose Us - New Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { value: "100%", label: "Dedication" },
              { value: "24/7", label: "Support" },
              { value: "Modern", label: "Techniques" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-default relative group"
              >
                <div className="text-white mb-1 text-2xl">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
                <motion.div
                  className="absolute -inset-2 bg-white/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentSlide(index)}
            className="relative h-2 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm transition-all duration-300"
            style={{ width: index === currentSlide ? "48px" : "24px" }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Corner Tech Elements */}
      <div className="absolute top-0 left-0 z-[2] w-32 h-32 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M 0 20 L 20 20 L 20 0"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-[2] w-32 h-32 opacity-30 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M 0 20 L 20 20 L 20 0"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </section>
  );
}
