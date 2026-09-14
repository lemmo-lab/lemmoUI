'use client'

import * as React from 'react'
import { Check, ChevronDown, Moon, Palette, Sun } from 'lucide-react'
import { useTheme, type ThemeName } from './theme-provider'

export const themes: { id: ThemeName; label: string; accentColor: string; description: string; category: string }[] = [
  {
    id: 'neon',
    label: 'Lemmo Neon',
    accentColor: '#D1FE17',
    description: 'Official Lemmo Brand (#131517 & #D1FE17)',
    category: 'Brand',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    accentColor: '#6366F1',
    description: 'SaaS Slate & Electric Indigo',
    category: 'Popular',
  },
  {
    id: 'emerald',
    label: 'Emerald',
    accentColor: '#10B981',
    description: 'Deep Obsidian & Fresh Green Tech',
    category: 'Popular',
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk',
    accentColor: '#00F0FF',
    description: 'Synthwave Neon Cyan & Magenta',
    category: 'Vibrant',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    accentColor: '#FFFFFF',
    description: 'Brutalist Monochrome & Zero Radius',
    category: 'Minimal',
  },
  {
    id: 'default',
    label: 'Neutral',
    accentColor: '#A1A1AA',
    description: 'Balanced Standard Neutral Slate',
    category: 'Standard',
  },
]

export function ThemeSwitcher({
  className = '',
  variant = 'compact',
}: {
  className?: string
  variant?: 'compact' | 'expanded'
}) {
  const { theme, setTheme, isDark, toggleDark } = useTheme()
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const activeTheme = themes.find((t) => t.id === theme) || themes[0]

  if (variant === 'expanded') {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {themes.map((t) => {
            const isActive = theme === t.id
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                  isActive
                    ? 'border-primary bg-primary/10 shadow-xs'
                    : 'border-border bg-card hover:border-primary/40 hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="size-3.5 rounded-full border border-black/20 shrink-0 shadow-xs"
                    style={{ backgroundColor: t.accentColor }}
                  />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{t.label}</p>
                    <p className="text-[10px] text-muted-foreground line-clamp-1">{t.category}</p>
                  </div>
                </div>
                {isActive && <Check className="size-3.5 text-primary stroke-[2.5]" />}
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3 text-xs">
          <span className="text-muted-foreground">Appearance Mode</span>
          <button
            onClick={toggleDark}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
          >
            {isDark ? <Moon className="size-3.5 text-primary" /> : <Sun className="size-3.5 text-primary" />}
            <span>{isDark ? 'Dark Theme' : 'Light Theme'}</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative flex items-center gap-1.5 rounded-lg border border-border bg-card/80 p-1 backdrop-blur ${className}`}>
      {/* Dropdown Toggle on Small/Medium screens or Desktop switcher */}
      <div className="hidden lg:flex items-center gap-1">
        {themes.map((t) => {
          const isActive = theme === t.id
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              title={t.description}
            >
              <span
                className="size-2 rounded-full border border-black/20 shrink-0"
                style={{ backgroundColor: t.accentColor }}
              />
              <span>{t.label}</span>
              {isActive && <Check className="size-3 stroke-[2.5]" />}
            </button>
          )
        })}
      </div>

      {/* Mobile/Compact Dropdown Menu */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground"
        >
          <span
            className="size-2.5 rounded-full border border-black/20"
            style={{ backgroundColor: activeTheme.accentColor }}
          />
          <span>{activeTheme.label}</span>
          <ChevronDown className="size-3 text-muted-foreground" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1.5 z-50 min-w-[160px] rounded-xl border border-border bg-card p-1.5 shadow-xl">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id)
                  setDropdownOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-left transition-colors ${
                  theme === t.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: t.accentColor }}
                  />
                  {t.label}
                </span>
                {theme === t.id && <Check className="size-3" />}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-4 w-px bg-border mx-1" />

      {/* Dark / Light Toggle */}
      <button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
      </button>
    </div>
  )
}
