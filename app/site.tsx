import Link from "next/link";

export const whatnotUrl = "https://www.whatnot.com/user/pokeplaylive";

const navItems = [
  { href: "/live", label: "PokePlay Live" },
  { href: "/shop", label: "PokePlay Store" },
  { href: "/about", label: "Studios" },
  { href: "/contact", label: "Alerts" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="PokePlay Studios home">
          <img src="/pokeplay-logo.png" alt="" width="56" height="56" />
          <span>
            <strong>PokePlay Studios</strong>
            <small>Live, store, and collector community.</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
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
          <a href={whatnotUrl}>Whatnot</a>
          <Link href="/contact">Stream alerts</Link>
          <Link href="/about">About</Link>
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
    ["Sealed Drops", "Booster boxes, ETBs, packs, and special releases."],
    ["Singles", "Collector favorites and playable cards as inventory expands."],
    ["Graded Slabs", "Display-worthy graded cards for serious collections."],
  ];

  return (
    <section className="shop-preview" aria-labelledby="shop-preview-title">
      <div className="shop-copy">
        <p className="eyebrow">PokePlay Store</p>
        <h2 id="shop-preview-title">Great cards deserve a home beyond the auction.</h2>
        <p>
          PokePlay Store is where stream finds, sealed favorites, and collector
          surprises gather. Shop the active Whatnot listings today, then keep an
          eye out as the dedicated storefront fills in.
        </p>
        <a className="button primary" href={whatnotUrl}>
          Shop Current Listings
        </a>
      </div>
      <div className="product-stack">
        <img
          className="shop-brand-logo"
          src="/pokeplay-store-logo.png"
          alt="PokePlay Store logo"
          width="300"
          height="300"
        />
        {cards.map(([title, body]) => (
          <article className="product-card" key={title}>
            <span aria-hidden="true" className="card-stripe" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AlertsForm() {
  return (
    <aside className="alerts-form" aria-label="PokePlay Live alerts">
      <p className="eyebrow">First call</p>
      <h3>Follow now. Never chase a stale schedule.</h3>
      <p>
        PokePlay Live is built around the cards in the room, not a calendar that
        needs constant updating. Follow our Whatnot profile and it will notify
        you when the next auction opens.
      </p>
      <a className="button secondary" href={whatnotUrl}>
        Follow PokePlay Live
      </a>
      <p className="alerts-note">
        Dedicated email alerts for drops, giveaways, and live shows are coming
        as PokePlay Studios grows.
      </p>
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
