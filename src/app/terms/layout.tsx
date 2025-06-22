import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Private IT Support",
  description: "Read the terms of service for Private IT Support. Understand our service agreements, policies, and your rights when using our IT support services.",
  keywords: ["terms of service", "service agreement", "IT support terms", "legal terms", "service policies"],
  openGraph: {
    title: "Terms of Service | Private IT Support",
    description: "Read the terms of service for Private IT Support services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 