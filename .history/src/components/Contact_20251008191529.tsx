"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xkgqvqyj");

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Anytime",
      details: ["+91 88402 99967"],
      description: "We're always available to discuss your project",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["siddhanshusingh94@gmail.com"],
      description: "Get a response within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["1037 W2 Basant Vihar, Naubasta, Kanpur, Uttar Pradesh"],
      description: "Come meet our friendly team",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM"],
      description: "Flexible timings for client meetings",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background via-gray-50/50 to-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="contact-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary"
                  animate={{ strokeWidth: [0.5, 0.8, 0.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(3, 2, 19, 0.08) 0%, transparent 70%)",
              left: `${20 + i * 30}%`,
              top: `${20 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary">Let's Connect</span>
          </motion.div>

          <h2 className="mb-6 text-4xl md:text-5xl">
            We'd Love to Hear From You!
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project in mind or just want to say hello? We're excited to
            discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start max-w-7xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl mb-3">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as
                    possible!
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {state.succeeded ? (
                    // ✅ Success Animation
                    <motion.div
                      key="thank-you"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-4 text-2xl"
                      >
                        Thank You for Reaching Out!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground mb-6"
                      >
                        We've received your message and will get back to you
                        within 24 hours.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                      >
                        
                        <span>We're excited to work with you!</span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // 📨 Actual Working Form
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-7"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm mb-3">
                            Your Name *
                          </label>
                          <Input
                            required
                            name="name"
                            placeholder="John Doe"
                            className="bg-input-background border-border/50 focus:border-primary transition-all duration-300 h-12"
                          />
                        </div>

                        <div>
                          <label className="block text-sm mb-3">
                            Phone Number *
                          </label>
                          <Input
                            required
                            name="phone"
                            placeholder="+91 98xxx"
                            className="bg-input-background border-border/50 focus:border-primary transition-all duration-300 h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm mb-3">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          name="email"
                          placeholder="john@example.com"
                          className="bg-input-background border-border/50 focus:border-primary transition-all duration-300 h-12"
                        />
                      </div>

                      <div>
                        <label className="block text-sm mb-3">Project Type</label>
                        <select
                          name="projectType"
                          className="w-full h-12 px-4 py-2 bg-input-background border border-border/50 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option>Select project type</option>
                          <option>Residential Construction</option>
                          <option>Commercial Building</option>
                          <option>Industrial Project</option>
                          <option>Renovation/Remodeling</option>
                          <option>Infrastructure Development</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm mb-3">
                          Tell Us About Your Project *
                        </label>
                        <Textarea
                          required
                          name="message"
                          placeholder="Share your vision, requirements, timeline, or any questions you have. We're here to help!"
                          rows={6}
                          className="bg-input-background border-border/50 focus:border-primary transition-all duration-300 resize-none"
                        />
                      </div>

                      <Button
                        size="lg"
                        type="submit"
                        disabled={state.submitting}
                        className="w-full h-14 text-lg group relative overflow-hidden"
                      >
                        <span className="relative flex items-center justify-center gap-2">
                          {state.submitting ? "Sending..." : "Send Message"}
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>

                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        By submitting this form, you agree to be contacted by our
                        team regarding your inquiry.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        <info.icon className="h-6 w-6 text-primary relative z-10" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-foreground/80 mb-2">
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-muted-foreground mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}
