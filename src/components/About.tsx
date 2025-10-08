import { motion } from "motion/react";
import { CheckCircle2, Target, Users, Zap, Award, Handshake } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigateToContact } from "./utils/navigation";


const values = [
  {
    icon: CheckCircle2,
    title: "Passion-Driven",
    description: "Every project is a chance to prove ourselves and build lasting relationships.",
  },
  {
    icon: Target,
    title: "Quality First",
    description: "We may be new, but we never compromise on quality or attention to detail.",
  },
  {
    icon: Zap,
    title: "Quick & Efficient",
    description: "Fresh energy means faster turnaround without sacrificing excellence.",
  },
  {
    icon: Handshake,
    title: "Transparent Communication",
    description: "Open, honest dialogue at every step. You'll always know what's happening.",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Modern Approach",
    description: "Latest construction techniques and tools for superior results",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Skilled professionals committed to bringing your vision to life",
  },
  {
    icon: CheckCircle2,
    title: "Client-Centric",
    description: "Your satisfaction is our top priority, always",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Ved Constructions Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-primary mb-1">Ready to Start</div>
                    <div className="text-sm text-muted-foreground">Your Next Big Project Awaits</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Corner Accents */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-tl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-br-3xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">About Ved Constructions & Infra</span>
            </motion.div>

            <h2 className="mb-6 text-3xl md:text-4xl">
              A New Beginning in Construction Excellence
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Welcome to <span className="text-foreground font-medium">Ved Constructions & Infra</span> – a fresh face in the construction industry with an old-fashioned commitment to excellence. We're not just another construction company; we're your partners in building dreams.
              </p>
              <p>
                As a newly established firm, we bring together a team of passionate professionals equipped with modern knowledge, latest techniques, and an unwavering dedication to quality. What we lack in years, we make up for in enthusiasm, innovation, and a genuine desire to exceed your expectations.
              </p>
              <p>
                Every project we take on is an opportunity to prove ourselves, build trust, and create something remarkable. We believe in transparency, open communication, and treating every client like our first – because building relationships is just as important as building structures.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => {
                    window.location.href = "/team";
                  }, 300);
                }}
                className="px-6 py-3 border border-primary/20 text-foreground rounded-lg hover:bg-primary/5 transition-colors"
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values that shape every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-border/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <value.icon className="w-6 h-6 text-primary relative z-10" />
                </motion.div>
                <h3 className="mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl p-12 border border-primary/10"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl">Why Partner With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Being new in the industry gives us unique advantages that established firms often lose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <item.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-foreground/80 mb-6">
              Ready to work with a team that treats your project like it's the only one that matters?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors text-lg"
            >
              Let's Build Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
