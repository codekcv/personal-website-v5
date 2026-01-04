"use client"

import { motion } from "framer-motion"

export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-background">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 dark:brightness-100 contrast-150 mix-blend-overlay z-20" />

            {/* Main Gradient Splash */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-500/20 dark:bg-purple-600/10 blur-[100px]" />

            {/* Animated Vivid Orbs - Boosted Opacity */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    rotate: [0, 45, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 blur-[80px] mix-blend-multiply dark:mix-blend-screen z-0"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.9, 0.6],
                    x: [0, -100, 0],
                    y: [0, 80, 0],
                    rotate: [0, -45, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-r from-fuchsia-500/40 to-pink-500/40 blur-[80px] mix-blend-multiply dark:mix-blend-screen z-0"
            />

            {/* Floating Accent */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] left-[50%] w-[20vw] h-[20vw] bg-cyan-500/30 blur-[60px] rounded-full mix-blend-multiply dark:mix-blend-screen"
            />
        </div>
    )
}
