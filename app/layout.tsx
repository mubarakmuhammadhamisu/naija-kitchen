import type { Metadata, Viewport } from "next";
import "./globals.css";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL("https://naija-kitchen.com"),
  title: {
    default: "Naija Kitchen — Bold Flavors. True Naija.",
    template: "%s | Naija Kitchen",
  },
  description:
    "Authentic Nigerian cuisine crafted with love, tradition and the finest Nigerian ingredients. From smoky suya to rich jollof — every dish tells a story. Located in Lekki, Lagos.",
  keywords:
    "Nigerian food, Naija Kitchen, jollof rice, suya, pepper soup, authentic Nigerian cuisine, Lagos restaurant, Lekki restaurant, Nigerian restaurant, egusi, ofada rice",
  authors: [{ name: "Naija Kitchen" }],
  creator: "Naija Kitchen",
  publisher: "Naija Kitchen",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "restaurant",
    locale: "en_NG",
    url: "https://naija-kitchen.com",
    siteName: "Naija Kitchen",
    title: "Naija Kitchen — Bold Flavors. True Naija.",
    description:
      "Authentic Nigerian cuisine crafted with love, tradition and the finest ingredients. Dine in Lekki, Lagos.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Naija Kitchen — Party Jollof Rice, signature dish",
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
    canonical: "https://naija-kitchen.com",
  },
  category: "restaurant",
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
        {/* Skip to main content — keyboard & screen reader navigation */}
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
