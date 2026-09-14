'use client'

import * as React from 'react'
import { Check, Layers3, Palette, ShieldCheck, Sparkles } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CoreConceptPage() {
  return (
    <DocsShell
      breadcrumb="Architecture"
      title="Core Concept"
      description="Why Lemmo UI completely decouples component geometry, logic, and accessibility from cosmetic themes."
      badge="Container Architecture"
      prev={{ name: 'Introduction', href: '/' }}
      next={{ name: 'Swappable Themes', href: '/docs/themes' }}
      toc={[
        { label: 'The Container Model', href: '#container-model' },
        { label: 'Skeleton vs Skin', href: '#skeleton-vs-skin' },
        { label: 'The Pure Token Rule', href: '#pure-token-rule' },
        { label: 'Monorepo Strategy', href: '#monorepo-strategy' },
      ]}
    >
      {/* 1. Container Model */}
      <section id="container-model" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Headless Container Model</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Most traditional UI libraries hardcode colors or lock developers into a single visual style. If you want a neon look today, you write classes for that; if you want a clean minimalist SaaS theme tomorrow, you rewrite component styles across the entire application.
        </p>
        <p className="text-sm leading-7 text-muted-foreground">
          <strong>Lemmo UI operates like a container:</strong> The component library defines the permanent skeleton (spacing, layout flex/grid, accessibility, ARIA roles, and state interactions). Visual themes are pluggable CSS skins that attach to an abstract token contract.
        </p>
      </section>

      {/* 2. Skeleton vs Skin */}
      <section id="skeleton-vs-skin" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Skeleton vs. Skin</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base text-primary">Library Core (Skeleton)</CardTitle>
                <Badge variant="outline" className="text-[10px]">Permanent</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Geometry & Layout:</strong> Flexbox, CSS grid, padding, min-heights, gap rhythm.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Accessibility (a11y):</strong> ARIA attributes, keyboard traps, focus rings, disabled states.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Token Contract:</strong> Consumes abstract CSS variables (<code className="font-mono text-foreground">var(--primary)</code>, <code className="font-mono text-foreground">var(--card)</code>).</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base text-primary">Theme (Skin)</CardTitle>
                <Badge variant="secondary" className="text-[10px]">Swappable</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Palettes:</strong> Background canvas, card surface, brand action lime, accent pink.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Border Radii:</strong> Proportional scaling from sharp <code className="font-mono text-foreground">0px</code> up to rounded <code className="font-mono text-foreground">12px</code>.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span><strong>Elevation & Glow:</strong> Lemmo brand inset gloss, breathe glows, ambient drops.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. The Pure Token Rule */}
      <section id="pure-token-rule" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Pure Token Rule</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          To maintain 100% theme independence, all components follow one strict rule:
        </p>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm">
          <div className="flex items-center gap-2 font-semibold text-primary">
            <ShieldCheck className="size-4" />
            <span>Guiding Architecture Law</span>
          </div>
          <p className="mt-2 text-xs leading-6 text-foreground">
            No component file may ever contain hardcoded hex values (e.g. <code className="font-mono">#D1FE17</code>) or rigid utility classes (e.g. <code className="font-mono">bg-black</code>). Colors must always be expressed as paired semantic tokens (<code className="font-mono">bg-primary text-primary-foreground</code>).
          </p>
        </div>
      </section>

      {/* 4. Monorepo Strategy */}
      <section id="monorepo-strategy" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Monorepo Strategy</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Lemmo UI is published as the package <code className="font-mono text-foreground">lemmoui</code>. In our project architecture, the frontend app contains zero local UI components or styling overrides — it simply installs <code className="font-mono text-foreground">lemmoui</code> and imports whichever theme is desired.
        </p>
      </section>
    </DocsShell>
  )
}
