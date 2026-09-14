'use client'

import * as React from 'react'
import { ArrowRight, Check, Copy, Flame, Loader2, Sparkles, Terminal } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Button } from '@/components/ui/button'
import { LemmoMark } from '@/components/icons'

export default function ButtonPage() {
  const [copied, setCopied] = React.useState(false)
  const installCmd = 'import { Button } from "lemmoui"'

  const copy = () => {
    navigator.clipboard?.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <DocsShell
      breadcrumb="Components"
      title="Button"
      description="Interactive button primitive supporting multiple semantic variants, sizes, and brand physical gloss."
      badge="Primitive"
      prev={{ name: 'Design Tokens', href: '/docs/tokens' }}
      next={{ name: 'Card', href: '/components/card' }}
      toc={[
        { label: 'Preview', href: '#preview' },
        { label: 'Variants', href: '#variants' },
        { label: 'Sizes', href: '#sizes' },
        { label: 'Brand Gloss CTA', href: '#brand-gloss' },
        { label: 'Usage', href: '#usage' },
      ]}
    >
      {/* 1. Preview */}
      <section id="preview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-36 items-center justify-center rounded-2xl border border-border bg-muted/20 p-8">
          <Button variant="default" size="default">
            Primary Action
          </Button>
        </div>
      </section>

      {/* 2. Variants */}
      <section id="variants" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <p className="text-sm text-muted-foreground">
          Use the <code className="font-mono text-foreground">variant</code> prop to set semantic visual weight:
        </p>

        <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="default">Default</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;default&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="secondary">Secondary</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;secondary&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="outline">Outline</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;outline&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="destructive">Destructive</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;destructive&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="ghost">Ghost</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;ghost&quot;</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-muted/20 p-4">
            <Button variant="link">Link</Button>
            <span className="text-[11px] font-mono text-muted-foreground mt-1">variant=&quot;link&quot;</span>
          </div>
        </div>
      </section>

      {/* 3. Sizes */}
      <section id="sizes" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-6">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* 4. Brand Gloss CTA */}
      <section id="brand-gloss" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Brand Gloss CTA</h2>
        <p className="text-sm text-muted-foreground">
          With Lemmo's official design system, buttons feature signature triple-inset gloss shadows for tactile feedback:
        </p>
        <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/20 p-8">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#D1FE17] px-6 text-sm font-semibold text-[#131517] transition-transform active:scale-95 shadow-md"
            style={{
              boxShadow:
                'inset 0 0.8px 0 0 #D1FE17, inset 0 -1.6px 0 0 #829B19, inset 0 -2.4px 0 0 #829B19, 10px 34px 24px 0px rgba(0,0,0,0.15)',
            }}
          >
            <LemmoMark className="size-4 fill-current" />
            <span>Launch Studio Canvas</span>
          </button>
        </div>
      </section>

      {/* 5. Usage */}
      <section id="usage" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[11px] text-zinc-400">
            <span>app/page.tsx</span>
            <button onClick={copy} className="hover:text-white flex items-center gap-1">
              {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto leading-6"><code>{`import { Button } from 'lemmoui'

export function MyAction() {
  return (
    <Button variant="default" size="default">
      Click Me
    </Button>
  )
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
