"use client"

import * as React from "react"
import { useInView } from "framer-motion"
import { useSection } from "@/components/section-context"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string
    children: React.ReactNode
    className?: string
}

export function Section({ id, children, className, ...props }: SectionProps) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { amount: 0.5, margin: "-10% 0px -10% 0px" })
    const { setActiveSection } = useSection()

    React.useEffect(() => {
        if (isInView) {
            setActiveSection(id)
        }
    }, [isInView, id, setActiveSection])

    return (
        <section
            ref={ref}
            id={id}
            className={cn("min-h-screen w-full relative z-10 py-20", className)}
            {...props}
        >
            {children}
        </section>
    )
}
