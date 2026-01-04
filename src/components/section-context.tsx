"use client"

import * as React from "react"

type GenericSectionId = string

interface SectionContextType {
    activeSection: GenericSectionId
    setActiveSection: (id: GenericSectionId) => void
}

const SectionContext = React.createContext<SectionContextType | undefined>(undefined)

export function SectionProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = React.useState<GenericSectionId>("hero")

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    )
}

export function useSection() {
    const context = React.useContext(SectionContext)
    if (context === undefined) {
        throw new Error("useSection must be used within a SectionProvider")
    }
    return context
}
