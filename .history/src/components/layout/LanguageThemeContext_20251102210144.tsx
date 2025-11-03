'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'FR' | 'EN'

interface ContextProps {
  language: Language
  toggleLanguage: () => void
}

const LanguageThemeContext = createContext<ContextProps | undefined>(undefined)

export function LanguageThemeProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('FR')
  const toggleLanguage = () => setLanguage((prev) => (prev === 'FR' ? 'EN' : 'FR'))

  return (
    <LanguageThemeContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageThemeContext.Provider>
  )
}

export function useLanguageTheme() {
  const context = useContext(LanguageThemeContext)
  if (!context) throw new Error('useLanguageTheme must be used inside LanguageThemeProvider')
  return context
}
