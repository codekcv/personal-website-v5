"use client"

import { motion } from "framer-motion"

export function ExperienceBackground() {
    return (
        <div className="absolute inset-0 bg-background overflow-hidden flex items-center justify-center pointer-events-none">
            {/* Ambient Warmth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />

            <div className="w-full max-w-7xl flex justify-between h-full px-4 md:px-12">
                {/* Left Vertical Wave */}
                <div className="h-full w-[200px] opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 800">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="var(--foreground)" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            initial={{ d: "M50,0 Q90,200 50,400 T50,800" }}
                            animate={{
                                d: [
                                    "M50,0 Q90,200 50,400 T50,800",
                                    "M50,0 Q10,200 50,400 T50,800",
                                    "M50,0 Q90,200 50,400 T50,800"
                                ]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            fill="none"
                            stroke="url(#waveGradient)"
                            strokeWidth="2"
                        />
                        {/* Secondary echo wave */}
                        <motion.path
                            initial={{ d: "M50,0 Q10,200 50,400 T50,800" }}
                            animate={{
                                d: [
                                    "M50,0 Q10,200 50,400 T50,800",
                                    "M50,0 Q90,200 50,400 T50,800",
                                    "M50,0 Q10,200 50,400 T50,800"
                                ]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            fill="none"
                            stroke="url(#waveGradient)"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                    </svg>
                </div>

                {/* Right Vertical Wave */}
                <div className="h-full w-[200px] opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 800">
                        <motion.path
                            initial={{ d: "M50,0 Q10,200 50,400 T50,800" }}
                            animate={{
                                d: [
                                    "M50,0 Q10,200 50,400 T50,800",
                                    "M50,0 Q90,200 50,400 T50,800",
                                    "M50,0 Q10,200 50,400 T50,800"
                                ]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            fill="none"
                            stroke="url(#waveGradient)"
                            strokeWidth="2"
                        />
                        {/* Secondary echo wave */}
                        <motion.path
                            initial={{ d: "M50,0 Q90,200 50,400 T50,800" }}
                            animate={{
                                d: [
                                    "M50,0 Q90,200 50,400 T50,800",
                                    "M50,0 Q10,200 50,400 T50,800",
                                    "M50,0 Q90,200 50,400 T50,800"
                                ]
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 3
                            }}
                            fill="none"
                            stroke="url(#waveGradient)"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
