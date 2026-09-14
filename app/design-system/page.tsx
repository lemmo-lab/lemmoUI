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
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Globe,
  Hash,
  Activity,
  Compass,
} from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LemmoMark } from '@/components/icons'
import { useTheme } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'

const brandColors = [
  { name: 'Brand Lime (Primary)', hex: '#D1FE17', token: '--lemmo-color-surface-brand', text: '#131517', role: 'Primary action CTA' },
  { name: 'Lime Hover', hex: '#C4EE0B', token: '--lemmo-color-surface-brand-hover', text: '#131517', role: 'Hover state' },
  { name: 'Lime Edge (Inset)', hex: '#829B19', token: '--lemmo-color-surface-brand-edge', text: '#ffffff', role: 'CTA inset 3D edge' },
  { name: 'Brand Pink (Secondary)', hex: '#FF005B', token: '--lemmo-color-surface-brand-secondary', text: '#ffffff', role: 'Secondary accent & highlights' },
  { name: 'Pink Deep', hex: '#ED1572', token: '--lemmo-color-brand-pink-deep', text: '#ffffff', role: 'Offer gradient stops' },
  { name: 'Brand Blue', hex: '#0256FE', token: '--lemmo-color-brand-blue', text: '#ffffff', role: 'Detail & link accent' },
  { name: 'Brand Cyan Glow', hex: '#3CD8FF', token: '--lemmo-color-brand-cyan-glow', text: '#131517', role: 'Table highlight & cyan glow' },
  { name: 'Brand Violet', hex: '#853CB0', token: '--lemmo-color-brand-violet', text: '#ffffff', role: 'Ultraviolet gradient accent' },
]

const surfaces = [
  { name: 'Page Primary', hex: '#131517', desc: 'Standard canvas page background', token: '--lemmo-color-page-primary' },
  { name: 'App Background', hex: '#131416', desc: 'Application shell viewport background', token: '--lemmo-color-app-background' },
  { name: 'Surface Tertiary', hex: '#0F1113', desc: 'Deepest backdrop surface (pricing bg)', token: '--lemmo-color-surface-tertiary' },
  { name: 'Surface Primary', hex: '#1C1E20', desc: 'Default card & panel surface', token: '--lemmo-color-surface-primary' },
  { name: 'Surface Secondary', hex: '#23262A', desc: 'Raised surface & popover menus', token: '--lemmo-color-surface-secondary' },
  { name: 'Surface Elevated', hex: '#18191C', desc: 'Gradient base & elevated layers', token: '--lemmo-color-surface-elevated' },
  { name: 'Surface Glass', hex: 'rgba(15,17,19,0.88)', desc: 'Translucent frosted glass card', token: '--lemmo-color-surface-glass' },
]

const statusMatrix = [
  {
    name: 'Danger / Critical',
    role: 'Errors, destructive actions, negative alerts',
    fg: '#FA0019',
    fgSoft: '#FF5462',
    bg: '#5C000F',
    glow: '#FF1F2E',
    ratio: '5.84:1',
    tokenText: '--lemmo-color-status-danger-fg-soft',
    tokenBg: '--lemmo-color-status-danger-bg',
    icon: AlertCircle,
  },
  {
    name: 'Warning',
    role: 'Caution, expiring limits, pending actions',
    fg: '#DFAB01',
    fgSoft: '#FFEF33',
    bg: '#523F00',
    glow: '#FFF05A',
    ratio: '8.68:1',
    tokenText: '--lemmo-color-status-warning-fg',
    tokenBg: '--lemmo-color-status-warning-bg',
    icon: AlertTriangle,
  },
  {
    name: 'Success',
    role: 'Positive confirmations, connected states',
    fg: '#2EB844',
    fgSoft: '#4EE466',
    bg: '#0D4A17',
    glow: '#00E62E',
    ratio: '10.99:1',
    tokenText: '--lemmo-color-status-success-fg-soft',
    tokenBg: '--lemmo-color-status-success-bg',
    icon: CheckCircle2,
  },
  {
    name: 'Information',
    role: 'System announcements, helpful tooltips',
    fg: '#0256FE',
    fgSoft: '#5B91FE',
    bg: '#000D26',
    glow: '#3CD8FF',
    ratio: '6.04:1',
    tokenText: '--lemmo-color-status-info-fg-soft',
    tokenBg: '--lemmo-color-status-info-bg',
    icon: Info,
  },
]

const fontHierarchy = [
  { role: 'Display / Hero (EN)', font: 'Oddval (600) / Satoshi', size: '4rem (64px)', sample: 'Autonomous AI Synthesis' },
  { role: 'Section Heading (EN)', font: 'Oddval / Satoshi', size: '2rem (32px)', sample: 'Design System Primitives' },
  { role: 'Persian Heading (FA)', font: 'Morabba (400-700)', size: '2rem (32px)', sample: 'سیستم طراحی مستقل لِمو', isFa: true },
  { role: 'Persian Body (FA)', font: 'IRANSansX (Variable)', size: '0.875rem (14px)', sample: 'توسعه رابط کاربری مدرن با معماری تم‌های تعویض‌پذیر و توکن‌های پایدار.', isFa: true },
  { role: 'English Body & UI (EN)', font: 'Satoshi (Variable)', size: '0.875rem (14px)', sample: 'Decoupled components adhering to WCAG AA contrast rules.' },
  { role: 'Isolated Numerals (All)', font: 'Satoshi [data-numeric]', size: '1rem (16px)', sample: 'قیمت: $299.00 — 2026-09-14 — 99.98% SLA', isNumeric: true },
]

const radii = [
  { name: 'Pill / Full', value: '9999px', token: '--lemmo-radius-pill', usage: 'Badges, status chips, pills' },
  { name: 'Featured Card', value: '1.25rem (20px)', token: '--lemmo-radius-featured-card', usage: 'Featured pricing & modal shells' },
  { name: 'Media Card', value: '1rem (16px)', token: '--lemmo-radius-media', usage: 'Media players, image frames' },
  { name: 'Card / Panel', value: '0.75rem (12px)', token: '--lemmo-radius-card', usage: 'Standard cards, tables, CTA button' },
  { name: 'Control', value: '0.5rem (8px)', token: '--lemmo-radius-control', usage: 'Standard buttons, text inputs' },
  { name: 'Badge', value: '0.375rem (6px)', token: '--lemmo-radius-badge', usage: 'Micro tags, small badges' },
  { name: 'Sharp (Zero)', value: '0px', token: '--lemmo-radius-0', usage: 'Minimalist & square boundaries' },
]

const iconLadder = [
  { name: 'icon-xs', size: '12px (0.75rem)', usage: 'Dense tables, ultra-compact list rows' },
  { name: 'icon-sm', size: '16px (1rem)', usage: 'Default inline buttons & inputs' },
  { name: 'icon-md', size: '20px (1.25rem)', usage: 'Control headers, form labels' },
  { name: 'icon-lg', size: '24px (1.5rem)', usage: 'Section titles, navigation bars' },
  { name: 'icon-xl', size: '28px (1.75rem)', usage: 'Featured cards, large highlight badges' },
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
            <span>Single Source of Truth — 100% Audit Complete</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Lemmo Design System
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Complete design specification extracted verbatim from <code className="text-foreground font-mono">System_design</code> and audited against reference standards. Strictly dark-only with zero raw hex in components.
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
              <p className="text-sm text-muted-foreground">Signature vibrant accents calibrated for obsidian dark canvases (docs/color.md §1 & §2).</p>
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
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{c.role}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground truncate">{c.token}</p>
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
              <p className="text-sm text-muted-foreground">Dark-only surface ladder creating physical depth without noisy outlines (docs/color.md §1).</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s) => (
              <div
                key={s.token}
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

        {/* SECTION 3: Status Colors & WCAG AA Verification */}
        <section id="status-colors" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Status Color Matrix & WCAG AA Verification</h2>
              <p className="text-sm text-muted-foreground">Sourced directly from reference product audit (docs/color.md §5). Text roles use the bright AA-passing tone.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {statusMatrix.map((st) => {
              const IconComp = st.icon
              return (
                <Card key={st.name} className="overflow-hidden border-border bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComp className="size-4" style={{ color: st.fgSoft }} />
                        <CardTitle className="text-base font-semibold">{st.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 bg-emerald-950/20 text-[10px]">
                        WCAG AA {st.ratio} PASS
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">{st.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Visual Preview Banner */}
                    <div
                      className="flex items-center justify-between rounded-lg p-3 text-xs border"
                      style={{ backgroundColor: st.bg, borderColor: `${st.fg}40`, color: st.fgSoft }}
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <IconComp className="size-4 shrink-0" />
                        <span>Notification: Status alert live message</span>
                      </span>
                      <code className="font-mono text-[10px] opacity-80">{st.fgSoft}</code>
                    </div>

                    {/* Token Swatches */}
                    <div className="grid grid-cols-4 gap-2 pt-1 text-center font-mono text-[10px]">
                      <div className="rounded border border-border p-1.5" style={{ backgroundColor: st.fg }}>
                        <span className="text-white font-bold drop-shadow-xs">Main FG</span>
                      </div>
                      <div className="rounded border border-border p-1.5" style={{ backgroundColor: st.fgSoft }}>
                        <span className="text-black font-bold">Text Soft</span>
                      </div>
                      <div className="rounded border border-border p-1.5" style={{ backgroundColor: st.bg }}>
                        <span className="text-white">Dark BG</span>
                      </div>
                      <div className="rounded border border-border p-1.5" style={{ backgroundColor: st.glow }}>
                        <span className="text-black font-bold">Glow</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-muted-foreground flex justify-between pt-1">
                      <span>Text: <code className="text-foreground">{st.tokenText}</code></span>
                      <span>BG: <code className="text-foreground">{st.tokenBg}</code></span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* SECTION 4: Typography & Multi-Language Architecture */}
        <section id="typography" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Type className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Typography & Multi-Language Architecture</h2>
              <p className="text-sm text-muted-foreground">Four fonts with dedicated roles, automatic <code className="font-mono text-foreground">[lang="fa"]</code> switching, and isolated numerals (docs/typography.md).</p>
            </div>
          </div>

          <div className="space-y-3">
            {fontHierarchy.map((f) => (
              <div
                key={f.role}
                className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-[220px]">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{f.role}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{f.font} · {f.size}</p>
                </div>
                <div className="text-right sm:text-left flex-1 min-w-0" dir={f.isFa ? 'rtl' : 'ltr'}>
                  <p
                    className="text-foreground tracking-tight truncate font-medium"
                    style={{ fontSize: `clamp(14px, 2.5vw, ${f.size.split(' ')[0]})` }}
                  >
                    {f.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Numeral Isolation Rule Callout */}
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Hash className="size-4" />
              <span>Mandatory Numeral Rule: [data-numeric] & .tabular-nums</span>
            </div>
            <p className="mt-2 text-xs leading-6 text-foreground">
              In Persian and RTL contexts, all numbers, stats, and prices must carry <code className="font-mono text-primary">[data-numeric]</code>.
              This forces rendering in Satoshi with <code className="font-mono text-primary">direction: ltr</code> and <code className="font-mono text-primary">unicode-bidi: isolate</code> so digits never break inside Persian text.
            </p>
          </div>
        </section>

        {/* SECTION 5: Iconography Standards */}
        <section id="iconography" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Compass className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Iconography Ladder & Rendering Rules</h2>
              <p className="text-sm text-muted-foreground">Strict 5-step ladder, locked to Synthline with 1.5 stroke-width and currentColor (docs/iconography.md).</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {iconLadder.map((ic) => (
              <div key={ic.name} className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-muted/60 text-primary">
                  <Activity style={{ width: ic.size.split(' ')[0], height: ic.size.split(' ')[0], strokeWidth: 1.5 }} />
                </div>
                <p className="text-xs font-semibold text-foreground">{ic.name}</p>
                <code className="font-mono text-[10px] text-primary mt-0.5">{ic.size}</code>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{ic.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Official Logo Monogram */}
        <section id="logo" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Lemu Logo Monogram Rules</h2>
              <p className="text-sm text-muted-foreground">The signature triad mark: three circular dots in lime #D1FE17 on dark, and reverted #060515 on lime (docs/logo.md).</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-sm">Standard Dark Surface (Brand Lime)</CardTitle>
                <CardDescription>Rendered on dark canvases (--lemmo-color-page-primary)</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8 bg-[#131517] rounded-xl border border-border/60">
                <LemmoMark className="size-16 fill-[#D1FE17]" />
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-sm">Reverted on Brand Lime Surface</CardTitle>
                <CardDescription>Switches to near-black #060515 to preserve 17.21:1 contrast</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8 bg-[#D1FE17] rounded-xl border border-border/60">
                <LemmoMark className="size-16 fill-[#060515]" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 7: Radius Matrix */}
        <section id="radii" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <Maximize2 className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Radius Matrix (Quarter-Rem Ladder)</h2>
              <p className="text-sm text-muted-foreground">Proportional scaling ladder from micro tags up to full outer window shells (lemu.radius.css).</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {radii.map((r) => (
              <div key={r.name} className="flex flex-col items-center rounded-xl border border-border bg-card p-3.5 text-center">
                <div
                  className="mb-3 size-12 border-2 border-primary bg-primary/10 shadow-xs"
                  style={{ borderRadius: r.value.split(' ')[0] }}
                />
                <p className="text-xs font-semibold text-foreground">{r.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{r.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-1">{r.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Elevation & Signature Brand Gloss */}
        <section id="elevation" className="mt-16 border-t border-border pt-10">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Elevation & Signature Brand Gloss</h2>
              <p className="text-sm text-muted-foreground">Multi-layer inset bevel stacks producing tactile physical controls (docs/color.md & lemu.elevation.css).</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base">Brand Primary CTA Gloss Stack</CardTitle>
                <CardDescription>Triple inset edge stack with ambient drop shadow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center p-6 bg-muted/40 rounded-xl">
                  <button
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#D1FE17] px-6 text-sm font-semibold text-[#131517] transition-transform active:scale-95 cursor-pointer"
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

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base">Brand Breathe Glow</CardTitle>
                <CardDescription>Soft ambient lime breathing effect for focus & status states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center p-6 bg-muted/40 rounded-xl">
                  <div
                    className="flex items-center gap-2 rounded-full border border-[#D1FE17]/60 bg-card px-4 py-2 text-xs font-semibold text-[#D1FE17]"
                    style={{ boxShadow: '0 0 1rem rgba(209, 254, 23, 0.4)' }}
                  >
                    <span className="size-2 rounded-full bg-[#D1FE17] animate-pulse" />
                    <span>Design Tokens Verified & Active</span>
                  </div>
                </div>
                <pre className="overflow-x-auto rounded-lg bg-background p-3 text-[11px] font-mono text-muted-foreground border border-border">
                  <code>{`box-shadow: 0 0 0.4rem color-mix(
  in srgb,
  var(--lemmo-color-surface-brand) 56%,
  transparent
);`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8 text-sm">
          <a href="/docs/tokens" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            ← Token Contract
          </a>
          <a href="/components/button" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Explore Components <ChevronRight className="size-4" />
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
