import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Private IT Support",
  description: "Read the terms of service for Private IT Support. Understand our service agreements, policies, and your rights when using our IT support services.",
  keywords: ["terms of service", "service agreement", "IT support terms", "legal terms", "service policies"],
  openGraph: {
    title: "Terms of Service | Private IT Support",
    description: "Read the terms of service for Private IT Support services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Private IT Support",
    description: "Read the terms of service for Private IT Support services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://privateitsupport.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 