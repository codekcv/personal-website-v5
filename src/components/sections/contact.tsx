"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      className="flex flex-col justify-center py-24 min-h-[70vh]"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl bg-background/20 backdrop-blur-md border border-white/10 text-center overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              I&apos;m currently available for freelance work and open to
              full-time opportunities. If you have a project that needs some
              creative touch, I&apos;d love to hear about it.
            </p>

            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 mt-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>

            <div className="flex gap-6 mt-8">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-3 rounded-full bg-background/50 hover:bg-background hover:text-primary transition-all hover:scale-110"
                  aria-label="Social Link"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 blur-3xl -z-10" />
        </motion.div>
      </div>
    </Section>
  );
}
