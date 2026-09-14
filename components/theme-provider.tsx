'use client'

import * as React from 'react'

export type ThemeName = 'neon' | 'midnight' | 'emerald' | 'cyberpunk' | 'minimal' | 'default'

export interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  isDark: boolean
  toggleDark: () => void
  setDark: (dark: boolean) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'neon',
  defaultDark = true,
}: {
  children: React.ReactNode
  defaultTheme?: ThemeName
  defaultDark?: boolean
}) {
  const [theme, setThemeState] = React.useState<ThemeName>(defaultTheme)
  const [isDark, setIsDarkState] = React.useState<boolean>(defaultDark)

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('lemmo-theme') as ThemeName | null
      const savedDark = localStorage.getItem('lemmo-dark')
      if (savedTheme && ['neon', 'midnight', 'emerald', 'cyberpunk', 'minimal', 'default'].includes(savedTheme)) {
        setThemeState(savedTheme)
      }
      if (savedDark !== null) {
        setIsDarkState(savedDark === 'true')
      }
    } catch {
      // LocalStorage unavailable (e.g. private browsing)
    }
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('lemmo-theme', theme)
      localStorage.setItem('lemmo-dark', String(isDark))
    } catch {
      // LocalStorage unavailable
    }
  }, [theme, isDark])

  const setTheme = React.useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme)
  }, [])

  const toggleDark = React.useCallback(() => {
    setIsDarkState((prev) => !prev)
  }, [])

  const setDark = React.useCallback((dark: boolean) => {
    setIsDarkState(dark)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
