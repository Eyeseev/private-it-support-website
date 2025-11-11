import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Private IT Support helps small businesses and entrepreneurs with responsive remote support, on-site visits, and proactive care plans.",
};

const credentials = [
  "CompTIA A+ and Google IT Support certified",
  "5+ years supporting finance, healthcare, and creative teams",
  "3,000+ support tickets resolved for teams of 3–30",
  "Remote across the U.S. with on-site in NYC & the Tri-State area",
];

const principles = [
  {
    title: "People-first troubleshooting",
    description:
      "Plain-language updates and screen-share walkthroughs ensure every client understands what changed and why.",
  },
  {
    title: "Proactive maintenance",
    description:
      "Automations, monitoring, and documentation reduce downtime and keep teams prepared for growth without surprise jargon or fees.",
  },
  {
    title: "Trusted partnerships",
    description:
      "From vendor coordination to staff training, I stay embedded as your go-to IT contact, not a one-off fix.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <span className="badge-outline">Hi, I’m Vic</span>
            <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Your calm, plain-language IT partner when tech gets loud.
            </h1>
            <p className="text-base text-[var(--text-secondary)] sm:text-lg">
              I left enterprise IT to build Private IT Support because smaller teams deserve the same reliable help—without tickets disappearing into a queue. Working directly with therapists, interior designers, non-profits, and boutique agencies means I rewrite jargon into clear action, and I’m the one picking up the phone when something breaks.
            </p>
            <p className="text-base text-[var(--text-secondary)] sm:text-lg">
              Recent projects include migrating a three-person therapy practice onto encrypted backups and HIPAA-friendly tools, refreshing twelve workstations and secure Wi-Fi for a Brooklyn creative studio over one weekend, and coordinating after-hours cloud cutovers for a remote consulting duo so they never missed a client call.
            </p>
            <p className="text-base text-[var(--text-secondary)] sm:text-lg">
              Expect screen-shares with live explanations, detailed handoffs, and a calm voice that keeps your team confident. I work remotely across the U.S. and travel on-site throughout NYC & the Tri-State area for installs, cabling, and anything that needs two hands.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-[var(--text-secondary)] sm:gap-3">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-white px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/services" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
                Review Support Plans
              </Link>
              <Link href="/contact" className={cn(buttonVariants("secondary"), "w-full justify-center sm:w-auto")}>
                Book Your Free IT Health Check
              </Link>
            </div>
          </div>
          <div className="card-surface relative overflow-hidden">
            <Image
              src="/vic-headshot.svg"
              alt="Headshot of Vic Rodriguez providing on-site IT support"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section label="Principles" title="What you can expect on every ticket and project">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                {principle.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Timeline" title="Experience that covers emergencies and long-term roadmaps">
        <ol className="space-y-4 border-l border-[var(--surface-outline)] pl-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:pl-6">
          <li>
            <span className="font-heading text-sm font-semibold text-[var(--text-primary)]">2013–2017</span>
            <p>Enterprise IT support for finance and healthcare teams managing complex rollouts, security audits, and compliance-driven projects.</p>
          </li>
          <li>
            <span className="font-heading text-sm font-semibold text-[var(--text-primary)]">2017–2021</span>
            <p>Introduced automation, device management, and help desk systems for agencies and internal product teams.</p>
          </li>
          <li>
            <span className="font-heading text-sm font-semibold text-[var(--text-primary)]">2021–Present</span>
            <p>Running Private IT Support: providing break/fix troubleshooting, device onboarding, cloud migrations, backup/security tune-ups, and maintenance plans for creators, therapists, and boutique firms across the U.S.</p>
          </li>
        </ol>
      </Section>

      <Section label="Next step" title="Let's prepare your team for what's next">
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Whether you need emergency troubleshooting, help setting up new devices, or a roadmap for backups and cloud tools, I'll provide clear recommendations and pricing before any work begins.
          </p>
          <p>
            Share your current stack and challenges. I'll respond with a short Loom outlining next steps.
          </p>
          <Link href="/contact" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
            Book Your Free IT Health Check
          </Link>
        </div>
      </Section>
    </div>
  );
}
