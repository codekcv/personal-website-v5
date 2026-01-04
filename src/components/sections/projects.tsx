"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory and payments.",
        tags: ["Next.js", "Stripe", "Prisma"],
        links: { demo: "#", code: "#" },
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "AI Dashboard",
        description: "Analytics dashboard powered by machine learning models for data visualization.",
        tags: ["Python", "React", "D3.js"],
        links: { demo: "#", code: "#" },
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Social Graph",
        description: "Social networking tool visualizing connections between users in 3D space.",
        tags: ["Three.js", "GraphQL", "Neo4j"],
        links: { demo: "#", code: "#" },
        color: "from-emerald-500/20 to-lime-500/20"
    }
]

export function Projects() {
    return (
        <Section id="projects" className="flex flex-col justify-center py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A collection of projects exploring different technologies and design patterns.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between h-full p-6 rounded-3xl bg-background/20 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Decorative Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <div className="flex gap-2">
                                        <a href={project.links.code} className="p-2 rounded-full bg-background/50 hover:bg-background transition-colors" aria-label="Github Code">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.links.demo} className="p-2 rounded-full bg-background/50 hover:bg-background transition-colors" aria-label="Live Demo">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-background/40 backdrop-blur-sm border border-foreground/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
