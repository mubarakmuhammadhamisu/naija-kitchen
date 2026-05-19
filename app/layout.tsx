import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naija Kitchen — Bold Flavors. True Naija.",
  description:
    "Authentic Nigerian cuisine crafted with love, tradition and the finest Nigerian ingredients. From smoky suya to rich jollof — every dish tells a story.",
  keywords:
    "Nigerian food, Naija Kitchen, jollof rice, suya, pepper soup, authentic Nigerian cuisine, Lagos restaurant",
  openGraph: {
    title: "Naija Kitchen — Bold Flavors. True Naija.",
    description: "Authentic Nigerian cuisine crafted with love and tradition.",
    type: "website",
  },
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
      </head>
      <body className="bg-naija-dark text-white antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}
