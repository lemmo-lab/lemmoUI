import { ArrowLeft, ArrowRight } from 'lucide-react'

export function ComponentPagination() {
  return (
    <nav aria-label="Component navigation" className="mx-auto flex max-w-5xl items-stretch justify-between gap-4 border-t border-border px-5 py-8 sm:px-8">
      <a href="/components/accordion" className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/40 hover:bg-accent sm:max-w-[220px]">
        <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
        <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Previous</span><span className="block truncate text-sm font-medium">Accordion</span></span>
      </a>
      <a href="/components/alert-dialog" className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-lg border border-border px-4 py-3 text-right transition-colors hover:border-foreground/40 hover:bg-accent sm:max-w-[220px]">
        <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Next</span><span className="block truncate text-sm font-medium">Alert Dialog</span></span>
        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </a>
    </nav>
  )
}
