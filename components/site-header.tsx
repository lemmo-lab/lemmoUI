'use client'

import { ExternalLink, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

function Logo() {
  return <div className="flex items-center gap-2.5 font-semibold tracking-tight"><span className="grid size-6 place-items-center rounded-md bg-[#d1fe17] p-1"><img src="/lemu-mark.svg" alt="" className="size-full" /></span><span>LEMU</span></div>
}

export function SiteHeader({ dark, onThemeChange }: { dark: boolean; onThemeChange: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8"><a href="/"><Logo /></a><nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"><a className="text-foreground" href="/#docs">Docs</a><a href="/discovery">Components</a><a href="/#blocks">Blocks</a><a href="/#themes">Themes</a></nav></div>
        <div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={onThemeChange} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground">{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button><a href="#github" aria-label="GitHub" className="hidden size-8 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground sm:grid"><ExternalLink className="size-4" /></a><button aria-label="Open menu" onClick={() => setOpen(!open)} className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-accent md:hidden">{open ? <X className="size-4" /> : <Menu className="size-4" />}</button></div>
      </div>
      {open && <nav className="border-t border-border px-4 py-4 md:hidden"><div className="flex flex-col gap-3 text-sm"><a href="/#docs">Docs</a><a href="/discovery">Components</a><a href="/#blocks">Blocks</a><a href="/#themes">Themes</a></div></nav>}
    </header>
  )
}

export function SiteLogo() {
  return <Logo />
}
