'use client'

import * as React from 'react'
import { DocsShell } from '@/components/docs-shell'
import { Badge } from '@/components/ui/badge'

export default function BadgePage() {
  return (
    <DocsShell
      breadcrumb="Components"
      title="Badge"
      description="Small status indicator and categorization chip component."
      badge="Primitive"
      prev={{ name: 'Card', href: '/components/card' }}
      next={{ name: 'Alert', href: '/components/alert' }}
      toc={[
        { label: 'Preview', href: '#preview' },
        { label: 'Variants', href: '#variants' },
        { label: 'Usage', href: '#usage' },
      ]}
    >
      {/* 1. Preview */}
      <section id="preview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-36 items-center justify-center gap-3 rounded-2xl border border-border bg-muted/20 p-8">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* 2. Variants */}
      <section id="variants" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <Badge variant="default">Primary Badge</Badge>
            <code className="text-xs font-mono text-muted-foreground">variant=&quot;default&quot;</code>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <Badge variant="secondary">Secondary Badge</Badge>
            <code className="text-xs font-mono text-muted-foreground">variant=&quot;secondary&quot;</code>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <Badge variant="outline">Outline Badge</Badge>
            <code className="text-xs font-mono text-muted-foreground">variant=&quot;outline&quot;</code>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <Badge variant="destructive">Error Status</Badge>
            <code className="text-xs font-mono text-muted-foreground">variant=&quot;destructive&quot;</code>
          </div>
        </div>
      </section>

      {/* 3. Usage */}
      <section id="usage" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`import { Badge } from 'lemmoui'

export function StatusIndicator() {
  return <Badge variant="default">Online</Badge>
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
