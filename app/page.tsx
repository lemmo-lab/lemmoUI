'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Code2,
  Globe,
  Layers3,
  Package,
  Search,
  Sparkles,
} from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'

const sections = [
  { label: 'Get Started', items: ['Introduction', 'Installation', 'Your first component'] },
  { label: 'Components', items: ['Alert', 'Accordion', 'Button', 'Card', 'Dialog', 'Dropdown Menu', 'Input', 'Tabs'] },
  { label: 'Blocks', items: ['Sidebar', 'Dashboard', 'Authentication', 'Calendars'] },
  { label: 'Resources', items: ['Theming', 'Colors', 'Typography', 'Changelog'] },
]

function AlertPreview() {
  return (
    <div className="w-full max-w-[460px] rounded-lg border border-border bg-background p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-foreground text-background"><Check className="size-3" strokeWidth={3} /></div>
        <div><p className="text-sm font-medium">Everything looks good.</p><p className="mt-1 text-sm text-muted-foreground">Your project is ready to be shipped.</p></div>
      </div>
    </div>
  )
}

function CodeBlock() {
  return <div className="overflow-hidden rounded-lg border border-border bg-[#101010] text-[13px] text-zinc-300 shadow-sm"><div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] text-zinc-500"><span>app/page.tsx</span><Clipboard className="size-3.5" /></div><pre className="overflow-x-auto p-4 leading-6"><code><span className="text-purple-300">import</span> {'{ Alert }'} <span className="text-purple-300">from</span> <span className="text-emerald-300">&quot;@/components/ui/alert&quot;</span>{'\n\n'}<span className="text-purple-300">export default function</span> <span className="text-blue-300">Page</span>() {'{'}{'\n'}  <span className="text-purple-300">return</span> ({'\n'}    <span className="text-pink-300">&lt;Alert&gt;</span>{'\n'}      <span className="text-pink-300">&lt;AlertTitle&gt;</span>Success<span className="text-pink-300">&lt;/AlertTitle&gt;</span>{'\n'}      <span className="text-pink-300">&lt;AlertDescription&gt;</span>{'\n'}        {'Your project is ready.'}{'\n'}      <span className="text-pink-300">&lt;/AlertDescription&gt;</span>{'\n'}    <span className="text-pink-300">&lt;/Alert&gt;</span>{'\n'}  ){'}'}</code></pre></div>
}

export default function Page() {
  const [dark, setDark] = useState(true)
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const visibleSections = sections.map((section) => ({ ...section, items: section.items.filter((item) => item.toLowerCase().includes(query.toLowerCase())) })).filter((section) => section.items.length || !query)

  const copyCommand = async () => { await navigator.clipboard?.writeText('pnpm dlx shadcn@latest add alert'); setCopied(true); setTimeout(() => setCopied(false), 1600) }

  return (
    <div className={dark ? 'dark min-h-screen bg-background text-foreground' : 'min-h-screen bg-background text-foreground'}>
      <SiteHeader dark={dark} onThemeChange={() => setDark(!dark)} />

      <div id="docs" className="mx-auto grid max-w-[1440px] lg:grid-cols-[220px_minmax(0,1fr)_220px]">
        <aside className="hidden border-r border-border px-5 py-8 lg:block"><div className="sticky top-20"><p className="mb-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">Documentation</p><div className="flex flex-col gap-7">{sections.map((section) => <div key={section.label}><p className="mb-2 text-sm font-medium">{section.label}</p><div className="flex flex-col gap-1">{section.items.map((item) => <a key={item} href={item === 'Alert' ? '/components/alert' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={`rounded-md px-2 py-1.5 text-sm ${item === 'Introduction' ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{item}</a>)}</div></div>)}</div></div></aside>

        <main className="min-w-0 px-5 py-10 sm:px-10 lg:px-16 lg:py-16"><div className="mx-auto max-w-3xl"><div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground"><span>Docs</span><ChevronRight className="size-3" /><span>Introduction</span></div><div className="mb-14"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"><Sparkles className="size-3" /> Built for the web</div><h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">The foundation for<br /><span className="text-muted-foreground">your next interface.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">LEMMO is a curated collection of accessible, unstyled components. Copy, paste, and make them yours.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#installation" className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background">Get started <ArrowRight className="size-4" /></a><a href="#components" className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium hover:bg-accent">Browse components</a></div></div>

          <div className="grid gap-4 sm:grid-cols-3"><div className="rounded-lg border border-border p-4"><Layers3 className="mb-10 size-5 text-muted-foreground" /><p className="text-sm font-medium">Composable</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Small pieces that work together.</p></div><div className="rounded-lg border border-border p-4"><Code2 className="mb-10 size-5 text-muted-foreground" /><p className="text-sm font-medium">Open code</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Own the source. No black boxes.</p></div><div className="rounded-lg border border-border p-4"><Globe className="mb-10 size-5 text-muted-foreground" /><p className="text-sm font-medium">Accessible</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Built on web standards.</p></div></div>

          <section id="components" className="mt-24 border-t border-border pt-10"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Components</p><h2 className="text-2xl font-semibold tracking-tight">A better starting point.</h2></div><a href="#all" className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:flex">View all <ArrowRight className="size-3.5" /></a></div><div className="rounded-xl border border-border bg-muted/30 p-5 sm:p-8"><div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed border-border bg-background p-6"><AlertPreview /></div><div className="mt-6 flex items-center justify-between"><div><p className="text-sm font-medium">Alert</p><p className="mt-1 text-sm text-muted-foreground">Displays a callout for user attention.</p></div><a href="/components/alert" aria-label="Open Alert documentation" className="grid size-8 place-items-center rounded-md border border-border hover:bg-accent"><ChevronRight className="size-4" /></a></div></div></section>

          <section id="installation" className="mt-24 border-t border-border pt-10"><p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Installation</p><h2 className="text-2xl font-semibold tracking-tight">Start with a single command.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Install only what you need. Every component is yours to customize, extend, and ship.</p><button onClick={copyCommand} className="mt-6 flex w-full items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3 text-left font-mono text-xs text-muted-foreground hover:bg-accent"><span><span className="mr-2 text-muted-foreground">$</span>pnpm dlx shadcn@latest add alert</span>{copied ? <Check className="size-4 text-foreground" /> : <Clipboard className="size-4" />}</button><div className="mt-8"><CodeBlock /></div></section>

          <section id="blocks" className="mt-24 border-t border-border pt-10"><p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Next steps</p><h2 className="text-2xl font-semibold tracking-tight">Make it yours.</h2><div className="mt-6 grid gap-3 sm:grid-cols-2"><a href="#theming" className="group rounded-lg border border-border p-4 hover:bg-accent"><Package className="mb-8 size-5 text-muted-foreground" /><p className="text-sm font-medium">Customize your theme</p><p className="mt-1 text-sm text-muted-foreground">Colors, type, and radius.</p><ArrowRight className="mt-5 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></a><a href="#blocks" className="group rounded-lg border border-border p-4 hover:bg-accent"><Box className="mb-8 size-5 text-muted-foreground" /><p className="text-sm font-medium">Explore blocks</p><p className="mt-1 text-sm text-muted-foreground">Production-ready patterns.</p><ArrowRight className="mt-5 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></a></div></section></div></main>

        <aside className="hidden border-l border-border px-5 py-8 xl:block"><div className="sticky top-20"><div className="mb-8 flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground"><Search className="size-3.5" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search docs" className="min-w-0 bg-transparent outline-none placeholder:text-muted-foreground" /></div><div className="mb-8"><p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">On this page</p><div className="flex flex-col gap-2 border-l border-border pl-3 text-sm text-muted-foreground"><a href="#components" className="hover:text-foreground">Components</a><a href="#installation" className="hover:text-foreground">Installation</a><a href="#blocks" className="hover:text-foreground">Next steps</a></div></div><div className="rounded-lg border border-border p-4"><CircleHelp className="mb-5 size-4 text-muted-foreground" /><p className="text-sm font-medium">Need help?</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Ask a question or share feedback with the community.</p><a className="mt-4 inline-flex items-center gap-1 text-xs font-medium" href="#discord">Join Discord <ArrowRight className="size-3" /></a></div></div></aside>
      </div>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><SiteLogo /><span>Open source UI for thoughtful interfaces.</span><span>MIT License</span></div></footer>
    </div>
  )
}
