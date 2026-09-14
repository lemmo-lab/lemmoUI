'use client'

import * as React from 'react'
import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Package,
  Palette,
  ShieldCheck,
  Sliders,
  Sparkles,
  Zap,
} from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LemmoMark } from '@/components/icons'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useTheme } from '@/components/theme-provider'

export default function HomePage() {
  const { theme, isDark } = useTheme()

  return (
    <DocsShell
      breadcrumb="Architecture"
      title="Introduction"
      description="The independent UI library core and swappable themes engine for Lemmo Studio."
      badge="Design System Core"
      next={{ name: 'Core Concept', href: '/docs/core-concept' }}
      toc={[
        { label: 'Overview', href: '#overview' },
        { label: 'Key Pillars', href: '#pillars' },
        { label: 'Live Preview', href: '#live-preview' },
        { label: 'Documentation Sections', href: '#sections' },
      ]}
    >
      {/* 1. Overview */}
      <section id="overview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Lemmo UI is built on a simple yet powerful philosophy: <strong>Components should be containers, not rigid paintings</strong>. The library core handles geometry, accessibility, and token contracts, while visual themes plug in via pure CSS design tokens without any JavaScript re-render penalty.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/docs/core-concept"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span>Read Core Concept</span>
            <ArrowRight className="size-3.5" />
          </a>
          <a
            href="/docs/themes"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <span>Explore 6 Themes</span>
          </a>
          <a
            href="/design-system"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <span>Design System Hub</span>
          </a>
        </div>
      </section>

      {/* 2. Key Pillars */}
      <section id="pillars" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Architectural Pillars</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <Layers3 className="mb-6 size-5 text-primary" />
            <p className="text-sm font-semibold">Decoupled Skin</p>
            <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
              Zero hardcoded color hexes. All visual traits resolve through CSS custom properties.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Zap className="mb-6 size-5 text-primary" />
            <p className="text-sm font-semibold">Zero-JS Re-theming</p>
            <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
              Instant CSS-native cascading with <code className="font-mono text-foreground">data-theme</code>. 0ms runtime JS recalculation.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Package className="mb-6 size-5 text-primary" />
            <p className="text-sm font-semibold">Monorepo Ready</p>
            <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
              Direct workspace package export for seamless consumption by the frontend application.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Live Preview */}
      <section id="live-preview" className="space-y-4 pt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Live Theme Sandbox</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Switch themes to see real-time cascading across primitives:</p>
          </div>
          <ThemeSwitcher />
        </div>

        <div className="rounded-2xl border border-border bg-muted/20 p-6 space-y-6">
          <div className="flex items-center justify-between text-xs border-b border-border/70 pb-3">
            <span className="font-medium text-muted-foreground">Active Theme: <strong className="text-foreground uppercase">{theme}</strong></span>
            <Badge variant="outline" className="text-[11px]">{isDark ? 'Dark Mode' : 'Light Mode'}</Badge>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Interactive Buttons</CardTitle>
                  <Badge variant="secondary">Sample</Badge>
                </div>
                <CardDescription>Buttons adapt to the active palette</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <LemmoMark className="size-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">Lemmo Studio</CardTitle>
                    <CardDescription>Visual Generation Canvas</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-5">
                  Synchronized with official design system tokens.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-border/50 pt-3">
                <Badge variant="outline">OKLCH</Badge>
                <Button size="sm" variant="default">Launch</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Documentation Sections */}
      <section id="sections" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dedicated Documentation Pages</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="/docs/core-concept"
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/40"
          >
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Core Concept →
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Deep dive into the Container Model, Skeleton vs Skin, and the Pure Token Rule.
            </p>
          </a>

          <a
            href="/docs/themes"
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/40"
          >
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Swappable Themes →
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Interactive sandbox with all 6 themes (Lemmo Neon, Midnight, Emerald, etc.).
            </p>
          </a>

          <a
            href="/docs/tokens"
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/40"
          >
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Design Tokens →
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Semantic token table, mandatory pairing rules, and active token inspector.
            </p>
          </a>

          <a
            href="/docs/installation"
            className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/40"
          >
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Installation Guide →
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              How to install and connect lemmoui in your monorepo workspace.
            </p>
          </a>
        </div>
      </section>
    </DocsShell>
  )
}
