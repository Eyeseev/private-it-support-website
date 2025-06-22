import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Private IT Support | Get Expert Tech Help",
  description: "Contact Private IT Support for fast, friendly tech help. Book a free consultation, get service quotes, or ask questions. Available for remote and local support.",
  keywords: ["contact IT support", "tech consultation", "computer help", "IT services contact", "tech support booking"],
  openGraph: {
    title: "Contact Private IT Support | Get Expert Tech Help",
    description: "Contact Private IT Support for fast, friendly tech help. Book a free consultation or get service quotes.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 