import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { LanguageThemeProvider } from '@/providers/LanguageThemeContext'
import { CustomCursor } from '@/components/layout/CustomCursor'
import SplashScreen from '@/components/layout/SplashScreen'
import { SectionDots } from '@/components/SectionDots'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayssem Saad - Data Scientist & Actuary',
  description:
    'Building intelligent systems at the intersection of AI, security, and automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="cursor-none">
      <body className={inter.className}>
        {/* ✅ Activation du thème clair/sombre */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageThemeProvider>
            {/* ✅ Splash screen d’intro */}
            <SplashScreen />

            {/* ✅ Curseur personnalisé */}
            <CustomCursor />

            {/* ✅ Contenu principal */}
            {children}
          </LanguageThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
