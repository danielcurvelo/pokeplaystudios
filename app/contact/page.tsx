import type { Metadata } from "next";
import { AlertsForm, PageShell, SectionHeader, whatnotUrl } from "../site";

export const metadata: Metadata = {
  title: "PokePlay Stream Alerts | Drops, Giveaways & Live Auctions",
  description:
    "Join PokePlay stream alerts for future Pokemon card auction reminders, shop drops, and giveaway updates.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="split-section contact-top">
        <div>
          <p className="eyebrow">Stream alerts</p>
          <h1>Know when PokePlayLive is back in the game room.</h1>
          <p>
            No stale schedule, no guessing. Follow PokePlay Live on Whatnot and
            get notified when the next auction room opens. Store drops and email
            updates are on the way as PokePlay Studios grows.
          </p>
          <a className="button secondary" href={whatnotUrl}>
            Follow on Whatnot
          </a>
        </div>
        <AlertsForm />
      </section>
      <section className="section-grid">
        <SectionHeader
          eyebrow="Contact"
          title="For now, Whatnot is the fastest way to connect."
          body="Follow PokePlay Live to catch the next auction and watch this space for the first PokePlay Studios email updates."
        />
      </section>
    </PageShell>
  );
}
