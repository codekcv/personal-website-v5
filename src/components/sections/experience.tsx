"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tech Giant Corp",
    role: "Senior Frontend Engineer",
    date: "2023 - Present",
    description:
      "Leading the core product team, improving performance by 40% and migrating legacy codebase to Next.js.",
  },
  {
    company: "Creative Studio",
    role: "Full Stack Developer",
    date: "2021 - 2023",
    description:
      "Developed award-winning websites for clients using WebGL and advanced animation libraries.",
  },
  {
    company: "Startup Inc",
    role: "Junior Developer",
    date: "2020 - 2021",
    description:
      "Collaborated on the MVP launch, handling both frontend UI and backend API integrations.",
  },
];

export function Experience() {
  return (
    <Section id="experience" className="flex flex-col justify-center py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in the tech industry.
          </p>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12 pb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-background/20 backdrop-blur-md border border-white/10 hover:border-border transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {exp.role}
                    <span className="text-muted-foreground font-normal">
                      at {exp.company}
                    </span>
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3 h-3" />
                    {exp.date}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
