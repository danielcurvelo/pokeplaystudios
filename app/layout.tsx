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

const siteUrl = "https://pokeplay.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PokePlay Store | Live Pokemon Card Auctions",
    template: "%s | PokePlay Store",
  },
  description:
    "PokePlayLive hosts live Pokemon card auctions on Whatnot and is growing into PokePlay Store for collector drops shipped nationwide.",
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
    title: "PokePlay Store | Live Pokemon Card Auctions",
    description:
      "Follow PokePlayLive for Whatnot auctions, collector drops, giveaways, and future PokePlay Store releases.",
    url: siteUrl,
    siteName: "PokePlay Store",
    images: [
      {
        url: "/pokeplay-logo.png",
        width: 512,
        height: 512,
        alt: "PokePlayLive logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PokePlay Store | Live Pokemon Card Auctions",
    description:
      "Live Pokemon card auctions, collector drops, and stream alerts from PokePlayLive.",
    images: ["/pokeplay-logo.png"],
  },
  icons: {
    icon: "/pokeplay-logo.png",
    shortcut: "/pokeplay-logo.png",
    apple: "/pokeplay-logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "PokePlay Store",
  alternateName: "PokePlayLive",
  url: siteUrl,
  logo: `${siteUrl}/pokeplay-logo.png`,
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressRegion: "UT",
    addressCountry: "US",
  },
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
