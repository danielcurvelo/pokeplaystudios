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
        <h1>Follow the stream for the next live Pokemon card auction.</h1>
        <p>
          We go live when time and inventory line up, so the best way to catch
          the next auction is to follow PokePlayLive on Whatnot and join stream
          alerts.
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
          title="Auctions that feel like a collector game room."
          body="PokePlayLive is built for buyers who want fun, trust, and a good shot at cards they are excited to add to a collection."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Flexible live shows</h3>
            <p>Follow on Whatnot and join alerts instead of relying on a fixed schedule.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Giveaway-friendly energy</h3>
            <p>Streams are designed to feel fun and approachable for collectors.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Nationwide shipping</h3>
            <p>Based in Utah and serving collectors across the United States.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
