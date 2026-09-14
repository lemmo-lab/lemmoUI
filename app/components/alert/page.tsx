'use client'

import * as React from 'react'
import { Check, Copy, Info, Terminal } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AlertPage() {
  const [copied, setCopied] = React.useState(false)

  return (
    <DocsShell
      breadcrumb="Components"
      title="Alert"
      description="Displays a callout for user attention, status, or contextual guidance."
      badge="Primitive"
      prev={{ name: 'Badge', href: '/components/badge' }}
      next={{ name: 'Installation', href: '/docs/installation' }}
      toc={[
        { label: 'Preview', href: '#preview' },
        { label: 'Variants', href: '#variants' },
        { label: 'Usage', href: '#usage' },
      ]}
    >
      {/* 1. Preview */}
      <section id="preview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="grid gap-3 rounded-2xl border border-border bg-muted/20 p-6 sm:grid-cols-2">
          <Alert>
            <Check className="size-4 text-primary" />
            <div>
              <AlertTitle>Everything looks good.</AlertTitle>
              <AlertDescription>Your project is ready to be shipped.</AlertDescription>
            </div>
          </Alert>

          <Alert variant="destructive">
            <Info className="size-4" />
            <div>
              <AlertTitle>Critical Alert</AlertTitle>
              <AlertDescription>Review this action before proceeding.</AlertDescription>
            </div>
          </Alert>
        </div>
      </section>

      {/* 2. Variants */}
      <section id="variants" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
        <div className="space-y-3">
          <Alert variant="default">
            <Check className="size-4 text-primary" />
            <div>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>Standard contextual message bound to card surface tokens.</AlertDescription>
            </div>
          </Alert>

          <Alert variant="destructive">
            <Info className="size-4" />
            <div>
              <AlertTitle>Destructive Alert</AlertTitle>
              <AlertDescription>Critical feedback bound to --destructive tokens.</AlertDescription>
            </div>
          </Alert>
        </div>
      </section>

      {/* 3. Usage */}
      <section id="usage" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`import { Alert, AlertTitle, AlertDescription } from 'lemmoui'

export function StatusCallout() {
  return (
    <Alert>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Operation completed successfully.</AlertDescription>
    </Alert>
  )
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
