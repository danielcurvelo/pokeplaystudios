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

const siteUrl = "https://pokeplaystudios.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PokePlay Studios | Pokemon Cards, Live Auctions & Drops",
    template: "%s | PokePlay Studios",
  },
  description:
    "PokePlay Studios is home to PokePlay Live Pokemon card auctions and PokePlay Store collector drops, shipping nationwide.",
  keywords: [
    "Pokemon card auctions",
    "live Pokemon card auctions",
    "Pokemon cards on Whatnot",
    "Pokemon card shop",
    "Pokemon TCG shop",
    "sealed Pokemon cards",
    "graded Pokemon cards",
    "Pokemon singles",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PokePlay Studios | Pokemon Cards, Live Auctions & Drops",
    description:
      "PokePlay Live auctions and PokePlay Store collector drops for Pokemon TCG fans nationwide.",
    url: siteUrl,
    siteName: "PokePlay Studios",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 912,
        alt: "PokePlay Studios: Live Auctions and Collector Drops",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PokePlay Studios | Pokemon Cards, Live Auctions & Drops",
    description:
      "Live Pokemon card auctions, collector drops, and Whatnot shows from PokePlay Studios.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/pokeplay-live-logo-v2.png",
    shortcut: "/pokeplay-live-logo-v2.png",
    apple: "/pokeplay-live-logo-v2.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "PokePlay Studios",
  alternateName: ["PokePlay Live", "PokePlay Store"],
  url: siteUrl,
  logo: `${siteUrl}/pokeplay-studios-wordmark-v2.png`,
  areaServed: "United States",
  sameAs: ["https://www.whatnot.com/user/pokeplaylive"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
