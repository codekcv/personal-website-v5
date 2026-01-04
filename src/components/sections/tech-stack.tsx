"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Code2, Database, Layout, Terminal, Layers } from "lucide-react";

const technologies = [
  {
    name: "Frameworks",
    items: ["Next.js", "React", "Vue", "Svelte"],
    icon: Layout,
  },
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust"],
    icon: Code2,
  },
  {
    name: "Styling",
    items: ["TailwindCSS", "CSS Modules", "Sass", "Framer Motion"],
    icon: Layers,
  },
  {
    name: "Backend",
    items: ["Node.js", "Bun", "PostgreSQL", "Firebase"],
    icon: Database,
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code"],
    icon: Terminal,
  },
];

export function TechStack() {
  return (
    <Section id="tech" className="flex flex-col justify-center py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My preferred weapons of choice for building digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-background/20 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <tech.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
              <ul className="space-y-2">
                {tech.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
