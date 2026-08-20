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
        <h1>Pokemon card shop today on Whatnot, with a full store coming later.</h1>
        <p>
          The current shop experience lives on Whatnot while supplier and Shopify
          plans come together. Follow the store now for available listings and
          future drops.
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
          body="The site is ready for shop categories without publishing empty inventory pages before they are useful."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Sealed Pokemon TCG</h3>
            <p>Booster boxes, ETBs, booster bundles, packs, and special releases.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Singles and slabs</h3>
            <p>Individual cards and graded collectibles as inventory expands.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Drop alerts</h3>
            <p>Email alerts can announce new stock, auction events, and giveaways.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
