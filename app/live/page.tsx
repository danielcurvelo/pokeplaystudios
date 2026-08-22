import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, ReviewBand, SectionHeader, whatnotUrl } from "../site";

export const metadata: Metadata = {
  title: "Live Pokemon Card Auctions on Whatnot | PokePlayLive",
  description:
    "Follow PokePlayLive on Whatnot for flexible-schedule Pokemon card auctions, giveaways, sealed drops, singles, and collector-friendly live shows.",
  alternates: {
    canonical: "/live",
  },
};

export default function LivePage() {
  return (
    <PageShell>
      <section className="page-hero compact">
        <p className="eyebrow">PokePlayLive</p>
        <h1>Every show is a new seat in the game room.</h1>
        <p>
          PokePlay Live turns Pokemon card auctions into a proper hangout. We go
          live when the cards are ready, so follow on Whatnot and you will be in
          the loop when the next round starts.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={whatnotUrl}>
            Follow on Whatnot
          </a>
          <Link className="button secondary" href="/contact">
            Join Alerts
          </Link>
        </div>
      </section>
      <ReviewBand />
      <section className="section-grid">
        <SectionHeader
          eyebrow="What to expect"
          title="A good auction has more than good cards."
          body="Expect a welcoming room, real collector energy, and a rotating mix of cards that keeps every stream interesting."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Shows worth catching</h3>
            <p>Our schedule follows the cards, so a Whatnot follow is your best invite to the next one.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>A little extra fun</h3>
            <p>Giveaways and surprises keep the room lively whether you are hunting or just hanging out.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Nationwide shipping</h3>
            <p>Join from wherever you collect. We ship cards to collectors across the United States.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
