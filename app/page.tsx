'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
  Package,
  Palette,
  Search,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useTheme, type ThemeName } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LemmoMark } from '@/components/icons'

const sections = [
  { label: 'Architecture', items: ['Core Concept', 'Swappable Themes', 'Design Tokens'] },
  { label: 'Foundation', items: ['Design System', 'Changelog'] },
  { label: 'Components', items: ['Button', 'Card', 'Badge', 'Alert'] },
  { label: 'Integration', items: ['Installation', 'Usage Guide'] },
]

export default function Page() {
  const { theme, setTheme, isDark, toggleDark } = useTheme()
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)

  const copyCommand = async (cmd: string) => {
    await navigator.clipboard?.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />

      <div id="docs" className="mx-auto grid max-w-[1440px] lg:grid-cols-[220px_minmax(0,1fr)_220px]">
        {/* Left Sidebar */}
        <aside className="hidden border-r border-border px-5 py-8 lg:block">
          <div className="sticky top-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Documentation
            </p>
            <div className="flex flex-col gap-6">
              {sections.map((section) => (
                <div key={section.label}>
                  <p className="mb-2 text-sm font-medium">{section.label}</p>
                  <div className="flex flex-col gap-1">
                    {section.items.map((item) => {
                      const href =
                        item === 'Design System'
                          ? '/design-system'
                          : item === 'Changelog'
                          ? '/changelog'
                          : `#${item.toLowerCase().replaceAll(' ', '-')}`
                      return (
                        <a
                          key={item}
                          href={href}
                          className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item}
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center Content */}
        <main className="min-w-0 px-5 py-10 sm:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb & Hero */}
            <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Architecture</span>
              <ChevronRight className="size-3" />
              <span className="text-foreground">Core + Swappable Themes</span>
            </div>

            <div className="mb-14">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="size-3 text-primary" />
                <span className="font-medium text-foreground">Lemmo UI</span> — Independent Core Library
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Independent Core. <br />
                <span className="text-primary">Swappable Themes.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                The UI library acts as a headless container: geometry, accessibility, and token contracts are locked in the core.
                Visual aesthetics (colors, border-radius, shadows) are swappable skins that plug in via pure CSS tokens.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#themes"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform active:scale-95"
                >
                  Explore Themes <ArrowRight className="size-4" />
                </a>
                <a
                  href="#components"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Sample Components
                </a>
              </div>
            </div>

            {/* Architecture Pillars */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5">
                <Layers3 className="mb-8 size-5 text-primary" />
                <p className="text-sm font-semibold">Decoupled Skin</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  Components never hardcode colors or hex codes. Everything resolves from CSS custom properties.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <Zap className="mb-8 size-5 text-primary" />
                <p className="text-sm font-semibold">Zero-JS Re-theming</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  Switch themes by setting <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">data-theme</code>. Instant cascading with 0ms re-render.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <Package className="mb-8 size-5 text-primary" />
                <p className="text-sm font-semibold">Monorepo Ready</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  Single npm workspace package consumed seamlessly by the frontend application.
                </p>
              </div>
            </div>

            {/* INTERACTIVE THEMES SANDBOX */}
            <section id="themes" className="mt-20 border-t border-border pt-10">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Live Demonstration</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Swappable Themes Playground</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Switch the theme below to observe instant re-skinning across all components.
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <ThemeSwitcher />
                </div>
              </div>

              {/* Playground Stage */}
              <div className="space-y-6 rounded-2xl border border-border bg-muted/25 p-5 sm:p-8">
                {/* Theme Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div className="flex items-center gap-2">
                    <Palette className="size-4 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Active Theme:</span>
                    <Badge variant="default" className="font-mono uppercase tracking-wider">
                      {theme}
                    </Badge>
                    <Badge variant="outline" className="text-[11px]">
                      {isDark ? 'Dark Mode' : 'Light Mode'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Token Scope:</span>
                    <code className="rounded bg-background px-2 py-0.5 font-mono text-foreground border border-border">
                      [data-theme=&quot;{theme}&quot;]{isDark ? '.dark' : ''}
                    </code>
                  </div>
                </div>

                {/* Theme Selector Cards */}
                <ThemeSwitcher variant="expanded" />

                {/* Live Components Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Card 1: Buttons & Badges */}
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Interactive Buttons</CardTitle>
                        <Badge variant="secondary">Sample Component</Badge>
                      </div>
                      <CardDescription>
                        All variants adapt to the active theme palette and radius token.
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Button variant="default">Primary Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">Badges</p>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="default">Default</Badge>
                          <Badge variant="secondary">Secondary</Badge>
                          <Badge variant="outline">Outline</Badge>
                          <Badge variant="destructive">Destructive</Badge>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="border-t border-border/50 text-xs text-muted-foreground">
                      <span>Token: <code className="font-mono text-foreground">bg-primary text-primary-foreground</code></span>
                    </CardFooter>
                  </Card>

                  {/* Card 2: Lemmo Brand Project Card */}
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-lg border border-border bg-background shadow-xs">
                          <LemmoMark className="size-6 text-primary transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Lemmo Studio</CardTitle>
                          <CardDescription>Visual Generation Canvas</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground leading-6">
                        An autonomous multi-agent canvas designed for iterative UI generation, theme compilation, and component synthesis.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="outline" className="text-[11px]">Next.js 16</Badge>
                        <Badge variant="outline" className="text-[11px]">Tailwind v4</Badge>
                        <Badge variant="outline" className="text-[11px]">OKLCH Tokens</Badge>
                      </div>
                    </CardContent>

                    <CardFooter className="flex items-center justify-between border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Status: Ready</span>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">Preview</Button>
                        <Button size="sm" variant="default">Launch</Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>

                {/* Live Alert Showcase */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alerts Feedback</p>
                  <Alert>
                    <Check className="size-4 text-primary" />
                    <div>
                      <AlertTitle>Theme Contract Synchronized</AlertTitle>
                      <AlertDescription>
                        All tokens are currently driven by <code className="font-mono text-foreground">theme-{theme}.css</code>.
                      </AlertDescription>
                    </div>
                  </Alert>
                </div>

                {/* Token Inspector */}
                <div className="overflow-hidden rounded-xl border border-border bg-background p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">Active Token Values</span>
                    <span className="text-muted-foreground">Inspected from stylesheet</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4 font-mono">
                    <div className="rounded-lg border border-border/80 bg-muted/40 p-2.5">
                      <span className="text-muted-foreground block text-[11px]">--primary</span>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="size-3.5 rounded-full border border-black/20 bg-primary shrink-0" />
                        <span className="truncate text-foreground text-[11px]">theme primary</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-muted/40 p-2.5">
                      <span className="text-muted-foreground block text-[11px]">--card</span>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="size-3.5 rounded-full border border-black/20 bg-card shrink-0" />
                        <span className="truncate text-foreground text-[11px]">surface</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-muted/40 p-2.5">
                      <span className="text-muted-foreground block text-[11px]">--radius</span>
                      <span className="mt-1.5 block text-foreground text-[11px]">
                        {theme === 'minimal' ? '0rem (sharp)' : theme === 'neon' ? '0.75rem (curved)' : '0.5rem (standard)'}
                      </span>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-muted/40 p-2.5">
                      <span className="text-muted-foreground block text-[11px]">--border</span>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="size-3.5 rounded-full border border-border bg-border shrink-0" />
                        <span className="truncate text-foreground text-[11px]">paired</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTEGRATION & USAGE */}
            <section id="installation" className="mt-20 border-t border-border pt-10">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Integration</p>
              <h2 className="text-2xl font-semibold tracking-tight">How Frontend Uses Lemmo UI</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                In Phase 2, the frontend project simply imports components from <code className="font-mono text-foreground">lemmoui</code> and plugs in the chosen theme stylesheet.
              </p>

              {/* Code Example */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-[#0e1011] text-[13px] text-zinc-300 shadow-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-3.5 text-primary" />
                    <span>frontend/src/app/App.tsx</span>
                  </div>
                  <button
                    onClick={() => copyCommand(`import { Button, Card, Badge } from 'lemmoui'\nimport 'lemmoui/styles.css'\nimport 'lemmoui/themes/neon.css'`)}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    {copied ? <Check className="size-3.5 text-primary" /> : <Clipboard className="size-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 leading-6 font-mono text-xs">
                  <code>{`// 1. Import UI components from the independent core library
import { Button, Card, CardHeader, CardTitle, Badge } from 'lemmoui'

// 2. Import core tokens and the swappable skin (e.g. Neon Lemmo)
import 'lemmoui/styles.css'
import 'lemmoui/themes/neon.css' // or minimal.css / default.css

export default function App() {
  return (
    // 3. Set the active theme skin on the root or container
    <div data-theme="neon" className="dark min-h-screen bg-background text-foreground">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Lemmo</CardTitle>
          <Badge variant="default">Online</Badge>
        </CardHeader>
        <Button variant="default">Launch Workspace</Button>
      </Card>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden border-l border-border px-5 py-8 xl:block">
          <div className="sticky top-20">
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
              <Search className="size-3.5" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="min-w-0 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
              />
            </div>
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
              <div className="flex flex-col gap-2 border-l border-border pl-3 text-sm text-muted-foreground">
                <a href="#themes" className="hover:text-foreground transition-colors">Swappable Themes</a>
                <a href="#components" className="hover:text-foreground transition-colors">Components</a>
                <a href="#installation" className="hover:text-foreground transition-colors">Integration Guide</a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <CircleHelp className="mb-3 size-4 text-primary" />
              <p className="text-sm font-semibold">Phase 1 Status</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Theme contract, sample components, and theme switcher are ready in <code className="font-mono text-foreground">ui</code>.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <SiteLogo />
            <span>— Lemmo Design System Core</span>
          </div>
          <span>MIT License</span>
        </div>
      </footer>
    </div>
  )
}
