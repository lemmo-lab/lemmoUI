'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CircleHelp,
  Search,
  Sparkles,
} from 'lucide-react'
import { SiteHeader, SiteLogo } from '@/components/site-header'

export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  label: string
  items: NavItem[]
}

export const docsNav: NavSection[] = [
  {
    label: 'Architecture',
    items: [
      { name: 'Introduction', href: '/' },
      { name: 'Core Concept', href: '/docs/core-concept' },
      { name: 'Swappable Themes', href: '/docs/themes' },
      { name: 'Design Tokens', href: '/docs/tokens' },
    ],
  },
  {
    label: 'Foundation',
    items: [
      { name: 'Design System', href: '/design-system' },
      { name: 'Changelog', href: '/changelog' },
    ],
  },
  {
    label: 'Sample Components',
    items: [
      { name: 'Button', href: '/components/button' },
      { name: 'Card', href: '/components/card' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Alert', href: '/components/alert' },
    ],
  },
  {
    label: 'Integration',
    items: [
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Usage Guide', href: '/docs/usage' },
    ],
  },
]

export interface DocsShellProps {
  children: React.ReactNode
  breadcrumb?: string
  title?: string
  description?: string
  badge?: string
  prev?: { name: string; href: string }
  next?: { name: string; href: string }
  toc?: { label: string; href: string }[]
}

export function DocsShell({
  children,
  breadcrumb,
  title,
  description,
  badge,
  prev,
  next,
  toc = [],
}: DocsShellProps) {
  const pathname = usePathname()
  const [query, setQuery] = React.useState('')

  const filteredNav = React.useMemo(() => {
    if (!query) return docsNav
    const q = query.toLowerCase()
    return docsNav
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.name.toLowerCase().includes(q)),
      }))
      .filter((section) => section.items.length > 0)
  }, [query])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[230px_minmax(0,1fr)_220px]">
        {/* Left Sidebar */}
        <aside className="hidden border-r border-border px-5 py-8 lg:block">
          <div className="sticky top-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Documentation
            </p>
            <div className="flex flex-col gap-6">
              {filteredNav.map((section) => (
                <div key={section.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-primary text-primary-foreground font-medium shadow-xs'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          {item.name}
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center Content */}
        <main className="min-w-0 px-5 py-10 sm:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            {breadcrumb && (
              <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <span>Docs</span>
                <ChevronRight className="size-3" />
                <span>{breadcrumb}</span>
                {title && (
                  <>
                    <ChevronRight className="size-3" />
                    <span className="text-foreground">{title}</span>
                  </>
                )}
              </div>
            )}

            {/* Header */}
            {title && (
              <div className="mb-10">
                {badge && (
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                    <Sparkles className="size-3 text-primary" />
                    <span>{badge}</span>
                  </div>
                )}
                <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {title}
                </h1>
                {description && (
                  <p className="mt-4 text-base leading-7 text-muted-foreground max-w-2xl">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Main Children */}
            <div className="space-y-10">{children}</div>

            {/* Pagination Prev / Next */}
            {(prev || next) && (
              <nav
                aria-label="Pagination"
                className="mt-16 flex items-stretch justify-between gap-4 border-t border-border pt-8"
              >
                {prev ? (
                  <a
                    href={prev.href}
                    className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-muted/40 sm:max-w-[240px]"
                  >
                    <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                        Previous
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {prev.name}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div />
                )}

                {next ? (
                  <a
                    href={next.href}
                    className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-xl border border-border bg-card p-4 text-right transition-colors hover:border-primary/50 hover:bg-muted/40 sm:max-w-[240px]"
                  >
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                        Next
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {next.name}
                      </span>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <div />
                )}
              </nav>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden border-l border-border px-5 py-8 xl:block">
          <div className="sticky top-20">
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
              <Search className="size-3.5" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search docs..."
                className="min-w-0 bg-transparent outline-none placeholder:text-muted-foreground text-foreground text-xs"
              />
            </div>

            {toc.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  On this page
                </p>
                <div className="flex flex-col gap-2 border-l border-border pl-3 text-sm text-muted-foreground">
                  {toc.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl border border-border bg-card p-4">
              <CircleHelp className="mb-3 size-4 text-primary" />
              <p className="text-sm font-semibold">Lemmo Architecture</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Modular core library and pure token-driven swappable themes.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <SiteLogo />
            <span>— Lemmo UI Documentation</span>
          </div>
          <span>MIT License</span>
        </div>
      </footer>
    </div>
  )
}
