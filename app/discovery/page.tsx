'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, Command, Layers3, Search, Sparkles } from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'

const components = [
  { name: 'Alert', type: 'Feedback', description: 'Contextual messages that keep users informed.', tone: 'lime', featured: true },
  { name: 'Accordion', type: 'Layout', description: 'Progressive disclosure for dense content.', tone: 'violet', featured: true },
  { name: 'Button', type: 'Actions', description: 'Clear actions with measured emphasis.', tone: 'blue', featured: false },
  { name: 'Card', type: 'Layout', description: 'A flexible surface for grouped content.', tone: 'orange', featured: false },
  { name: 'Dialog', type: 'Overlay', description: 'Focused decisions without losing context.', tone: 'pink', featured: false },
  { name: 'Dropdown Menu', type: 'Navigation', description: 'Compact actions that stay out of the way.', tone: 'cyan', featured: false },
  { name: 'Input', type: 'Forms', description: 'Thoughtful fields for confident entry.', tone: 'yellow', featured: false },
  { name: 'Tabs', type: 'Navigation', description: 'Switch between related views with ease.', tone: 'green', featured: false },
]

const tones: Record<string, string> = { lime: 'bg-[#d1fe17]', violet: 'bg-[#8f7cff]', blue: 'bg-[#5fa8ff]', orange: 'bg-[#ff914d]', pink: 'bg-[#ff6d91]', cyan: 'bg-[#63d6dc]', yellow: 'bg-[#f7d55d]', green: 'bg-[#6bd58b]' }

export default function DiscoveryPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(components.map((item) => item.type)))]
  const filtered = useMemo(() => components.filter((item) => (filter === 'All' || item.type === filter) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [filter, query])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 discovery-grid opacity-40" />
        <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-3xl animate-rise">
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground"><span className="grid size-7 place-items-center rounded-full border border-border"><Sparkles className="size-3.5 text-primary" /></span> LEMMO / Discovery</div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Find the right primitive for <span className="text-primary">what&apos;s next.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">A living index of accessible, composable components. Browse by intent, preview the rhythm, and take the pattern with you.</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-2xl shadow-black/10"><Search className="size-4 text-muted-foreground" /><span className="sr-only">Search components</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /><kbd className="hidden rounded border border-border px-2 py-1 text-[10px] text-muted-foreground sm:inline-flex"><Command className="mr-1 size-3" /> K</kbd></label>
            <div className="flex items-center gap-2 overflow-x-auto rounded-xl border border-border bg-card p-1">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs transition-colors ${filter === category ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}>{category}</button>)}</div>
          </div>
        </section>
        <section className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8">
          <div className="mb-5 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Component index</p><p className="mt-2 text-sm text-muted-foreground">{filtered.length} patterns ready to compose</p></div><Layers3 className="size-5 text-muted-foreground" /></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item, index) => <a href={item.name === 'Alert' ? '/components/alert' : '#'} key={item.name} className={`discovery-card group relative overflow-hidden rounded-2xl border border-border bg-card p-5 ${item.featured ? 'md:col-span-1 lg:col-span-1' : ''}`} style={{ animationDelay: `${index * 70}ms` }}><div className={`mb-16 grid size-10 place-items-center rounded-xl ${tones[item.tone]} text-black transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}><Layers3 className="size-5" /></div><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{item.type}</p><h2 className="mt-2 text-xl font-medium tracking-tight">{item.name}</h2><p className="mt-2 max-w-[230px] text-sm leading-6 text-muted-foreground">{item.description}</p></div><ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" /></div><div className="absolute -right-10 -top-10 size-28 rounded-full border border-border/50 transition-transform duration-700 group-hover:scale-[2.5]" /></a>)}</div>
          {filtered.length === 0 && <div className="rounded-2xl border border-dashed border-border p-16 text-center text-sm text-muted-foreground">No components match that search.</div>}
        </section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-xs text-muted-foreground sm:px-8"><div className="flex items-center gap-4"><SiteLogo /><span>/ Discovery</span></div><span className="flex items-center gap-2"><Check className="size-3 text-primary" /> Built to be composed</span></div></footer>
    </div>
  )
}
