import type { Metadata } from "next";
import { PageShell, SectionHeader, WhatnotFollowCard, whatnotUrl } from "../site";

export const metadata: Metadata = {
  title: "Follow PokePlay Live on Whatnot | PokePlay Studios",
  description:
    "Follow and bookmark PokePlay Live on Whatnot for Pokemon card auctions, giveaways, sealed drops, singles, and collector finds.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="split-section contact-top">
        <div>
          <p className="eyebrow">Stay connected</p>
          <h1>Keep up with the next PokePlay Live auction.</h1>
          <p>
            Follow PokePlay Live on Whatnot and bookmark the shows you want to
            catch. It is the best way to stay close to the cards, giveaways, and
            collector conversation.
          </p>
          <a className="button secondary" href={whatnotUrl}>
            Open PokePlay Live
          </a>
        </div>
        <WhatnotFollowCard />
      </section>
      <section className="section-grid">
        <SectionHeader
          eyebrow="Your next seat"
          title="Follow once. Find the next show faster."
          body="PokePlay Live is where the action happens today. Follow the profile, bookmark the shows that catch your eye, and join us when the room opens."
        />
      </section>
    </PageShell>
  );
}
