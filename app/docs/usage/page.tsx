'use client'

import * as React from 'react'
import { Code2, Layers3, Sparkles } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'

export default function UsagePage() {
  return (
    <DocsShell
      breadcrumb="Integration"
      title="Usage Guide"
      description="How to consume components, swap themes, and build layouts with Lemmo UI."
      badge="Integration"
      prev={{ name: 'Installation', href: '/docs/installation' }}
      next={{ name: 'Button', href: '/components/button' }}
      toc={[
        { label: 'Importing Components', href: '#importing' },
        { label: 'Applying Themes', href: '#applying-themes' },
        { label: 'Nested Scoped Themes', href: '#nested-themes' },
        { label: 'Dynamic Theme Switching', href: '#dynamic' },
      ]}
    >
      {/* 1. Importing Components */}
      <section id="importing" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Importing Components</h2>
        <p className="text-sm text-muted-foreground">
          Import primitives directly from the package entrypoint:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`import { Button, Card, CardHeader, CardTitle, Badge, Alert } from 'lemmoui'`}</code></pre>
        </div>
      </section>

      {/* 2. Applying Themes */}
      <section id="applying-themes" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Applying a Theme</h2>
        <p className="text-sm text-muted-foreground">
          Set the <code className="font-mono text-foreground">data-theme</code> attribute on the HTML root or app wrapper:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`// App.tsx
import { Button, Card, CardHeader, CardTitle } from 'lemmoui'
import 'lemmoui/styles.css'
import 'lemmoui/themes/neon.css'

export default function App() {
  return (
    <html data-theme="neon" className="dark">
      <body>
        <Card>
          <CardHeader>
            <CardTitle>Lemmo Studio</CardTitle>
          </CardHeader>
          <Button variant="default">Launch Canvas</Button>
        </Card>
      </body>
    </html>
  )
}`}</code></pre>
        </div>
      </section>

      {/* 3. Nested Scoped Themes */}
      <section id="nested-themes" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Nested Scoped Themes</h2>
        <p className="text-sm text-muted-foreground">
          Because themes are pure CSS custom properties, you can scope different themes to specific sections of your app:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`<div data-theme="midnight" className="dark">
  {/* This entire section adopts the Midnight theme */}
  <Sidebar />
</div>

<div data-theme="neon" className="dark">
  {/* The main canvas adopts the high-contrast Lemmo Neon theme */}
  <CanvasWorkspace />
</div>`}</code></pre>
        </div>
      </section>

      {/* 4. Dynamic Theme Switching */}
      <section id="dynamic" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dynamic Theme Switching</h2>
        <p className="text-sm text-muted-foreground">
          You can use the built-in <code className="font-mono text-foreground">ThemeProvider</code> and <code className="font-mono text-foreground">useTheme</code> hook provided by <code className="font-mono text-foreground">lemmoui</code>:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`import { ThemeProvider, useTheme, ThemeSwitcher } from 'lemmoui'

function Header() {
  const { theme, setTheme, isDark, toggleDark } = useTheme()
  return (
    <header>
      <ThemeSwitcher />
    </header>
  )
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
