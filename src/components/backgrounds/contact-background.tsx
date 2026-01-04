"use client"

import { motion } from "framer-motion"

export function ContactBackground() {
    return (
        <div className="absolute inset-0 bg-background overflow-hidden flex items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/50 to-zinc-200/50 dark:from-transparent dark:via-zinc-900/50 dark:to-black z-0" />

            {/* Grid overlay - More visible */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-1" />

            {/* Central active glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] z-0"
            />

            {/* Floating Network Nodes */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: (Math.random() - 0.5) * 800,
                        y: (Math.random() - 0.5) * 600,
                    }}
                    animate={{
                        x: (Math.random() - 0.5) * 800,
                        y: (Math.random() - 0.5) * 600,
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 z-10"
                >
                    <div className="w-full h-full rounded-full bg-primary/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    {/* Connecting line simulation (faint trail) */}
                    <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-r from-primary/20 to-transparent -translate-y-1/2 -z-10 rotate-[var(--rotation)] origin-left" style={{ "--rotation": `${Math.random() * 360}deg` } as any} />
                </motion.div>
            ))}
        </div>
    )
}
