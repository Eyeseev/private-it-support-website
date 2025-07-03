import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Private IT Support",
  description: "Learn how Private IT Support protects your personal information and data. Our privacy policy explains how we collect, use, and safeguard your information.",
  keywords: ["privacy policy", "data protection", "IT support privacy", "personal information", "data security"],
  openGraph: {
    title: "Privacy Policy | Private IT Support",
    description: "Learn how Private IT Support protects your personal information and data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Private IT Support",
    description: "Learn how Private IT Support protects your personal information and data.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://privateitsupport.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 