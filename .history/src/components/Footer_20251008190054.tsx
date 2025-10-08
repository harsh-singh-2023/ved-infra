import { motion } from "motion/react";
import { Mail, Phone, MapPin, TrendingUp, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background overflow-hidden">
      {/* Animated Moving Text Banner */}
      <div className="relative bg-gradient-to-r from-primary via-gray-900 to-primary py-12 overflow-hidden border-y border-border/20">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="inline-flex items-center mx-16">
                <span className="text-white text-5xl md:text-6xl font-black tracking-tight italic transform -skew-x-6 drop-shadow-2xl">
                  VED CONSTRUCTIONS & INFRA
                </span>
                <span className="mx-12 text-white/20 text-4xl">◆</span>
              </div>
            ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-background via-gray-50 to-background py-20 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="footer-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(3, 2, 19, 0.1) 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <TrendingUp className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-2xl bg-gradient-to-r from-primary via-gray-800 to-primary bg-clip-text text-transparent">
                  Ready to Build Your Dreams
                </h3>
              </div>
              <p className="text-sm text-muted-foreground/60 max-w-md mx-auto">
                A fresh start in construction with passion, dedication, and modern expertise.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "siddhanshusingh94@gmail.com",
                  href: "mailto:siddhanshusingh94@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+91 88402 99967",
                  href: "tel:+918840299967",
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "1037 W2 Basant Vihar, Naubasta",
                  href: "#",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white border border-border/50 hover:border-primary/30 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-foreground">{item.value}</div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 mb-12 border border-primary/20"
            >
              <h3 className="text-xl mb-3">Let's Start Building Together!</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Have a project in mind? We're excited to hear from you and ready to turn your vision into reality.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "/#contact";
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors group"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-4 mb-8"
            >
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map(
                (social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-12 h-12 rounded-full border border-primary/20 hover:border-primary/40 flex items-center justify-center text-xs text-muted-foreground/50 hover:text-foreground overflow-hidden group"
                  >
                    {social.slice(0, 2)}

                    <motion.div
                      className="absolute inset-0 bg-primary/5"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              )}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-8 border-t border-border/20"
            >
              <p className="text-xs text-muted-foreground/40 mb-2">
                © 2025 Ved Constructions & Infra. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/30">
                Built with dedication and passion for excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Animated Bottom Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </footer>
  );
}
