"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <Section
      id="hero"
      className="flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-8 max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground"
          >
            Creative <br /> Developer.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I craft digital experiences that merge art with code. Building
            seamless, accessible, and performant web applications with modern
            technologies.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
