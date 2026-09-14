'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CardPage() {
  const [copied, setCopied] = React.useState(false)

  return (
    <DocsShell
      breadcrumb="Components"
      title="Card"
      description="Elevated container primitive for grouping related content, actions, and media."
      badge="Primitive"
      prev={{ name: 'Button', href: '/components/button' }}
      next={{ name: 'Badge', href: '/components/badge' }}
      toc={[
        { label: 'Preview', href: '#preview' },
        { label: 'Anatomy', href: '#anatomy' },
        { label: 'Usage', href: '#usage' },
      ]}
    >
      {/* 1. Preview */}
      <section id="preview" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-48 items-center justify-center rounded-2xl border border-border bg-muted/20 p-8">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lemmo Project</CardTitle>
                <Badge variant="secondary">Active</Badge>
              </div>
              <CardDescription>Visual generation canvas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Autonomous UI design system compiler and swappable theme synthesizer.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button variant="default" size="sm">Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 2. Anatomy */}
      <section id="anatomy" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Anatomy & Primitives</h2>
        <p className="text-sm text-muted-foreground">
          The Card is composed of modular compound parts:
        </p>
        <ul className="space-y-2 text-xs leading-6 text-muted-foreground list-disc pl-5">
          <li><code className="font-mono text-foreground">Card</code>: Main elevated wrapper bound to <code className="font-mono text-primary">--card</code> and <code className="font-mono text-primary">--card-foreground</code>.</li>
          <li><code className="font-mono text-foreground">CardHeader</code>: Top section for title, badge, and description with standard padding.</li>
          <li><code className="font-mono text-foreground">CardTitle</code>: Semibold title heading.</li>
          <li><code className="font-mono text-foreground">CardDescription</code>: Muted subtitle text.</li>
          <li><code className="font-mono text-foreground">CardContent</code>: Body area for main elements.</li>
          <li><code className="font-mono text-foreground">CardFooter</code>: Bottom action row for buttons and status indicators.</li>
        </ul>
      </section>

      {/* 3. Usage */}
      <section id="usage" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'lemmoui'

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content body</p>
      </CardContent>
      <CardFooter>
        <Button variant="default">Confirm</Button>
      </CardFooter>
    </Card>
  )
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
