import Link from "next/link";
import type { Metadata } from "next";
import {
  AlertsForm,
  FaqSchema,
  PageShell,
  ReviewBand,
  SectionHeader,
  ShopPreview,
  whatnotUrl,
} from "./site";

export const metadata: Metadata = {
  title: "PokePlay Store | Live Pokemon Card Auctions & Collector Drops",
  description:
    "Join PokePlayLive for live Pokemon card auctions on Whatnot, collector-friendly drops, giveaways, and future PokePlay Store releases shipped nationwide.",
  alternates: {
    canonical: "/",
  },
};

const auctionHighlights = [
  "Live Pokemon card auctions with game-room energy",
  "Sealed products, singles, slabs, and collector finds as inventory grows",
  "Drop alerts for stream reminders, giveaways, and future shop launches",
];

const faqs = [
  {
    question: "Where can I buy from PokePlay right now?",
    answer:
      "The fastest way to shop with us today is through the PokePlayLive Whatnot profile, where current listings and live auctions are hosted.",
  },
  {
    question: "Do you ship outside Utah?",
    answer:
      "Yes. PokePlay is based in Utah and ships to collectors across the United States through our live auction and shop channels.",
  },
  {
    question: "Is PokePlay affiliated with Pokemon or Whatnot?",
    answer:
      "No. PokePlay is an independent collector-run seller and is not affiliated with, endorsed by, or sponsored by Pokemon, Nintendo, Game Freak, Creatures, or Whatnot.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <FaqSchema faqs={faqs} />
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Utah-based. Shipping nationwide.</p>
          <h1 id="home-title">Live Pokemon card auctions with more game in every play.</h1>
          <p className="hero-lede">
            PokePlayLive brings collector-friendly Whatnot auctions, giveaways, sealed
            drops, singles, slabs, and the future PokePlay Store into one energetic
            game-room hub.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href={whatnotUrl}>
              Follow on Whatnot
            </a>
            <Link className="button secondary" href="/contact">
              Join Stream Alerts
            </Link>
            <Link className="button quiet" href="/shop">
              Shop Current Listings
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="PokePlayLive stream highlights">
          <img
            className="hero-logo"
            src="/pokeplay-logo.png"
            alt="PokePlayLive logo"
            width="320"
            height="320"
          />
          <div className="auction-card">
            <span className="live-pill">Whatnot live auctions</span>
            <h2>Cards, packs, slabs, and giveaways when we go live.</h2>
            <p>
              Follow the stream for the next show and join alerts so you do not
              need to chase a fixed schedule.
            </p>
          </div>
        </div>
      </section>

      <ReviewBand />

      <section className="section-grid">
        <SectionHeader
          eyebrow="Built for collectors"
          title="A simple path from stream to shop."
          body="The first launch is focused on discovery and trust. It points buyers to Whatnot today while giving PokePlay Store a clean place to grow."
        />
        <div className="feature-grid">
          {auctionHighlights.map((item) => (
            <article className="feature-card" key={item}>
              <span aria-hidden="true" className="dot" />
              <h3>{item}</h3>
              <p>
                Low-maintenance launch copy keeps the site accurate even when
                inventory, show times, and supplier plans change.
              </p>
            </article>
          ))}
        </div>
      </section>

      <ShopPreview />

      <section className="split-section">
        <div>
          <p className="eyebrow">Stream alerts</p>
          <h2>Get reminders for the next live auction.</h2>
          <p>
            Signups are designed for Resend wiring next. For v1, the form sets
            expectations clearly while the backend subscriber workflow is still
            being finished.
          </p>
        </div>
        <AlertsForm />
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <SectionHeader
          eyebrow="Quick answers"
          title="For new collectors finding PokePlay."
          body="Clear, search-friendly answers help buyers understand where to shop, how to follow the stream, and how PokePlay fits into the broader collector community."
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
