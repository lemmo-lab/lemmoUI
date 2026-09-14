'use client'

import * as React from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Layers3,
  Palette,
  Sparkles,
  Type,
  Maximize2,
  Sliders,
  ShieldCheck,
} from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LemmoMark } from '@/components/icons'
import { useTheme } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'

const brandColors = [
  { name: 'Brand Lime (Primary)', hex: '#D1FE17', token: '--lemu-color-brand-lime', text: '#131517' },
  { name: 'Lime Hover', hex: '#C4EE0B', token: '--lemu-color-brand-lime-hover', text: '#131517' },
  { name: 'Lime Edge (Inset)', hex: '#829B19', token: '--lemu-color-brand-lime-edge', text: '#ffffff' },
  { name: 'Brand Pink (Secondary)', hex: '#FF005B', token: '--lemu-color-brand-pink', text: '#ffffff' },
  { name: 'Pink Deep', hex: '#ED1572', token: '--lemu-color-brand-pink-deep', text: '#ffffff' },
  { name: 'Brand Blue', hex: '#0256FE', token: '--lemu-color-brand-blue', text: '#ffffff' },
  { name: 'Brand Cyan', hex: '#3C8CFF', token: '--lemu-color-brand-cyan', text: '#ffffff' },
  { name: 'Brand Violet', hex: '#853CB0', token: '--lemu-color-brand-violet', text: '#ffffff' },
]

const surfaces = [
  { name: 'Page Primary', hex: '#131517', desc: 'Standard page background canvas', token: '--lemu-color-page-primary' },
  { name: 'App Background', hex: '#131416', desc: 'Application shell background', token: '--lemu-color-app-background' },
  { name: 'Surface Primary', hex: '#1C1E20', desc: 'Card and panel base surface', token: '--lemu-color-surface-primary' },
  { name: 'Surface Secondary', hex: '#23262A', desc: 'Raised surface & popovers', token: '--lemu-color-surface-secondary' },
  { name: 'Surface Tertiary', hex: '#0F1113', desc: 'Deepest backdrop surface', token: '--lemu-color-surface-tertiary' },
]

const fontHierarchy = [
  { role: 'Display / Hero', family: 'Inter Display', size: '4rem (64px)', sample: 'Autonomous UI Synthesis' },
  { role: 'Section Heading', family: 'Space Grotesk', size: '2rem (32px)', sample: 'Design System Primitives' },
  { role: 'Card Title / Subhead', family: 'Space Grotesk', size: '1.25rem (20px)', sample: 'Swappable Token Contract' },
  { role: 'Body Default', family: 'Inter', size: '0.875rem (14px)', sample: 'Small pieces that compose into resilient, production-ready interfaces.' },
  { role: 'Code & Data', family: 'IBM Plex Mono', size: '0.75rem (12px)', sample: 'var(--lemu-color-surface-brand, #d1fe17)' },
]

const radii = [
  { name: 'Pill / Full', value: '9999px', token: '--lemu-radius-pill', usage: 'Badges, status indicators' },
  { name: 'Featured Card', value: '1.25rem (20px)', token: '--lemu-radius-featured-card', usage: 'High-emphasis containers' },
  { name: 'Card / Panel', value: '0.75rem (12px)', token: '--lemu-radius-card', usage: 'Standard cards, tables' },
  { name: 'Control', value: '0.5rem (8px)', token: '--lemu-radius-control', usage: 'Buttons, text inputs' },
  { name: 'Badge', value: '0.375rem (6px)', token: '--lemu-radius-badge', usage: 'Micro tags, small chips' },
  { name: 'Sharp (Minimal)', value: '0px', token: '--lemu-radius-0', usage: 'Minimal / brutalist theme' },
]

export default function DesignSystemPage() {
  const { theme } = useTheme()
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null)

  const copy = (val: string) => {
    navigator.clipboard?.writeText(val)
    setCopiedToken(val)
    setTimeout(() => setCopiedToken(null), 1500)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Home</a>
          <ChevronRight className="size-3" />
          <span className="text-foreground">Design System</span>
        </div>

        {/* Hero */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            <span>Lemmo Design System Specification</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Lemmo Design System
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            The Single Source of Truth for visual design tokens, geometric constraints, surfaces, and typography scales across Lemmo Studio and Lemmo UI.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <ThemeSwitcher />
            <span className="text-xs text-muted-foreground">Live Theme: <strong className="text-foreground uppercase">{theme}</strong></span>
          </div>
        </div>

        {/* SECTION 1: Brand Palette */}
        <section id="colors" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Palette className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Brand Accent Palette</h2>
              <p className="text-sm text-muted-foreground">Vibrant signature accents calibrated for dark obsidian canvases.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {brandColors.map((c) => (
              <button
                key={c.hex}
                onClick={() => copy(c.token)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-3 text-left transition-all hover:scale-[1.02] hover:shadow-md"
              >
                <div
                  className="h-16 w-full rounded-lg shadow-inner flex items-center justify-center font-mono text-xs font-semibold"
                  style={{ backgroundColor: c.hex, color: c.text }}
                >
                  {c.hex}
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-foreground">{c.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted-foreground truncate">{c.token}</p>
                </div>
                <div className="absolute right-2 top-2 rounded-md bg-black/60 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedToken === c.token ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3 text-white" />}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 2: Surfaces Hierarchy */}
        <section id="surfaces" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Layers3 className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Surface & Canvas Hierarchy</h2>
              <p className="text-sm text-muted-foreground">Structured layers establishing depth and elevation without noisy borders.</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s) => (
              <div
                key={s.hex}
                className="flex items-center gap-4 rounded-xl border border-border p-4 shadow-sm"
                style={{ backgroundColor: s.hex }}
              >
                <div className="size-10 rounded-lg border border-white/10 shrink-0 shadow-inner" style={{ backgroundColor: s.hex }} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{s.name}</p>
                    <code className="text-[10px] font-mono text-zinc-400">{s.hex}</code>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{s.desc}</p>
                  <code className="mt-1.5 inline-block text-[10px] font-mono text-zinc-500">{s.token}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Typography Scale */}
        <section id="typography" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Type className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Typography Ladder</h2>
              <p className="text-sm text-muted-foreground">Inter & Space Grotesk pairings with precise letter tracking.</p>
            </div>
          </div>

          <div className="space-y-3">
            {fontHierarchy.map((f) => (
              <div
                key={f.role}
                className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-[200px]">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{f.role}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{f.family} · {f.size}</p>
                </div>
                <div className="text-right sm:text-left flex-1 min-w-0">
                  <p className="text-foreground tracking-tight truncate font-medium" style={{ fontSize: `clamp(14px, 2.5vw, ${f.size.split(' ')[0]})` }}>
                    {f.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Radius Ladder */}
        <section id="radii" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Maximize2 className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Radius Matrix</h2>
              <p className="text-sm text-muted-foreground">Quarter-rem proportional scaling from control elements up to outer shells.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {radii.map((r) => (
              <div key={r.name} className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center">
                <div
                  className="mb-3 size-14 border-2 border-primary bg-primary/10 shadow-xs"
                  style={{ borderRadius: r.value.split(' ')[0] }}
                />
                <p className="text-xs font-semibold text-foreground">{r.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{r.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-1">{r.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Elevation & Signature Gloss */}
        <section id="elevation" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Elevation & Lemmo Brand Gloss</h2>
              <p className="text-sm text-muted-foreground">Signature multi-layer inset shadows creating tactile physical buttons.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Brand CTA Gloss Effect</CardTitle>
                <CardDescription>Triple inset edge stack with ambient drop shadow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center p-6 bg-muted/40 rounded-xl">
                  <button
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#D1FE17] px-6 text-sm font-semibold text-[#131517] transition-transform active:scale-95"
                    style={{
                      boxShadow: 'inset 0 0.8px 0 0 #D1FE17, inset 0 -1.6px 0 0 #829B19, inset 0 -2.4px 0 0 #829B19, 10px 34px 24px 0px rgba(0,0,0,0.15)',
                    }}
                  >
                    <LemmoMark className="size-4 fill-current" />
                    <span>Launch Studio Canvas</span>
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-lg bg-background p-3 text-[11px] font-mono text-muted-foreground border border-border">
                  <code>{`box-shadow: inset 0 0.8px 0 0 #d1fe17,
            inset 0 -1.6px 0 0 #829b19,
            inset 0 -2.4px 0 0 #829b19,
            10px 34px 24px 0 rgba(0,0,0,0.15);`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Brand Breathe Glow</CardTitle>
                <CardDescription>Soft ambient lime breathing effect for highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center p-6 bg-muted/40 rounded-xl">
                  <div
                    className="flex items-center gap-2 rounded-full border border-[#D1FE17]/60 bg-card px-4 py-2 text-xs font-semibold text-[#D1FE17]"
                    style={{ boxShadow: '0 0 1rem rgba(209, 254, 23, 0.4)' }}
                  >
                    <span className="size-2 rounded-full bg-[#D1FE17] animate-pulse" />
                    <span>System Tokens Synchronized</span>
                  </div>
                </div>
                <pre className="overflow-x-auto rounded-lg bg-background p-3 text-[11px] font-mono text-muted-foreground border border-border">
                  <code>{`box-shadow: 0 0 0.4rem color-mix(
  in srgb,
  var(--lemu-color-surface-brand) 56%,
  transparent
);`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8 text-sm">
          <a href="/#docs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            ← Back to Docs
          </a>
          <a href="/changelog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            View Changelog <ChevronRight className="size-4" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <SiteLogo />
            <span>— Lemmo Design System Specification</span>
          </div>
          <span>MIT License</span>
        </div>
      </footer>
    </div>
  )
}
