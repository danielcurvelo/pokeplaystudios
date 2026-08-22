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
  title: "PokePlay Studios | Pokemon Cards, Live Auctions & Collector Drops",
  description:
    "PokePlay Studios brings PokePlay Live auctions and PokePlay Store collector drops together for Pokemon TCG fans nationwide.",
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
    question: "Where does PokePlay ship?",
    answer:
      "PokePlay ships to collectors across the United States through our live auction and shop channels.",
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
          <p className="eyebrow">PokePlay Studios</p>
          <h1 id="home-title">The game room for Pokemon card collectors.</h1>
          <p className="hero-lede">
            PokePlay Studios is home to PokePlay Live, where every auction feels
            like a seat at the table, and PokePlay Store, where collector finds
            get a second chance to become your favorite card. We ship nationwide.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href={whatnotUrl}>
              Enter PokePlay Live
            </a>
            <Link className="button secondary" href="/contact">
              Get Drop Alerts
            </Link>
            <Link className="button quiet" href="/shop">
              Visit PokePlay Store
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
          body="Whether you are chasing a nostalgic pull, a clean slab, or the next pack to rip, PokePlay Studios gives each part of the hobby its own front door."
        />
        <div className="feature-grid">
          {auctionHighlights.map((item) => (
            <article className="feature-card" key={item}>
              <span aria-hidden="true" className="dot" />
              <h3>{item}</h3>
              <p>
                Clear listings, careful shipping, and a little game-room fun make
                the hunt feel like the best part of collecting.
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
            There is no fixed calendar to maintain here. A Whatnot follow is the
            easiest way to get the tap on the shoulder when the next PokePlay
            Live auction is ready to go.
          </p>
        </div>
        <AlertsForm />
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <SectionHeader
          eyebrow="Quick answers"
          title="Start wherever you collect."
          body="A few quick answers before you dive into the next auction or browse the current shop."
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
