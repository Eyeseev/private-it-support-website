import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { portfolioItems } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Browse Private IT Support client wins, from emergency recovery to managed care rollouts for small businesses and entrepreneurs.",
};

const upcoming = [
  "Coaching collective security hardening",
  "Retail showroom network upgrade",
  "Founder-led media company managed care onboarding",
];

export default function PortfolioPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
        <div className="space-y-5 sm:space-y-6">
          <span className="badge-outline">Client stories</span>
          <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            IT partnerships that keep lean teams moving.
          </h1>
          <p className="text-base text-[var(--text-secondary)] sm:text-lg">
            Many engagements involve sensitive workflows. Highlight reels are anonymised, with deeper walkthroughs available once we talk through your needs.
          </p>
        </div>
      </section>

      <Section label="Recent wins" title="Snapshots of support in action">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-white p-5 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-subtle)]">
                Extended summary available on request
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section label="In progress" title="Currently supporting">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((item) => (
            <li
              key={item}
              className="rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-3 text-sm text-[var(--text-secondary)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <section className="rounded-[var(--radius-lg)] border border-[rgba(37,99,255,0.25)] bg-[var(--accent-soft)] px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:text-left">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)]">
              Want to hear a relevant story?
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              During our intro call I can share anonymised Looms or reports that mirror your current challenges.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
            Book a Reference Call
          </Link>
        </div>
      </section>
    </div>
  );
}
