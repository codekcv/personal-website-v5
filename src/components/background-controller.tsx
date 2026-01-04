"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSection } from "@/components/section-context"
import { HeroBackground } from "@/components/backgrounds/hero-background"
import { TechBackground } from "@/components/backgrounds/tech-background"
import { ProjectsBackground } from "@/components/backgrounds/projects-background"
import { ExperienceBackground } from "@/components/backgrounds/experience-background"
import { ContactBackground } from "@/components/backgrounds/contact-background"

export function BackgroundController() {
    const { activeSection } = useSection()

    const backgrounds: Record<string, React.ReactNode> = {
        hero: <HeroBackground />,
        tech: <TechBackground />,
        projects: <ProjectsBackground />,
        experience: <ExperienceBackground />,
        contact: <ContactBackground />,
    }

    // Fallback if ID doesn't match
    const currentBackground = backgrounds[activeSection] || backgrounds.hero

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-background transition-colors duration-500">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {currentBackground}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
