import type { Metadata } from "next";
import {
  FaqSchema,
  PageShell,
  SectionHeader,
  storeIsLive,
  storeUrl,
  whatnotUrl,
} from "../site";

export const metadata: Metadata = {
  title: "Pokemon Card Shop | PokePlay Store",
  description:
    "Shop sealed English, Japanese, and Chinese Pokemon card releases from PokePlay Store, with nationwide shipping and pickup in Draper, Utah.",
  alternates: {
    canonical: "/shop",
  },
};

const languages = [
  {
    code: "EN",
    title: "English",
    body: "Familiar Pokemon TCG sets, collection boxes, Elite Trainer Boxes, and sealed releases.",
  },
  {
    code: "JP",
    title: "Japanese",
    body: "Japanese booster boxes, specialty products, and releases selected from trusted wholesale sources.",
  },
  {
    code: "SC / TC",
    title: "Chinese",
    body: "Simplified and Traditional Chinese releases, always labeled clearly so you know exactly what you are collecting.",
  },
];

const faqs = [
  {
    question: "What languages does PokePlay Store carry?",
    answer:
      "PokePlay Store carries sealed English, Japanese, Simplified Chinese, and Traditional Chinese Pokemon card products as inventory is available. Every listing identifies its language clearly.",
  },
  {
    question: "Does PokePlay Store ship nationwide?",
    answer:
      "Yes. PokePlay Store ships to collectors across the United States with rates calculated at checkout.",
  },
  {
    question: "Can I pick up my order locally?",
    answer:
      "Eligible orders can be picked up at Danceology Studio in Draper, Utah during posted open hours. Customers must wait for the ready-for-pickup notification before arriving.",
  },
];

export default function ShopPage() {
  const primaryLabel = storeIsLive ? "Shop the Online Store" : "Shop Current Listings";

  return (
    <PageShell>
      <FaqSchema faqs={faqs} />
      <section className="page-hero compact">
        <p className="eyebrow">PokePlay Store</p>
        <h1>Sealed releases from across the Pokemon TCG.</h1>
        <p>
          Explore English, Japanese, and Chinese products chosen for collectors
          who care about what they are opening and where it came from. We ship
          nationwide, with eligible local pickup in Draper.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={storeUrl}>
            {primaryLabel}
          </a>
          <a className="button secondary" href={whatnotUrl}>
            Visit PokePlay Live
          </a>
        </div>
        {!storeIsLive && (
          <p className="store-status">
            The dedicated online store is being stocked. Current listings remain
            available through PokePlay Live on Whatnot.
          </p>
        )}
      </section>

      <section className="section-grid">
        <SectionHeader
          eyebrow="Shop by language"
          title="Every release labeled clearly."
          body="Regional releases can have different sets, artwork, pack configurations, and pull experiences. We keep each language separate so you can shop with confidence."
        />
        <div className="language-grid">
          {languages.map((language) => (
            <article className="language-card" key={language.code}>
              <span className="language-code">{language.code}</span>
              <h3>{language.title}</h3>
              <p>{language.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pickup-band" aria-labelledby="pickup-title">
        <div>
          <p className="eyebrow">Draper pickup</p>
          <h2 id="pickup-title">Skip shipping when local pickup fits.</h2>
        </div>
        <div>
          <p>
            Eligible orders can be collected at Danceology Studio in Draper,
            Utah during posted open hours. Choose pickup at checkout and wait
            for the ready notification before heading over.
          </p>
          <strong>Pickup is available only after confirmation.</strong>
        </div>
      </section>

      <section className="section-grid">
        <SectionHeader
          eyebrow="How we stock"
          title="Clear listings. Real inventory. No guessing."
          body="Products are published after they arrive and are inspected. Language, contents, condition, and availability stay visible from the product page through checkout."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Sealed and inspected</h3>
            <p>Inventory is received from wholesale sources and checked before it becomes available.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Nationwide shipping</h3>
            <p>Calculated shipping keeps delivery options clear for collectors across the United States.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Store and stream</h3>
            <p>Shop stocked products online, then follow PokePlay Live for auctions, games, and show-only finds.</p>
          </article>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="shop-faq-title">
        <SectionHeader
          eyebrow="Store questions"
          title="Know what you are getting."
          body="Quick answers about languages, shipping, and local pickup."
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
