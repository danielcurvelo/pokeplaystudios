import type { Metadata } from "next";
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
        <h1>Every show is a new seat in the game room.</h1>
        <p>
          PokePlay Live turns Pokemon card auctions into a proper hangout. We go
          live when the cards are ready, so follow on Whatnot and you will be in
          the loop when the next round starts.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={whatnotUrl}>
            Follow on Whatnot
          </a>
          <a className="button secondary" href="/contact">
            Bookmark a Show
          </a>
        </div>
      </section>
      <ReviewBand />
      <section className="live-formats" aria-labelledby="live-formats-title">
        <div className="live-formats-copy">
          <p className="eyebrow">Game room formats</p>
          <h2 id="live-formats-title">More ways to play for the next big hit.</h2>
          <p>
            PokePlay Live brings the energy of a game night to every stream,
            with card auctions, surprise reveals, and collector-friendly games
            built around the cards on the table.
          </p>
        </div>
        <figure className="live-formats-art">
          <img
            src="/pokeplay-live-game-room.png"
            alt="Illustrated PokePlay game room with a reveal board, prize wheel, card packs, and a live auction table"
            width="1774"
            height="887"
          />
        </figure>
        <div className="format-grid">
          <article className="format-card format-card-featured">
            <span className="format-number">01</span>
            <h3>Bango</h3>
            <p>
              A bingo-inspired board game where every hidden hit could reveal a
              BIG prize. Watch the board change as the room plays for the reveal.
            </p>
          </article>
          <article className="format-card">
            <span className="format-number">02</span>
            <h3>Live card auctions</h3>
            <p>
              Packs, singles, slabs, and collector surprises move quickly when
              the right card lands on the table.
            </p>
          </article>
          <article className="format-card">
            <span className="format-number">03</span>
            <h3>Prize-play moments</h3>
            <p>
              Giveaways, reveals, and game-night twists keep the stream fun
              whether you are bidding or just hanging out.
            </p>
          </article>
        </div>
      </section>
      <section className="section-grid">
        <SectionHeader
          eyebrow="What to expect"
          title="A good auction has more than good cards."
          body="Expect a welcoming room, real collector energy, and a rotating mix of cards that keeps every stream interesting."
        />
        <div className="feature-grid">
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Shows worth catching</h3>
            <p>Follow PokePlay Live and bookmark the shows that look good so you are ready when the room opens.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>A little extra fun</h3>
            <p>Giveaways and surprises keep the room lively whether you are hunting or just hanging out.</p>
          </article>
          <article className="feature-card">
            <span className="dot" aria-hidden="true" />
            <h3>Nationwide shipping</h3>
            <p>Join from wherever you collect. We ship cards to collectors across the United States.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
