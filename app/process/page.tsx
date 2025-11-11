import type { Metadata } from "next";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { processSteps } from "@/content/site";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Private IT Support listens, stabilises, protects, trains, and maintains your systems with a clear five-step approach.",
};

const phaseDeliverables = [
  {
    phase: "Listen & assess",
    items: [
      "Environment discovery call and asset inventory",
      "Network, device, and cloud workspace health checks",
      "Risk assessment with prioritised action list",
    ],
  },
  {
    phase: "Stabilise fast",
    items: [
      "Resolve critical tickets and recurring pain points",
      "Document configuration changes and quick wins",
      "Establish support channels and escalation paths",
    ],
  },
  {
    phase: "Protect & prevent",
    items: [
      "Deploy backups, endpoint protection, and patching",
      "Configure password managers and MFA policies",
      "Review data retention, compliance, and access control",
    ],
  },
  {
    phase: "Train & support",
    items: [
      "Create quick-reference guides and short Loom walkthroughs",
      "Hold team Q&A sessions for new tools or workflows",
      "Document playbooks so future fixes stay consistent",
    ],
  },
  {
    phase: "Maintain & improve",
    items: [
      "Provide ongoing remote + on-site support",
      "Deliver monthly or quarterly health reports",
      "Coordinate with vendors and manage upgrades",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
        <div className="space-y-5 sm:space-y-6">
          <span className="badge-outline">How support works</span>
          <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            A transparent roadmap from first call to ongoing care.
          </h1>
          <p className="text-base text-[var(--text-secondary)] sm:text-lg">
            Every client moves through the same five stages, ensuring urgent issues are handled quickly while long-term safeguards, training, and maintenance stay on schedule. You always know what's happening and what's next.
          </p>
        </div>
      </section>

      <Section label="Timeline" title="Five stages of every engagement">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex h-full flex-col gap-2 rounded-[var(--radius-md)] border border-transparent bg-[rgba(37,99,255,0.06)] p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-subtle)]">
                {step.step}
              </span>
              <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{step.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Deliverables" title="What we handle at each phase">
        <div className="grid gap-5 md:grid-cols-2">
          {phaseDeliverables.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-white p-5 shadow-sm sm:p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                {phase.phase}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="rounded-[var(--radius-lg)] border border-[rgba(37,99,255,0.25)] bg-[var(--accent-soft)] px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:text-left">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)]">
              Ready to start with an assessment?
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Share your current pain points and I'll outline the audit, timelines, and estimated investment in a follow-up Loom.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
            Book Your Free IT Health Check
          </Link>
        </div>
      </section>
    </div>
  );
}
