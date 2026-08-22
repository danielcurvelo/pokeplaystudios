import type { Metadata } from "next";
import { PageShell, ShopPreview, SectionHeader, whatnotUrl } from "../site";

export const metadata: Metadata = {
  title: "Pokemon Card Shop | PokePlay Store",
  description:
    "Shop PokePlay's current Pokemon card listings on Whatnot and follow future PokePlay Store drops for sealed products, singles, slabs, and collector releases.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  return (
    <PageShell>
      <section className="page-hero compact">
        <p className="eyebrow">PokePlay Store</p>
        <h1>Your next favorite card might already be waiting.</h1>
        <p>
          PokePlay Store is growing into a home for the cards you want to keep,
          rip, trade, and display. For now, the shelves are open on Whatnot,
          with current listings and live finds ready when you are.
        </p>
        <a className="button primary" href={whatnotUrl}>
          Shop on Whatnot
        </a>
      </section>
      <ShopPreview />
      <section className="section-grid">
        <SectionHeader
          eyebrow="Future catalog"
          title="Built to grow into a real Pokemon TCG storefront."
          body="We are building the kind of shop we want to browse ourselves: clear categories, interesting inventory, and no filler."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Sealed Pokemon TCG</h3>
            <p>Booster boxes, ETBs, packs, and special releases for your next rip night.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Singles and slabs</h3>
            <p>Chase cards, binder upgrades, and graded pieces with display-case energy.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Follow the drops</h3>
            <p>Follow PokePlay Live and bookmark shows so new inventory is easier to catch.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
