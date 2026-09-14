'use client'

import * as React from 'react'
import { Check, Moon, Palette, Sun, Zap } from 'lucide-react'
import { useTheme, type ThemeName } from './theme-provider'
import { Button } from './ui/button'

const themes: { id: ThemeName; label: string; accentColor: string; description: string }[] = [
  {
    id: 'neon',
    label: 'Neon (Lemmo)',
    accentColor: '#D1FE17',
    description: 'Lemmo Signature Lime & pitch surfaces',
  },
  {
    id: 'default',
    label: 'Default',
    accentColor: '#171717',
    description: 'Clean neutral slate design tokens',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    accentColor: '#737373',
    description: 'Monochrome high-contrast & zero radius',
  },
]

export function ThemeSwitcher({ className = '' }: { className?: string }) {
  const { theme, setTheme, isDark, toggleDark } = useTheme()

  return (
    <div className={`flex items-center gap-1.5 rounded-lg border border-border bg-card/60 p-1 backdrop-blur ${className}`}>
      <div className="flex items-center gap-1">
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

      <div className="h-4 w-px bg-border mx-1" />

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
