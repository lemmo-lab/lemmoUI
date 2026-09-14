'use client'

import * as React from 'react'
import { Check, Clipboard, Code2, Package, Sparkles, Terminal } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'

export default function InstallationPage() {
  const [copied, setCopied] = React.useState<string | null>(null)

  const copy = (val: string) => {
    navigator.clipboard?.writeText(val)
    setCopied(val)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <DocsShell
      breadcrumb="Integration"
      title="Installation"
      description="How to install and configure Lemmo UI in your project or monorepo."
      badge="Setup Guide"
      prev={{ name: 'Alert', href: '/components/alert' }}
      next={{ name: 'Usage Guide', href: '/docs/usage' }}
      toc={[
        { label: 'Quick Start', href: '#quick-start' },
        { label: 'Monorepo Workspace', href: '#monorepo' },
        { label: 'Tailwind CSS v4 Setup', href: '#tailwind-setup' },
        { label: 'Importing Themes', href: '#importing-themes' },
      ]}
    >
      {/* 1. Quick Start */}
      <section id="quick-start" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p className="text-sm text-muted-foreground">
          Install the package via your package manager:
        </p>

        <div className="flex items-center justify-between rounded-xl border border-border bg-card p-3 font-mono text-xs">
          <span className="text-muted-foreground">
            <span className="text-primary mr-2">$</span>pnpm add lemmoui
          </span>
          <button
            onClick={() => copy('pnpm add lemmoui')}
            className="rounded-md p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === 'pnpm add lemmoui' ? <Check className="size-4 text-primary" /> : <Clipboard className="size-4" />}
          </button>
        </div>
      </section>

      {/* 2. Monorepo Workspace */}
      <section id="monorepo" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Monorepo Workspace Setup</h2>
        <p className="text-sm text-muted-foreground">
          In the Lemmo monorepo, the frontend project references <code className="font-mono text-foreground">lemmoui</code> as a local workspace dependency:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <div className="border-b border-white/10 pb-2 mb-3 text-[11px] text-zinc-400">frontend/package.json</div>
          <pre className="overflow-x-auto leading-6"><code>{`{
  "dependencies": {
    "lemmoui": "workspace:*",
    "react": "^19",
    "react-dom": "^19"
  }
}`}</code></pre>
        </div>
      </section>

      {/* 3. Tailwind CSS v4 Setup */}
      <section id="tailwind-setup" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tailwind CSS v4 Configuration</h2>
        <p className="text-sm text-muted-foreground">
          Import the core design tokens and utility bindings into your primary CSS file:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <div className="border-b border-white/10 pb-2 mb-3 text-[11px] text-zinc-400">src/index.css / globals.css</div>
          <pre className="overflow-x-auto leading-6"><code>{`@import "tailwindcss";
@import "lemmoui/styles.css";`}</code></pre>
        </div>
      </section>

      {/* 4. Importing Themes */}
      <section id="importing-themes" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Importing Swappable Themes</h2>
        <p className="text-sm text-muted-foreground">
          Import the theme stylesheets you want available in your application:
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <div className="border-b border-white/10 pb-2 mb-3 text-[11px] text-zinc-400">Import all themes or individual themes</div>
          <pre className="overflow-x-auto leading-6"><code>{`// Option A: Import all bundled themes
import 'lemmoui/themes'

// Option B: Import only specific themes
import 'lemmoui/themes/neon.css'
import 'lemmoui/themes/midnight.css'`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
