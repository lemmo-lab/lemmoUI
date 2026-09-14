'use client'

import { LemmoMark } from '@/components/icons'
import { ExternalLink, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeSwitcher } from './theme-switcher'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-semibold tracking-tight text-foreground ${className ?? ''}`}>
      <LemmoMark className="size-6 shrink-0 fill-current text-primary transition-colors duration-200" />
      <span>LEMMO</span>
      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">UI</span>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="/"><Logo /></a>
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="/#docs">Docs</a>
            <a className="transition-colors hover:text-foreground" href="/design-system">Design System</a>
            <a className="transition-colors hover:text-foreground" href="/#themes">Themes</a>
            <a className="transition-colors hover:text-foreground" href="/changelog">Changelog</a>
            <a className="transition-colors hover:text-foreground" href="/discovery">Components</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
          <a
            href="https://github.com/lemmo-lab/lemmoUI"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:grid"
          >
            <ExternalLink className="size-4" />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-muted md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <div className="mb-4">
            <ThemeSwitcher />
          </div>
          <nav className="flex flex-col gap-3 text-sm">
            <a href="/#docs" onClick={() => setOpen(false)}>Docs</a>
            <a href="/design-system" onClick={() => setOpen(false)}>Design System</a>
            <a href="/#themes" onClick={() => setOpen(false)}>Themes</a>
            <a href="/changelog" onClick={() => setOpen(false)}>Changelog</a>
            <a href="/discovery" onClick={() => setOpen(false)}>Components</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export function SiteLogo({ className }: { className?: string } = {}) {
  return <Logo className={className} />
}
