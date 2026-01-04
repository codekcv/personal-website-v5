"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GenericSectionId = string;

interface SectionContextType {
  activeSection: GenericSectionId;
  setActiveSection: (id: GenericSectionId) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<GenericSectionId>("hero");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
}
