import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { contactChannels } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request IT support, schedule a consultation, or submit a ticket for troubleshooting, setups, migrations, or maintenance with Private IT Support.",
};

const CONTACT_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-[var(--surface-card)] px-4 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
        <div className="space-y-5 sm:space-y-6">
          <span className="badge-outline">Let's connect</span>
          <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Share what you need and I'll respond within one business day.
          </h1>
          <p className="text-base text-[var(--text-secondary)] sm:text-lg">
            Whether it's break/fix support, a new device rollout, a backup & security tune-up, a cloud migration, or questions about maintenance plans, include as much detail as you can. I'll follow up with next steps and a clear recommendation.
          </p>
        </div>
      </section>

      <Section label="Project intake" title="Tell me about your environment">
        <form
          className="grid gap-5 rounded-[var(--radius-lg)] border border-[var(--surface-outline)] bg-white p-5 shadow-sm sm:gap-6 sm:p-6"
          action={CONTACT_ENDPOINT}
          method="post"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-[var(--text-primary)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[var(--text-primary)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="team-size" className="text-sm font-semibold text-[var(--text-primary)]">
              Team size
            </label>
            <select
              id="team-size"
              name="teamSize"
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              defaultValue="1-5"
            >
              <option value="1-5">1-5</option>
              <option value="6-15">6-15</option>
              <option value="16-30">16-30</option>
              <option value="31+">31+</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-semibold text-[var(--text-primary)]">
              Location (for on-site visits)
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Brooklyn, NYC or Hoboken, NJ"
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="timeline" className="text-sm font-semibold text-[var(--text-primary)]">
              How urgent is this?
            </label>
            <select
              id="timeline"
              name="timeline"
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              defaultValue="asap"
            >
              <option value="asap">Critical (within 24 hours)</option>
              <option value="soon">Soon (next 3-7 days)</option>
              <option value="plan">Planning / discovery</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="details" className="text-sm font-semibold text-[var(--text-primary)]">
              What do you need help with?
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              className="rounded-[var(--radius-sm)] border border-[var(--surface-outline)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            />
          </div>
          <button type="submit" className={cn(buttonVariants(), "w-full justify-center sm:w-auto")}>
            Submit Request
          </button>
        </form>
      </Section>

      <Section label="Other ways to reach out" title="Prefer email or a ticket?">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <li
              key={channel.label}
              className="rounded-[var(--radius-md)] border border-[var(--surface-outline)] bg-[var(--surface-card)] p-5 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              <p className="font-heading text-base font-semibold text-[var(--text-primary)]">
                {channel.label}
              </p>
              <Link
                href={channel.href}
                className="mt-2 inline-flex text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
              >
                {channel.value}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
