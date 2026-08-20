import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, ReviewBand } from "../site";

export const metadata: Metadata = {
  title: "About PokePlay | Pokemon Card Auctions & Collectors",
  description:
    "PokePlay is a Utah-based Pokemon card stream and future online shop serving collectors nationwide through Whatnot auctions and collector drops.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero compact">
        <p className="eyebrow">About PokePlay</p>
        <h1>Welcome to the game room for Pokemon card collectors.</h1>
        <p>
          PokePlayLive started as a collector-friendly live auction stream and is
          growing into PokePlay Store, a home for drops, listings, and community
          updates.
        </p>
        <Link className="button primary" href="/live">
          See Live Auctions
        </Link>
      </section>
      <ReviewBand />
      <section className="story-section">
        <article>
          <h2>Independent, approachable, and built around the stream.</h2>
          <p>
            The PokePlay brand is intentionally playful without pretending to be
            official. The site gives new buyers a clear place to learn who we
            are, follow the stream, and find current listings.
          </p>
        </article>
        <article>
          <h2>Utah-based, nationwide by design.</h2>
          <p>
            Utah is our home base, but the audience is online collectors across
            the country. That means the site uses national SEO first while still
            showing there are real people behind the stream.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
