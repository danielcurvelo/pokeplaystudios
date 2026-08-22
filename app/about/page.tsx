import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, ReviewBand } from "../site";

export const metadata: Metadata = {
  title: "About PokePlay Studios | Pokemon Card Collectors",
  description:
    "Meet PokePlay Studios, the home of PokePlay Live Pokemon card auctions and PokePlay Store collector drops shipped nationwide.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero compact">
        <p className="eyebrow">PokePlay Studios</p>
        <h1>Welcome to the game room for Pokemon card collectors.</h1>
        <p>
          PokePlay Studios brings two sides of the hobby together: PokePlay Live
          for the thrill of the next auction, and PokePlay Store for the cards
          you want to come back to.
        </p>
        <Link className="button primary" href="/live">
          See Live Auctions
        </Link>
      </section>
      <ReviewBand />
      <section className="story-section">
        <article>
          <h2>A small studio built around big collector energy.</h2>
          <p>
            We believe the best card hobby has room for the serious collector,
            the first-time bidder, and the friend who came to watch one pack get
            opened. PokePlay keeps that room open, one show and one shipment at a time.
          </p>
        </article>
        <article>
          <h2>One brand, two ways to play.</h2>
          <p>
            PokePlay Live is the stream: live auctions, giveaways, and the next
            exciting pull. PokePlay Store is the shop: current listings, future
            drops, and the slow build toward a collector-first storefront.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
