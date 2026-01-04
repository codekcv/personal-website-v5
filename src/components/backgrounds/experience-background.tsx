"use client"

import { motion } from "framer-motion"

export function ExperienceBackground() {
    return (
        <div className="absolute inset-0 bg-background overflow-hidden flex items-center justify-center">
            {/* Warm gradient spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />

            <svg className="absolute w-full h-full opacity-30" preserveAspectRatio="none">
                <motion.path
                    initial={{ d: "M0,50 Q200,100 400,50 T800,50" }}
                    animate={{
                        d: [
                            "M0,50 Q200,100 400,50 T1600,50",
                            "M0,50 Q200,0 400,50 T1600,50",
                            "M0,50 Q200,100 400,50 T1600,50"
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="var(--border)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Vertical Line pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:10%_100%] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
    )
}
