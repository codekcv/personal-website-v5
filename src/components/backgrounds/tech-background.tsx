"use client"

import { motion } from "framer-motion"

export function TechBackground() {
    return (
        <div className="absolute inset-0 bg-background overflow-hidden flex items-center justify-center">
            {/* Radial Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)] z-10" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Moving scanning line */}
            <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm z-0"
            />

            {/* Random glowing dots */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                    }}
                    className="absolute w-2 h-2 rounded-full bg-cyan-400 blur-sm z-0"
                />
            ))}
        </div>
    )
}
