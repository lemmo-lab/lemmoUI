'use client'

import * as React from 'react'
import { Check, Code2, Layers3, Palette, Sparkles, Zap } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LemmoMark } from '@/components/icons'
import { ThemeSwitcher, themes } from '@/components/theme-switcher'
import { useTheme } from '@/components/theme-provider'

export default function ThemesPage() {
  const { theme, isDark } = useTheme()

  return (
    <DocsShell
      breadcrumb="Architecture"
      title="Swappable Themes"
      description="The engine powering zero-JS theme switching, custom skins, and dynamic cascading."
      badge="Theme Engine"
      prev={{ name: 'Core Concept', href: '/docs/core-concept' }}
      next={{ name: 'Design Tokens', href: '/docs/tokens' }}
      toc={[
        { label: 'Interactive Sandbox', href: '#sandbox' },
        { label: 'Bundled Themes', href: '#bundled-themes' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Custom Themes', href: '#custom-themes' },
      ]}
    >
      {/* 1. Interactive Sandbox */}
      <section id="sandbox" className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Interactive Playground</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Select any theme below to observe instant live re-skinning across all components.
          </p>
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-muted/25 p-5 sm:p-8">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div className="flex items-center gap-2">
              <Palette className="size-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Active Theme:</span>
              <Badge variant="default" className="font-mono uppercase tracking-wider">
                {theme}
              </Badge>
              <Badge variant="outline" className="text-[11px]">
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>CSS Scope:</span>
              <code className="rounded bg-background px-2 py-0.5 font-mono text-foreground border border-border text-[11px]">
                [data-theme=&quot;{theme}&quot;]{isDark ? '.dark' : ''}
              </code>
            </div>
          </div>

          {/* Theme Switcher Cards */}
          <ThemeSwitcher variant="expanded" />

          {/* Live Components Grid */}
          <div className="grid gap-6 md:grid-cols-2 pt-2">
            {/* Buttons & Badges */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Interactive Buttons</CardTitle>
                  <Badge variant="secondary">Sample</Badge>
                </div>
                <CardDescription>
                  Buttons adapt to the active primary hue, hover states, and radius token.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="default">Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">Badges</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 text-xs text-muted-foreground">
                <span>Token: <code className="font-mono text-foreground">bg-primary text-primary-foreground</code></span>
              </CardFooter>
            </Card>

            {/* Brand Card */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg border border-border bg-background shadow-xs">
                    <LemmoMark className="size-6 text-primary transition-colors" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Lemmo Studio</CardTitle>
                    <CardDescription>Visual Generation Canvas</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-6">
                  Autonomous UI generation workspace synchronized with design system tokens.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-[11px]">Next.js 16</Badge>
                  <Badge variant="outline" className="text-[11px]">Tailwind v4</Badge>
                  <Badge variant="outline" className="text-[11px]">Swappable</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-border/50">
                <span className="text-xs text-muted-foreground">Status: Active</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm" variant="default">Launch</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Alert */}
          <Alert>
            <Check className="size-4 text-primary" />
            <div>
              <AlertTitle>Theme Synchronized</AlertTitle>
              <AlertDescription>
                Tokens dynamically reflect <code className="font-mono text-foreground">theme-{theme}.css</code>.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </section>

      {/* 2. Bundled Themes */}
      <section id="bundled-themes" className="space-y-4 pt-6">
        <h2 className="text-2xl font-semibold tracking-tight">6 Bundled Production Themes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <span
                className="size-4 rounded-full border border-black/20 shrink-0 mt-0.5"
                style={{ backgroundColor: t.accentColor }}
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.description}</p>
                <code className="mt-2 inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-foreground">
                  lemmoui/themes/{t.id}.css
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="space-y-4 pt-6">
        <h2 className="text-2xl font-semibold tracking-tight">Zero-JS Re-theming Mechanism</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Themes in Lemmo UI are pure CSS stylesheets targeting the HTML attribute <code className="font-mono text-foreground">data-theme</code>. When you change <code className="font-mono text-foreground">data-theme=&quot;neon&quot;</code> to <code className="font-mono text-foreground">data-theme=&quot;midnight&quot;</code>:
        </p>
        <ul className="space-y-2 text-xs leading-6 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Zap className="size-4 text-primary shrink-0 mt-0.5" />
            <span><strong>Zero JavaScript re-renders:</strong> The browser CSS engine natively cascades the new CSS variable values across all DOM elements instantly.</span>
          </li>
          <li className="flex items-start gap-2">
            <Zap className="size-4 text-primary shrink-0 mt-0.5" />
            <span><strong>Nested Themability:</strong> You can apply a theme globally on <code className="font-mono">&lt;html data-theme=&quot;neon&quot;&gt;</code>, or scope a different theme to a specific card or section: <code className="font-mono">&lt;div data-theme=&quot;minimal&quot;&gt;</code>.</span>
          </li>
        </ul>
      </section>

      {/* 4. Custom Themes */}
      <section id="custom-themes" className="space-y-4 pt-6">
        <h2 className="text-2xl font-semibold tracking-tight">Creating a Custom Theme</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Anyone can create a new theme by defining values for the token contract in a CSS file:
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-[#0e1011] p-4 text-xs font-mono text-zinc-300">
          <pre className="overflow-x-auto leading-6"><code>{`[data-theme="custom-sunset"] {
  --background: #120c18;
  --foreground: #f8f4fc;
  --card: #1c1424;
  --card-foreground: #f8f4fc;
  --primary: #ff6b4a;
  --primary-foreground: #ffffff;
  --secondary: #2c1b3a;
  --secondary-foreground: #ff6b4a;
  --border: rgba(255, 107, 74, 0.15);
  --radius: 0.75rem;
}`}</code></pre>
        </div>
      </section>
    </DocsShell>
  )
}
