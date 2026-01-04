"use client"

import { motion } from "framer-motion"

export function ProjectsBackground() {
    return (
        <div className="absolute inset-0 bg-background overflow-hidden">
            {/* Decorative gradient patches */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]" />

            {/* Floating Geometric Shapes */}
            <motion.div
                animate={{
                    rotate: 360,
                    y: [0, -20, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] left-[10%] w-32 h-32 border-2 border-emerald-500/20 rounded-xl opacity-50"
            />

            <motion.div
                animate={{
                    rotate: -360,
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[40%] right-[15%] w-48 h-48 border-2 border-teal-500/20 rounded-full opacity-50"
            />

            <motion.div
                animate={{
                    rotate: 180,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[20%] left-[30%] w-24 h-24 border border-cyan-500/20 rotate-45 opacity-40"
            />
        </div>
    )
}
