import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─── CRITICAL: use a LOCAL path so WhatsApp/social crawlers always find it.
// External CDN URLs (Unsplash, etc.) block bots → OG image never appears.
// Replace the metadataBase URL below with your real deployed domain.
const SITE_URL = "https://naija-kitchen-mb.netlify.app";
const OG_IMAGE = "/og-image.jpg";             // ← served from /public/og-image.jpg

export const metadata: Metadata = {
  // metadataBase makes Next.js resolve /og-image.jpg → https://naija-kitchen.com/og-image.jpg
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Naija Kitchen — Bold Flavors. True Naija.",
    template: "%s | Naija Kitchen",
  },
  description:
    "Authentic Nigerian cuisine crafted with love, tradition and the finest ingredients. From smoky suya to rich jollof — every dish tells a story. Located in Lekki, Lagos.",
  keywords:
    "Nigerian food, Naija Kitchen, jollof rice, suya, pepper soup, Lagos restaurant, Lekki restaurant, Nigerian restaurant, egusi, ofada rice",
  authors: [{ name: "Naija Kitchen" }],
  creator: "Naija Kitchen",
  publisher: "Naija Kitchen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    // "website" is the ONLY safe generic type — "restaurant" is not a valid OG type
    // and causes WhatsApp/Facebook to silently skip the entire OG block
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Naija Kitchen",
    title: "Naija Kitchen — Bold Flavors. True Naija.",
    description:
      "Authentic Nigerian cuisine in Lekki, Lagos. Jollof, Suya, Pepper Soup & more.",
    images: [
      {
        url: OG_IMAGE,         // Next.js resolves this to full URL via metadataBase
        secureUrl: OG_IMAGE,   // some crawlers require secureUrl explicitly
        width: 1200,
        height: 630,
        alt: "Naija Kitchen — Bold Flavors. True Naija. Authentic Nigerian Restaurant in Lagos.",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Naija Kitchen — Bold Flavors. True Naija.",
    description:
      "Authentic Nigerian cuisine in Lekki, Lagos. Jollof, Suya, Pepper Soup & more.",
    images: [OG_IMAGE],
    creator: "@naijak1tchen",
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to font servers for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-naija-dark text-white antialiased font-outfit">
        {/* Skip-to-content for keyboard and screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm focus:outline-none focus:ring-2 focus:ring-naija-red"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
