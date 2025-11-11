import Link from "next/link";
import { contactChannels } from "@/content/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[var(--surface-outline)] bg-[rgba(249,249,249,0.9)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 text-sm text-[var(--text-secondary)] sm:gap-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">
            Private IT Support
          </h3>
          <p>
            Modern websites, streamlined systems, and ongoing support for creators and business owners who want to ship faster.
          </p>
          <p className="text-xs text-[var(--text-subtle)]">
            © {currentYear} Private IT Support. All rights reserved. Please reach out if you'd like to reuse this content.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-subtle)]">
            Connect
          </h4>
          <ul className="space-y-2">
            {contactChannels.map((channel) => (
              <li key={channel.label} className="flex items-center justify-between">
                <span>{channel.label}</span>
                <Link
                  href={channel.href}
                  className="font-medium text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
                >
                  {channel.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
