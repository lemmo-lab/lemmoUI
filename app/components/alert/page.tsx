'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Copy, Info, Terminal } from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'
import { ComponentPagination } from '@/components/component-pagination'

const installCommand = 'pnpm dlx shadcn@latest add alert'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

function AlertCard({ variant = 'success' }: { variant?: 'success' | 'info' }) {
  const isSuccess = variant === 'success'
  return (
    <Alert className="flex gap-3 items-start">
      <div className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-foreground text-background">
        {isSuccess ? <Check className="size-3" strokeWidth={3} /> : <Info className="size-3" strokeWidth={3} />}
      </div>
      <div>
        <AlertTitle>{isSuccess ? 'Everything looks good.' : 'Heads up.'}</AlertTitle>
        <AlertDescription className="mt-1">
          {isSuccess ? 'Your project is ready to be shipped.' : 'You can review this action before continuing.'}
        </AlertDescription>
      </div>
    </Alert>
  )
}

export default function AlertPage() {
  const [copied, setCopied] = useState(false)

  const copyCommand = async () => {
    await navigator.clipboard?.writeText(installCommand)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Back to docs
        </a>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Components / Alert</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Alert</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">Displays a callout for user attention. Use it to communicate status, guidance, or important context without interrupting the user&apos;s flow.</p>
        </div>

        <section className="mt-12 border-t border-border pt-8">
          <p className="mb-4 text-sm font-medium">Preview</p>
          <div className="grid gap-3 rounded-xl border border-border bg-muted/30 p-5 sm:grid-cols-2 sm:p-8">
            <AlertCard />
            <AlertCard variant="info" />
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-8">
          <p className="mb-3 text-sm font-medium">Installation</p>
          <p className="mb-5 text-sm leading-6 text-muted-foreground">Install the component into your project with the CLI.</p>
          <button onClick={copyCommand} className="flex w-full items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3 text-left font-mono text-xs text-muted-foreground hover:bg-accent" aria-label="Copy installation command">
            <span><span className="mr-2">$</span>{installCommand}</span>
            {copied ? <Check className="size-4 text-foreground" /> : <Copy className="size-4" />}
          </button>
        </section>

        <section className="mt-12 border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <Terminal className="size-4 text-muted-foreground" />
            <p className="text-sm font-medium">Usage</p>
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border border-border bg-[#101010] text-[13px] text-zinc-300">
            <div className="border-b border-white/10 px-4 py-2.5 text-[11px] text-zinc-500">app/page.tsx</div>
            <pre className="overflow-x-auto p-4 leading-6"><code>{`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function StatusAlert() {
  return (
    <Alert>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your project is ready.</AlertDescription>
    </Alert>
  )
}`}</code></pre>
          </div>
        </section>
      </div>
      <ComponentPagination />
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="/" className="text-foreground"><SiteLogo /></a>
          <span>Open source UI for thoughtful interfaces.</span>
          <span>MIT License</span>
        </div>
      </footer>
    </div>
  )
}
