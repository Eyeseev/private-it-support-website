import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({ id, label, title, children, className, contentClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[rgba(255,255,255,0.88)] px-5 py-14 shadow-[var(--shadow-soft)] transition sm:px-8 sm:py-16 lg:px-12 lg:py-20",
        className,
      )}
    >
      <header className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-subtle)]">
          <span className="h-px w-8 bg-[var(--accent)]/50" aria-hidden />
          {label}
        </div>
        <h2 className="max-w-3xl text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl lg:text-4xl">{title}</h2>
      </header>
      <div className={cn("mt-8 sm:mt-10", contentClassName)}>{children}</div>
    </section>
  );
}
