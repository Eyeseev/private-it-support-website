 "use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--surface-outline)] bg-[rgba(249,249,249,0.92)] backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold text-[var(--text-primary)]"
          onClick={closeMenu}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">IT</span>
          <span>Private IT Support</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--text-secondary)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={`${buttonVariants()} hidden text-sm md:inline-flex`}>
          Book Your Free IT Health Check
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--surface-outline)] bg-white px-3 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {isMenuOpen ? (
              <>
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "max-h-[60vh] border-t border-[var(--surface-outline)] bg-[rgba(249,249,249,0.96)] shadow-lg" : "max-h-0 overflow-hidden border-t border-transparent",
        )}
        id="mobile-nav"
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${buttonVariants()} justify-center text-sm`}
            onClick={closeMenu}
          >
            Book Your Free IT Health Check
          </Link>
        </nav>
      </div>
    </header>
  );
}
