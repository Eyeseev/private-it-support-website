import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://privateitsupport.com";
const siteTitle = "Private IT Support | Responsive Help for Small Businesses";
const siteDescription =
  "Remote troubleshooting, on-site visits in NYC & the Tri-State area, and managed care plans that keep small businesses and entrepreneurs online without hiring in-house IT.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Private IT Support",
  },
  description: siteDescription,
  keywords: [
    "IT support",
    "managed IT",
    "remote IT help",
    "small business IT",
    "NYC Tri-State on-site IT",
    "entrepreneur tech support",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    siteName: "Private IT Support",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Private IT Support services preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--surface-base)]">
      <body className={`${inter.variable} ${figtree.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
