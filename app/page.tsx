import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { hero, heroTrustSignals, popularPaths, processSteps, serviceOfferings } from "@/content/site";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(37,99,255,0.12),_transparent_70%)] md:block" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="flex max-w-xl flex-col gap-4 sm:gap-5">
            <span className="badge-outline">{hero.badge}</span>
            <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-base text-[var(--text-secondary)] sm:text-lg">{hero.subheadline}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
              <Link href={hero.ctaPrimary.href} className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
                {hero.ctaPrimary.label}
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent)] sm:justify-start"
              >
                {hero.ctaSecondary.label} →
              </Link>
            </div>
            <p className="max-w-xl text-sm text-[var(--text-secondary)] sm:text-base">{hero.valueDetail}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {heroTrustSignals.credentials.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--surface-outline)] bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-subtle)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="card-surface relative overflow-hidden">
              <Image
                src="/hero-abstract.svg"
                alt="Abstract illustration showing stable IT systems"
                width={560}
                height={420}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="process"
        label="Process"
        title="Your roadmap from first call to steady systems"
        contentClassName="mt-6 sm:mt-8"
        className="mt-16 sm:mt-20"
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[720px] gap-4 sm:min-w-full sm:grid sm:grid-cols-5 sm:gap-6">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="group flex h-full min-w-[200px] flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-soft)] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-dark)]">
                    {step.step}
                  </span>
                  <Image src={step.icon} alt={step.iconAlt} width={40} height={40} className="h-10 w-10" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)]">{step.title}</h4>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="services"
        label="Services"
        title="Beginner-friendly IT support you can mix and match"
        contentClassName="mt-6 sm:mt-8"
        className="mt-16 sm:mt-20"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:gap-y-10">
          {serviceOfferings.map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-[var(--surface-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] sm:p-7"
            >
              <div className="space-y-2">
                <span className="badge-outline text-xs uppercase tracking-[0.28em] text-[var(--text-subtle)]">
                  {service.headline}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                  {service.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{service.description}</p>
              <div className="mt-auto pt-4">
                <Link
                  href="/services"
                  className="inline-flex text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
                >
                  View full service details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        label="Popular paths"
        title="Choose quick fixes, projects, or ongoing care"
        contentClassName="mt-6 sm:mt-8"
        className="mt-20 md:mt-24"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:gap-y-10">
          {popularPaths.map((path) => (
            <article
              key={path.name}
              className="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] md:p-7"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">
                  {path.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{path.description}</p>
                <div className="rounded-[var(--radius-sm)] border border-[rgba(37,99,255,0.35)] bg-[rgba(37,99,255,0.08)] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-dark)]">
                    Investment
                  </p>
                  <p className="text-base font-semibold text-[var(--text-primary)]">{path.pricing}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {path.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">Best for: {path.idealFor}</p>
              <div className="mt-auto pt-4">
                <Link href="/contact" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
                  Book Your Free IT Health Check
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)]">Need a custom bundle?</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Mix and match services into a retainer that covers strategy, emergency support, and regular check-ins.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
            Book Your Free IT Health Check
          </Link>
        </div>
      </Section>

      <Section
        id="about-preview"
        label="About"
        title="Hands-on IT partner for modern, lean teams"
        contentClassName="mt-6 sm:mt-8"
        className="mt-20"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center lg:gap-12">
          <div className="space-y-4">
            <span className="badge-outline">Hi, I’m Vic</span>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              I’m the solo tech partner behind Private IT Support. You’ll work directly with me—an ex-enterprise engineer who now helps therapy practices, creative studios, and boutique consultancies keep their devices calm and their data protected.
            </p>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              Recent wins include moving a three-person therapy team onto encrypted backups, refreshing twelve iMacs for a Brooklyn studio over a single weekend, and wiring a pop-up retail space with secure Wi-Fi before opening day.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white p-4 text-sm text-[var(--text-secondary)]">
                5+ years supporting finance, healthcare, and creative teams
              </li>
              <li className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white p-4 text-sm text-[var(--text-secondary)]">
                CompTIA A+ & Google IT Support certified
              </li>
              <li className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white p-4 text-sm text-[var(--text-secondary)]">
                Friendly, plain-language support via remote sessions or on-site in NYC & the Tri-State area
              </li>
              <li className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white p-4 text-sm text-[var(--text-secondary)]">
                Available for recurring care or one-off projects across the U.S.
              </li>
            </ul>
            <Link href="/about" className="inline-flex text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]">
              Learn more about the approach →
            </Link>
          </div>
          <div className="card-surface relative overflow-hidden">
            <Image
              src="/vic-headshot.svg"
              alt="Headshot of Vic Rodriguez, founder of Private IT Support"
              width={480}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <section className="mt-20 rounded-[var(--radius-lg)] border border-[rgba(37,99,255,0.25)] bg-[var(--accent-soft)] px-6 py-8 text-center shadow-[var(--shadow-soft)] sm:px-8 sm:text-left lg:px-12 lg:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-semibold text-[var(--text-primary)]">
              Ready for reliable IT without hiring in-house?
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Book a consultation to review your setup, urgent needs, and the right support plan. You'll receive an action list within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
              Book Your Free IT Health Check
            </Link>
            <Link href="/services" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
              Explore Services & Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
