'use client'

import * as React from 'react'
import { Check, ChevronRight, Copy, ShieldCheck, Sliders, Sparkles } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { useTheme } from '@/components/theme-provider'
import { Badge } from '@/components/ui/badge'

const tokenRows = [
  { name: '--background', role: 'Main canvas page background', pairing: '--foreground', example: '#131517' },
  { name: '--foreground', role: 'Main text color on page background', pairing: '--background', example: '#E1E1E3' },
  { name: '--card', role: 'Elevated card and container surface', pairing: '--card-foreground', example: '#1C1E20' },
  { name: '--card-foreground', role: 'Text color on card surface', pairing: '--card', example: '#E1E1E3' },
  { name: '--popover', role: 'Dropdown, popover, and dialog surface', pairing: '--popover-foreground', example: '#23262A' },
  { name: '--primary', role: 'Primary brand call-to-action color', pairing: '--primary-foreground', example: '#D1FE17' },
  { name: '--primary-foreground', role: 'Text / icon color on primary action', pairing: '--primary', example: '#131517' },
  { name: '--secondary', role: 'Subtle secondary action surface', pairing: '--secondary-foreground', example: '#23262A' },
  { name: '--muted', role: 'De-emphasized background surfaces', pairing: '--muted-foreground', example: '#18191C' },
  { name: '--muted-foreground', role: 'Faint caption and secondary label text', pairing: '--muted', example: '#898A8B' },
  { name: '--destructive', role: 'Danger, error, and critical actions', pairing: '--destructive-foreground', example: '#FF005B' },
  { name: '--border', role: 'Structural borders and card dividers', pairing: 'Calibrated', example: 'rgba(255,255,255,0.1)' },
  { name: '--ring', role: 'Focus-visible accessibility indicator', pairing: 'Interactive', example: '#D1FE17' },
  { name: '--radius', role: 'Base metric for corner roundness', pairing: 'Scales to sm/md/lg', example: '0.75rem' },
]

export default function TokensPage() {
  const { theme } = useTheme()
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null)

  const copy = (val: string) => {
    navigator.clipboard?.writeText(val)
    setCopiedToken(val)
    setTimeout(() => setCopiedToken(null), 1500)
  }

  return (
    <DocsShell
      breadcrumb="Architecture"
      title="Design Tokens"
      description="The semantic token contract bridging component logic and swappable visual themes."
      badge="Token Contract"
      prev={{ name: 'Swappable Themes', href: '/docs/themes' }}
      next={{ name: 'Button', href: '/components/button' }}
      toc={[
        { label: 'The Pairing Rule', href: '#pairing-rule' },
        { label: 'Token Specification Table', href: '#token-table' },
        { label: 'Live Active Inspector', href: '#inspector' },
        { label: 'Design System Specs', href: '#specs' },
      ]}
    >
      {/* 1. Pairing Rule */}
      <section id="pairing-rule" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Mandatory Pairing Rule</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Accessibility contrast issues happen when a component sets a background color without explicitly pairing a corresponding foreground color.
        </p>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm">
          <div className="flex items-center gap-2 font-semibold text-primary">
            <ShieldCheck className="size-4" />
            <span>Pairing Contract Requirement</span>
          </div>
          <p className="mt-2 text-xs leading-6 text-foreground">
            Every background token in Lemmo UI has a mandatory paired foreground token:
            <code className="font-mono text-primary ml-1">--primary</code> is paired with <code className="font-mono text-primary">--primary-foreground</code>,
            and <code className="font-mono text-primary">--card</code> is paired with <code className="font-mono text-primary">--card-foreground</code>.
            A theme author must always define both in tandem.
          </p>
        </div>
      </section>

      {/* 2. Token Table */}
      <section id="token-table" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Semantic Token Specification</h2>
        <p className="text-sm text-muted-foreground">
          Click on any token to copy its CSS variable name.
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
          <div className="border-b border-border bg-muted/40 px-4 py-3 text-xs font-semibold text-foreground grid grid-cols-12">
            <span className="col-span-4">Token Name</span>
            <span className="col-span-4">Semantic Role</span>
            <span className="col-span-4">Pairing Rule</span>
          </div>
          <div className="divide-y divide-border/60 text-xs font-mono">
            {tokenRows.map((t) => (
              <button
                key={t.name}
                onClick={() => copy(`var(${t.name})`)}
                className="w-full text-left grid grid-cols-12 px-4 py-3 items-center transition-colors hover:bg-muted/40 group"
              >
                <span className="col-span-4 text-primary font-semibold flex items-center gap-1.5">
                  <span>{t.name}</span>
                  {copiedToken === `var(${t.name})` && <Check className="size-3 text-emerald-400" />}
                </span>
                <span className="col-span-4 text-muted-foreground font-sans text-xs">{t.role}</span>
                <span className="col-span-4 text-foreground font-sans text-xs">
                  <code className="text-muted-foreground">{t.pairing}</code>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Active Inspector */}
      <section id="inspector" className="space-y-4 pt-4">
        <h2 className="text-2xl font-semibold tracking-tight">Live Active Token Inspector</h2>
        <p className="text-sm text-muted-foreground">
          Showing real-time token properties for the current theme (<strong className="text-foreground uppercase">{theme}</strong>).
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono text-xs">
          <div className="rounded-xl border border-border bg-card p-4">
            <span className="text-muted-foreground text-[11px] block">--primary</span>
            <div className="mt-2 flex items-center gap-2">
              <span className="size-4 rounded-full border border-black/20 bg-primary shrink-0" />
              <span className="text-foreground text-xs font-semibold">Active CTA</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <span className="text-muted-foreground text-[11px] block">--card</span>
            <div className="mt-2 flex items-center gap-2">
              <span className="size-4 rounded-full border border-black/20 bg-card shrink-0" />
              <span className="text-foreground text-xs font-semibold">Surface</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <span className="text-muted-foreground text-[11px] block">--radius</span>
            <span className="mt-2 block text-foreground text-xs font-semibold">
              {theme === 'minimal' ? '0rem (sharp)' : theme === 'neon' ? '0.75rem (12px)' : '0.5rem (8px)'}
            </span>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <span className="text-muted-foreground text-[11px] block">--border</span>
            <div className="mt-2 flex items-center gap-2">
              <span className="size-4 rounded-full border border-border bg-border shrink-0" />
              <span className="text-foreground text-xs font-semibold">Calibrated</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Design System Specs */}
      <section id="specs" className="space-y-4 pt-4">
        <div className="flex items-center justify-between rounded-xl border border-border bg-card p-5">
          <div>
            <h3 className="text-base font-semibold text-foreground">Lemmo Official Design System</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Explore the complete palette, surfaces, typography scales, and shadows in our visual hub.
            </p>
          </div>
          <a
            href="/design-system"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
          >
            <span>Open Design System</span>
            <ChevronRight className="size-3.5" />
          </a>
        </div>
      </section>
    </DocsShell>
  )
}
