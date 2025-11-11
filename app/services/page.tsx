import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { faqs, popularPaths, processSteps, serviceOfferings } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IT Services & Pricing",
  description:
    "Explore break/fix support, device setups, backup and security essentials, cloud migrations, and maintenance plans tailored to solo businesses and small teams.",
};

const deliverables = [
  "Clear diagnostics, resolution notes, and prevention tips after every fix",
  "On-site coverage in NYC & the Tri-State area for hardware installs, cabling, and workspace setup",
  "Baseline cybersecurity: backups, antivirus, patching, secure passwords",
  "Cloud migrations and account management for Microsoft 365 and Google Workspace",
  "Recurring maintenance plans with simple reporting and priority response",
];

export default function ServicesPage() {
  const starterSession = popularPaths[0];
  const followOnPackages = popularPaths.slice(1);

  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
        <div className="space-y-6 text-center sm:text-left">
          <span className="badge-outline">Private IT support services</span>
          <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Service menu for solo businesses and small teams.
          </h1>
          <p className="text-base text-[var(--text-secondary)] sm:text-lg">
            Pick the level of involvement you need—from urgent break/fix help to ongoing maintenance. Every engagement starts with a quick health assessment so we know exactly what to prioritise.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
              Book Your Free IT Health Check
            </Link>
            <Link href="/process" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
              View the Process
            </Link>
          </div>
        </div>
      </section>

      <Section label="Low-risk intro" title="Starter Session: remote health check for first-time clients">
        <div className="flex flex-col gap-6 rounded-[var(--radius-lg)] border border-[rgba(37,99,255,0.35)] bg-[rgba(37,99,255,0.08)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="space-y-4 sm:max-w-2xl">
            <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
              {starterSession.name}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{starterSession.description}</p>
            <ul className="grid gap-2 text-sm text-[var(--text-secondary)] sm:grid-cols-3 sm:gap-3">
              {starterSession.includes.map((item) => (
                <li key={item} className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-[var(--text-primary)]">Best for: {starterSession.idealFor}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="rounded-[var(--radius-md)] border border-[rgba(37,99,255,0.35)] bg-white px-4 py-3 text-center shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-dark)]">
                Intro rate
              </span>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">{starterSession.pricing}</p>
            </div>
            <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
              Book Your Free IT Health Check
            </Link>
            <p className="max-w-xs text-xs text-[var(--text-subtle)]">
              We’ll use the Starter Session to resolve what we can live, then send a 3-step action plan with next-step pricing within 24 hours.
            </p>
          </div>
        </div>
      </Section>

      <Section label="Services" title="What we can handle for you">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {serviceOfferings.map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] sm:p-6"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-subtle)]">
                  {service.headline}
                </p>
                <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">
                  {service.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{service.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>
                    <span className="font-semibold text-[var(--text-primary)]">Ideal for: </span>
                    {service.typicalClients}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>
                    <span className="font-semibold text-[var(--text-primary)]">Delivery: </span>
                    {service.deliveryModel}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>
                    <span className="font-semibold text-[var(--text-primary)]">Pricing guide: </span>
                    {service.pricing}
                  </span>
                </li>
              </ul>
              <div className="mt-auto pt-4">
                <Link href="/contact" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
                  Book Your Free IT Health Check
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Need more support?" title="Next-step packages once you’ve tried the Starter Session">
        <div className="grid gap-6 lg:grid-cols-2">
          {followOnPackages.map((path) => (
            <article
              key={path.name}
              className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">{path.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{path.description}</p>
              <div className="rounded-[var(--radius-sm)] border border-[rgba(37,99,255,0.35)] bg-[rgba(37,99,255,0.08)] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-dark)]">Typical</p>
                <p className="text-base font-semibold text-[var(--text-primary)]">{path.pricing}</p>
              </div>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {path.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[var(--text-primary)]">Best for: {path.idealFor}</p>
              <div className="mt-auto pt-2">
                <Link href="/contact" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
                  Book Your Free IT Health Check
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Every engagement includes" title="What you can expect">
        <ul className="grid gap-3 sm:grid-cols-2">
          {deliverables.map((item) => (
            <li
              key={item}
              className="rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-white px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Process" title="From first request to ongoing care">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-5">
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

      <Section label="FAQ" title="Common questions before we get started">
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="rounded-[var(--radius-lg)] border border-[rgba(37,99,255,0.25)] bg-[var(--accent-soft)] px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:text-left">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)]">
              Not sure which mix of services is right?
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Share your current setup and support needs. You'll get a tailored recommendation, timeline, and estimated investment within 24 hours.
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
