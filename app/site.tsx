import Link from "next/link";

export const whatnotUrl = "https://www.whatnot.com/user/pokeplaylive";

const navItems = [
  { href: "/live", label: "Live Auctions" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Alerts" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="PokePlay Store home">
          <img src="/pokeplay-logo.png" alt="" width="56" height="56" />
          <span>
            <strong>PokePlay</strong>
            <small>Live auctions. Future shop.</small>
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
          <strong>PokePlay Store</strong>
          <p>
            Utah-based Pokemon card auctions and collector drops, shipping across
            the United States.
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
        <strong>Highly rated on Whatnot</strong>
        <span>Great buyer reviews without fragile live stat claims.</span>
      </div>
      <div>
        <strong>Thousands sold</strong>
        <span>Established stream history and nationwide shipping.</span>
      </div>
      <div>
        <strong>Collector first</strong>
        <span>Giveaways, approachable auctions, and future shop drops.</span>
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
        <h2 id="shop-preview-title">Shop on Whatnot now. Grow with us as the store expands.</h2>
        <p>
          The first store experience points collectors to active Whatnot listings.
          Shopify can slot in later without changing the brand story.
        </p>
        <a className="button primary" href={whatnotUrl}>
          Shop Current Listings
        </a>
      </div>
      <div className="product-stack">
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
    <form className="alerts-form" action="/contact">
      <label htmlFor="email">Email address</label>
      <div className="input-row">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="collector@example.com"
          aria-describedby="alerts-note"
        />
        <button type="submit">Notify Me</button>
      </div>
      <fieldset>
        <legend>Send me alerts for</legend>
        <label>
          <input type="checkbox" name="alerts" value="streams" defaultChecked />
          Stream reminders
        </label>
        <label>
          <input type="checkbox" name="alerts" value="drops" defaultChecked />
          Drop alerts
        </label>
        <label>
          <input type="checkbox" name="alerts" value="giveaways" defaultChecked />
          Giveaways
        </label>
      </fieldset>
      <p id="alerts-note">
        Signup wiring is prepared for Resend; the live subscriber workflow will
        be enabled when credentials and storage are added.
      </p>
    </form>
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
