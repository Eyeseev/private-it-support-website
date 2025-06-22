import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://privateitsupport.com'),
  title: "Private IT Support | Fast, Friendly Tech Help",
  description: "Remote and local IT support for individuals and small businesses. Book a free 15-minute consultation with a real tech expert.",
  keywords: ["IT support", "computer repair", "Wi-Fi help", "virus removal", "tech support", "NYC", "small business IT"],
  authors: [{ name: "Victor" }],
  creator: "Private IT Support",
  openGraph: {
    title: "Private IT Support",
    description: "Book a free 15-minute consultation with a real IT expert.",
    type: "website",
    locale: "en_US",
    url: "https://privateitsupport.com",
    siteName: "Private IT Support",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Private IT Support - Fast, Friendly Tech Help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private IT Support",
    description: "Remote and local IT support from a real tech pro.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://privateitsupport.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Private IT Support",
    "description": "Fast, friendly IT support for individuals and small businesses. Computer tune-ups, Wi-Fi troubleshooting, virus removal, and tech training.",
    "url": "https://privateitsupport.com",
    "telephone": "+1-555-123-4567",
    "email": "victor@privateitsupport.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer Tune-Up & Performance Optimization",
            "description": "Speed up slow computers and optimize performance"
          },
          "price": "99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wi-Fi & Network Troubleshooting",
            "description": "Fix connection issues and improve network performance"
          },
          "price": "89",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security & Virus Removal",
            "description": "Remove malware and secure your devices"
          },
          "price": "109",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
