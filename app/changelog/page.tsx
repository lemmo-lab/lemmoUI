'use client'

import { ArrowLeft, Calendar, CheckCircle2, ChevronRight, GitCommit, Sparkles, Tag, Zap } from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const releases = [
  {
    version: 'v0.1.0',
    date: 'September 2026',
    tag: 'Latest Milestone',
    badgeVariant: 'default' as const,
    title: 'Core Architecture & Swappable Themes Engine',
    description:
      'The foundational release of Lemmo UI. Decouples the component library core from visual styling, integrates the full Lemmo Design System, and introduces zero-JS swappable themes.',
    sections: [
      {
        heading: '🎨 Full Lemmo Design System Integration',
        items: [
          'Direct integration of official Lemmo Design System tokens: colors, gradients, typography, spacing, radius, elevation, strokes, and motion.',
          'Official Lemmo Brand theme (Neon) perfectly aligned with #131517 page canvas, #1C1E20 cards, #D1FE17 Electric Lime, and brand gloss inset shadows.',
          'Paired contrast tokens ensuring full accessibility in both dark and light modes.',
        ],
      },
      {
        heading: '⚡ Swappable Themes Engine',
        items: [
          '6 production-grade theme skins: Lemmo Neon (Flagship Brand), Midnight Slate (Developer SaaS), Emerald (Clean Green Tech), Cyberpunk (Synthwave), Minimal (Brutalist Monochrome), and Neutral (Standard Slate).',
          'CSS Custom Properties architecture allowing instant live theme swapping via data-theme without runtime JS calculations.',
          'Built-in ThemeProvider and interactive ThemeSwitcher with localStorage persistence.',
        ],
      },
      {
        heading: '🧩 Token-Driven Baseline Primitives',
        items: [
          'Button: Supports default, secondary, outline, destructive, ghost variants, and proportional sizes (xs, sm, default, lg, icon).',
          'Card: Modular CardHeader, CardTitle, CardDescription, CardContent, and CardFooter consuming paired card tokens.',
          'Badge: Semantic status badges (default, secondary, destructive, outline).',
          'Alert: Callout notifications with accessible roles and responsive layouts.',
          'LemmoMark: Adaptive brand SVG marks that reflect currentColor and --primary.',
        ],
      },
      {
        heading: '📦 Package Exports & Monorepo Architecture',
        items: [
          'Configured package.json with clean module, types, and subpath exports (. and ./themes/*).',
          'Ready for direct consumption by frontend workspace via workspace:* or relative imports.',
        ],
      },
    ],
  },
  {
    version: 'v0.2.0',
    date: 'Upcoming Roadmap',
    tag: 'Next Phase',
    badgeVariant: 'outline' as const,
    title: 'Frontend Workspace Extraction & Component Archive',
    description:
      'Phase 2 will link the frontend application to lemmoui, purge local duplicated styles from frontend, and migrate essential layout patterns.',
    sections: [
      {
        heading: '🚀 Planned Deliverables',
        items: [
          'Connect frontend to lemmoui workspace package.',
          'Extract and standardize form primitives (Input, Textarea, Select, Checkbox).',
          'Implement layout blocks (AppShell, Sidebar, Topbar, Dialog/Modal).',
          'Sync Figma tokens directly via automated tokens script.',
        ],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-16">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <a href="/" className="hover:text-foreground">Home</a>
          <ChevronRight className="size-3" />
          <span className="text-foreground">Changelog</span>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            <span>Release History & Architecture Notes</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-2xl">
            Stay updated with changes, architectural evolutions, design tokens releases, and component milestones across Lemmo UI.
          </p>
        </div>

        {/* Releases Timeline */}
        <div className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
          {releases.map((rel) => (
            <div key={rel.version} className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 grid size-6 place-items-center rounded-full border border-border bg-card text-primary shadow-xs">
                <GitCommit className="size-3.5" />
              </div>

              {/* Version & Date */}
              <div className="mb-3 flex flex-wrap items-center gap-2.5">
                <span className="text-lg font-bold font-mono tracking-tight text-foreground">{rel.version}</span>
                <Badge variant={rel.badgeVariant} className="text-[11px]">
                  {rel.tag}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  <span>{rel.date}</span>
                </div>
              </div>

              {/* Release Card */}
              <Card className="border-border/80 bg-card/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">{rel.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">{rel.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 pt-2">
                  {rel.sections.map((sec) => (
                    <div key={sec.heading} className="space-y-2.5">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span>{sec.heading}</span>
                      </h4>
                      <ul className="space-y-2 text-xs leading-5 text-muted-foreground">
                        {sec.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer Navigation CTA */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8 text-sm">
          <a href="/design-system" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Explore Design System
          </a>
          <a href="/#themes" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Test Themes Playground <ChevronRight className="size-4" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <SiteLogo />
            <span>— Lemmo UI Changelog</span>
          </div>
          <span>MIT License</span>
        </div>
      </footer>
    </div>
  )
}
