import { motion } from "motion/react";
import { 
  Building2, 
  Hammer, 
  Home, 
  Factory, 
  Truck, 
  Wrench,
  Target,
  CheckCircle2
} from "lucide-react";
import { Card } from "./ui/card";

import { navigateToContact } from "./utils/navigation";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "From office spaces to retail complexes, we're ready to bring your commercial projects to life with modern construction practices.",
    features: ["Office Buildings", "Shopping Centers", "Mixed-Use Developments"],
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Building homes with care and precision. Whether it's a single villa or housing complex, your dream home is our commitment.",
    features: ["Villas & Bungalows", "Apartment Complexes", "Gated Communities"],
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Equipped to handle warehouses, factories, and industrial facilities with focus on efficiency and modern infrastructure.",
    features: ["Warehouses", "Manufacturing Units", "Cold Storage"],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces into something extraordinary. We specialize in breathing new life into old structures.",
    features: ["Home Renovations", "Office Makeovers", "Structural Repairs"],
  },
  {
    icon: Truck,
    title: "Infrastructure Development",
    description: "Ready to take on roads, bridges, and public infrastructure projects with dedication and modern techniques.",
    features: ["Road Construction", "Drainage Systems", "Site Development"],
  },
  {
    icon: Wrench,
    title: "MEP Services",
    description: "Complete mechanical, electrical, and plumbing solutions integrated into every construction project we undertake.",
    features: ["Electrical Systems", "Plumbing Networks", "HVAC Installation"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-gray-50 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="service-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-4"
          >
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">What We Can Do For You</span>
          </motion.div>
          
          <h2 className="mb-4 text-3xl md:text-4xl">Our Core Competencies</h2>
          <p className="text-muted-foreground">
            As a fresh, enthusiastic team, we're equipped with modern knowledge and ready to deliver exceptional results across various construction domains.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 group relative overflow-hidden">
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <service.icon className="w-7 h-7 text-primary relative z-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-white border border-primary/10 rounded-2xl shadow-lg">
            <h3 className="text-xl">Have a Different Requirement?</h3>
            <p className="text-muted-foreground max-w-md">
              We're flexible and eager to take on diverse projects. If you have something unique in mind, let's discuss how we can help!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
            >
              Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
