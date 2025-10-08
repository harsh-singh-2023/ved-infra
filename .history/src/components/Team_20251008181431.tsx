import { motion } from "motion/react";
import { Award, Target, Users, TrendingUp, Lightbulb, Shield } from "lucide-react";
import ownerImage from "figma:asset/b22ea0f8199fa4a7bf870cd2f4dd5de1a7f73a4a.png";
import { navigateToContact } from "./utils/navigation";
import { navigateToContact } from "./utils/navigation";

export function Team() {
  const values = [
    {
      icon: Target,
      title: "Precision & Quality",
      description: "Every project built to perfection with meticulous attention to detail",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Modern construction techniques combined with creative solutions",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent, and committed to doing what's right",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Continuously learning and improving with every project we undertake",
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background via-gray-50/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="team-pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Meet Our Leadership</span>
          </motion.div>

          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">
            The Visionary Behind Ved Constructions
          </h1>
          <p className="text-muted-foreground text-lg">
            Led by passion, driven by excellence. Our founder brings a fresh perspective to construction with unwavering dedication to quality and innovation.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={ownerImage}
                    alt="Siddhanshu Singh - Owner, Ved Constructions & Infra"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Owner</p>
                      <h4>Siddhanshu Singh</h4>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-2 text-3xl md:text-4xl"
                >
                  Siddhanshu Singh
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground text-xl"
                >
                  Owner, Ved Constructions & Infra
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <p className="text-foreground/90">
                  As the owner of Ved Constructions & Infra, I embarked on this journey with a clear vision: to transform the construction industry through innovation, integrity, and an unwavering commitment to excellence.
                </p>
                <p className="text-foreground/90">
                  Starting a new construction company is not just about building structures; it's about building trust, relationships, and a legacy of quality. Every project we undertake is a testament to our dedication and a stepping stone toward our vision of becoming a trusted name in the industry.
                </p>
                <p className="text-foreground/90">
                  We may be new, but our team brings fresh energy, modern techniques, and an eagerness to prove ourselves with every single project. We're not just constructing buildings—we're constructing dreams, and we're ready to make yours a reality.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50"
              >
                {[
                  { label: "Vision", value: "Clear" },
                  { label: "Passion", value: "Unlimited" },
                  { label: "Commitment", value: "100%" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl mb-1 text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative p-12 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl border border-primary/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full">
                <pattern
                  id="vision-dots"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#vision-dots)" />
              </svg>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full mb-4"
              >
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">Our Vision</span>
              </motion.div>

              <h2 className="text-2xl md:text-3xl mb-4">
                "To become the leading construction firm, while delivering projects that consistently exceed standards and provide exceptional customer satisfaction."
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We envision a future where every structure we build stands as a testament to our commitment to excellence, sustainability, and client satisfaction. Through dedication and hard work, we aim to transform our fresh start into a legacy of outstanding construction achievements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Our Guiding Principles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The values that drive everything we do at Ved Constructions & Infra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-white rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <value.icon className="w-7 h-7 text-primary relative z-10" />
                </motion.div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="p-12 bg-gradient-to-br from-primary to-primary/80 rounded-3xl text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full">
                <pattern
                  id="cta-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="mb-4 text-2xl md:text-3xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-primary-foreground/90 text-lg">
                Let's discuss how we can bring your construction vision to life. We're excited to work with you!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
