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
            Sign up interest for stream reminders, drop alerts, and giveaways.
            Resend wiring is planned next so the first version stays honest
            while the backend is finished.
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
          body="As social channels and email automation come online, this page can become the central contact and announcement hub."
        />
      </section>
    </PageShell>
  );
}
