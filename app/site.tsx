export const whatnotUrl = "https://www.whatnot.com/user/pokeplaylive";
const configuredStoreUrl = process.env.NEXT_PUBLIC_SHOP_URL?.trim();

export const storeIsLive = Boolean(configuredStoreUrl);
export const storeUrl = configuredStoreUrl || whatnotUrl;

const navItems = [
  { href: "/live", label: "PokePlay Live" },
  { href: "/shop", label: "PokePlay Store" },
  { href: "/contact", label: "Stay Connected" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        {/* Full-page navigation avoids client-router failures on Cloudflare Workers. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="brand" href="/" aria-label="PokePlay Studios home">
          <img
            className="brand-wordmark"
            src="/pokeplay-studios-wordmark-v2.png"
            alt="PokePlay Studios"
            width="220"
            height="66"
          />
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>PokePlay Studios</strong>
          <p>
            Pokemon card auctions, collector drops, and nationwide shipping.
          </p>
        </div>
        <div className="footer-links">
          <a href="/shop">PokePlay Store</a>
          <a href={whatnotUrl}>Whatnot</a>
          <a href="/contact">Stay connected</a>
        </div>
        <p className="disclaimer">
          PokePlay is an independent seller and community. We are not affiliated
          with, endorsed by, or sponsored by Pokemon, Nintendo, Game Freak,
          Creatures, or Whatnot.
        </p>
      </footer>
    </>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function ReviewBand() {
  return (
    <section className="review-band" aria-label="PokePlay trust signals">
      <div>
        <strong>Trusted by collectors</strong>
        <span>Strong Whatnot reviews earned one package at a time.</span>
      </div>
      <div>
        <strong>Built on real breaks</strong>
        <span>Live energy, careful packing, and cards worth coming back for.</span>
      </div>
      <div>
        <strong>Nationwide shipping</strong>
        <span>From live pulls to store orders, your next card can find its way home.</span>
      </div>
    </section>
  );
}

export function ShopPreview() {
  const cards = [
    ["English Sealed", "inventory-sealed-drops.png", "English sealed Pokemon card products"],
    ["Japanese Drops", "inventory-singles.png", "Japanese Pokemon card releases"],
    ["Chinese Releases", "inventory-collector-finds.png", "Chinese Pokemon card releases"],
  ];

  return (
    <section className="shop-preview" aria-labelledby="shop-preview-title">
      <div className="shop-copy">
        <p className="eyebrow">PokePlay Store</p>
        <h2 id="shop-preview-title">The good stuff, all in one place.</h2>
        <p>
          English, Japanese, and Chinese sealed releases, selected for collectors
          and shipped nationwide.
        </p>
        <a className="button primary" href="/shop">
          Explore PokePlay Store
        </a>
      </div>
      <div className="product-stack">
        {cards.map(([title, image, alt]) => (
          <article className="inventory-tile" key={title}>
            <img src={`/${image}`} alt={alt} />
            <div className="inventory-label">
              <span>{title}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhatnotFollowCard() {
  return (
    <aside className="whatnot-follow-card" aria-label="Follow PokePlay Live on Whatnot">
      <p className="eyebrow">PokePlay Live on Whatnot</p>
      <h3>Keep your seat in the game room.</h3>
      <p>
        Follow our profile and bookmark the shows you want to catch. You will
        be ready for live auctions, giveaways, and new cards as they hit the
        game room.
      </p>
      <a className="button secondary" href={whatnotUrl}>
        Follow and bookmark on Whatnot
      </a>
    </aside>
  );
}

export function FaqSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
