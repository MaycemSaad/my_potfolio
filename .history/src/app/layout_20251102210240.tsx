import { LanguageThemeProvider } from '@/providers/LanguageThemeContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { CustomCursor } from '@/components/layout/CustomCursor'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="cursor-none">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageThemeProvider>
            <CustomCursor />
            {children}
          </LanguageThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
