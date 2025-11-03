import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { LanguageThemeProvider } from '@/providers/LanguageThemeContext'
import { CustomCursor } from '@/components/layout/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayssem Saad - Data Scientist & Actuary',
  description: 'Building intelligent systems at the intersection of AI, security, and automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="cursor-none">
      <body className={inter.className}>
        {/* ✅ props nécessaires pour que Tailwind active .dark */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageThemeProvider>
             <SplashScreen />
            <CustomCursor />
            {children}
          </LanguageThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
