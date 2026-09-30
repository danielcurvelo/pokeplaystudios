# PokePlay Studios Current State

Last updated: September 29, 2026

## Source Control and Deployment

- Active development branch: `develop`
- Latest Phase 2 commit: `c36bb66` (`Implement Phase 2 commerce foundation`)
- GitHub repository: `https://github.com/danielcurvelo/pokeplaystudios`
- `develop` is pushed and tracks `github/develop`.
- `main` still represents the previously deployed marketing-site version.
- Phase 2 changes are not in production until `develop` is merged and the
  Cloudflare build succeeds.
- Hosting target: Cloudflare Workers.
- Primary marketing domain: `pokeplaystudios.com`.
- Planned Shopify domain: `shop.pokeplaystudios.com`.
- Planned redirect domain: `pokeplay.store`.

## Brand and Site Structure

- PokePlay Studios is the parent brand and primary website.
- PokePlay Live is the Whatnot streaming and live-auction brand.
- PokePlay Store is the retail storefront brand.
- The site currently includes `/`, `/live`, `/shop`, and `/contact`.
- Email subscription forms were removed in favor of following and bookmarking
  the PokePlay Live Whatnot profile.
- Navigation uses full-page links because they proved more reliable on the
  Cloudflare Workers deployment than client-side routing.

## Phase 2 Work Completed

- Reworked `/shop` around sealed English, Japanese, Simplified Chinese, and
  Traditional Chinese Pokemon TCG inventory.
- Added nationwide United States shipping messaging.
- Added conditional Danceology Studio pickup messaging for Draper, Utah.
- Added shop SEO metadata, keywords, and FAQ structured data.
- Added a safe storefront launch switch using `NEXT_PUBLIC_SHOP_URL`.
- Until that variable is set, store calls to action continue to the current
  PokePlay Live Whatnot listings.
- Added a language-first catalog model and PokePlay SKU convention.
- Added an inventory intake CSV for supplier shipments.
- Added receiving, Whatnot reserve, shipping, pickup, returns, and weekly-count
  operating procedures.
- Added Spec Kit requirements, implementation plan, and task tracking under
  `specs/002-pokeplay-commerce/`.
- Created the Shopify store, installed the Horizon theme, and kept storefront
  access password-protected while setup continues.
- Shopify Sidekick completed the language and format metafields, storefront
  filters, and language plus sealed-product collections.
- Added hidden Shopify drafts for Shipping & Processing, Returns & Refunds,
  Local Pickup, and Contact & Support.
- Set Shopify order processing to manual fulfillment; orders are not
  automatically fulfilled after payment.
- Updated the private Shopify main menu to use `Home`, `Shop All`, `Contact`,
  and a `PokePlay Live` link to the Whatnot profile.
- Added the PokePlay Store logo as Shopify's default and square brand logo, and
  saved the core brand colors: coral `#F45B3F` and sky blue `#78BCE3`.
- Applied the PokePlay Store logo to the active Horizon theme. Its palette now
  uses cream `#FFFAF0`, near-black `#211E1C`, coral `#F45B3F`, and sky blue
  `#78BCE3`; page backgrounds are cream and primary buttons are coral.
- Saved the Horizon changes and opened the password-protected storefront
  preview for review.
- Added `public/pokeplay-store-hero-concept.png`, a provisional storefront hero
  layout. Replace it with supplier-approved or self-shot product photography
  before representing specific in-stock merchandise.

## Shopify Storefront Handoff

- Store: `ckase6-s5.myshopify.com`; active theme: Horizon (theme ID
  `167162183899`). The storefront is still password-protected.
- The active Horizon theme has the PokePlay Store logo and the approved palette:
  cream `#FFFAF0`, near-black `#211E1C`, coral `#F45B3F`, and sky blue
  `#78BCE3`. Primary buttons use coral; secondary buttons remain understated
  with transparent backgrounds and near-black borders.
- The private main menu is `Home`, `Shop All`, `Contact`, and `PokePlay Live`
  (external link to `https://www.whatnot.com/user/pokeplaylive`).
- The private preview currently shows Horizon's generic placeholder content and
  product cards. Do not publish or remove the password until payment, shipping,
  catalog, and launch checks are complete.

## Storefront Visual and Content Direction

- The user explicitly does **not** want generic/off-brand AI or stock imagery
  to impersonate Pokemon inventory. Do not use `public/pokeplay-store-hero-concept.png`
  as the final hero without explicit approval; it is only a layout study.
- Preferred approach: make the early storefront typography-led with the real
  PokePlay Store logo, brand colors, and actual Shopify product cards. Replace
  decorative merchandise imagery with supplier-authorized assets or original
  photographs of received inventory.
- The user has now approved an illustrated marketing direction based on their
  own product-display photo: colored-pencil merchandise sketches combined with
  the brand's colorful rays, halftone dots, stars, and cream paper texture.
  This approval covers the supplied-photo artwork; keep future displays grounded
  in the user's actual products.
- For supplier assets, ask each authorized wholesaler for an ecommerce media
  kit and written confirmation covering Shopify product pages, social posts,
  email, and paid ads. Keep the approvals and usage terms with the assets.
- Do not source images from Pokemon Center, Google Images, marketplaces,
  social posts, or other retailers. A resale relationship does not grant rights
  to reuse another party's photography. The Pokémon Company International
  manages the brand and licensing outside Asia.
- Created three original, product-free hero background candidates using the
  PokePlay Store logo only as a palette and visual-language reference:
  - `public/store-hero-rayburst.png`: tactile cream-and-color rayburst; the
    strongest immediate fit with the existing brand.
  - `public/store-hero-gallery.png`: premium empty retail plinths and acrylic
    display architecture, ready to support real inventory photography later.
  - `public/store-hero-foil.png`: abstract macro foil and prismatic materials
    that evoke collecting without showing cards or copied packaging.
- These hero backgrounds intentionally contain no text or logo. Shopify should
  layer the real PokePlay Store logo, headline, body copy, and CTAs in HTML so
  they remain sharp, accessible, responsive, and editable.
- Approved draft homepage copy:
  - Hero eyebrow: `PokePlay Store`
  - Hero headline: `Collect. Play. Trade.`
  - Hero body: `Sealed Pokemon TCG, collector merchandise, and game-room finds, curated for every kind of fan.`
  - Primary CTA: `Shop current drop`
  - Secondary CTA: `Follow PokePlay Live`
  - Drop section headline: `Worth opening. Worth keeping.`
  - Drop section body: `Sealed favorites, collector merch, and the kind of finds you want on the shelf before they disappear.`
  - Live section headline: `The game room goes live.`
  - Live section body: `Catch PokePlay Live on Whatnot for card breaks, games, surprises, and big reveals.`
  - Trust strip: `Nationwide shipping` / `Carefully packed` / `Local pickup in Draper, Utah`
  - Category labels and copy: `Sealed product` (booster boxes, packs, tins, and special releases); `Collector merch` (plush, figures, accessories, and game-room favorites); `Accessories` (deck boxes, binders, sleeves, and storage).

## Product Display Marketing Assets

- Approved final banner: `output/imagegen/store-sketch-rays-hero.webp`, with a
  PNG master and saved generation prompt alongside it. The banner combines the
  enlarged product-display sketch with colorful marketing rays and leaves space
  on the left for live website copy.
- Source sketch and earlier cream-background hero crops are retained under
  `output/imagegen/` for future edits.
- Reusable personal skill: `product-display-marketing`, installed in
  `~/.codex/skills/product-display-marketing/`. A repository copy lives in
  `skills/product-display-marketing/` with the approved visual reference.
- Future workflow: supply a new original product-display photo, create a
  colored-pencil sketch, frame products prominently, and blend in the ray style.
- Artwork files have been created and approved here; this session has not
  installed the final banner in Shopify or published storefront changes.
- Skill instructions were reviewed; the bundled automated skill validator could
  not run because PyYAML is unavailable in the local Python runtimes.

## Decisions in Force

- Shopify will be the system of record for products, purchase orders,
  inventory, customers, and orders. Do not duplicate these records in D1.
- The initial catalog is sealed inventory only.
- English, Japanese, Simplified Chinese, and Traditional Chinese releases are
  separate products, not language variants.
- Inventory is published only after it is physically received and inspected.
- United States shipping is enabled; international shipping and local delivery
  are deferred.
- The order processing target is one to two business days.
- Signature confirmation is an optional paid buyer add-on. It is not added
  automatically based on order value.
- Danceology Studio pickup is available only for eligible orders after studio
  permission, procedures, and hours are confirmed.
- A pickup order is never marked ready until it is physically at Danceology.
- Shopify remains password-protected until payments, shipping, catalog, and
  launch testing are complete.
- Preorders, singles, slabs, subscriptions, loyalty, and paid advertising are
  outside the initial Phase 2 launch.

## Verification Status

- `npm run build`: passing
- `npm test`: passing, 3 tests
- `npm run lint`: passing with 4 existing `no-img-element` warnings
- Desktop and mobile `/shop` layouts inspected locally
- Internal navigation verified in the browser
- No browser console errors found during the Phase 2 review

## Next Milestone: Shopify Foundation

1. Finish Shopify Payments and confirm tax, notification, and account settings.
2. Replace Horizon's generic homepage content with the approved typography-led
   content above. Add actual product cards first; add supplier-approved or
   original inventory photography only once available.
3. Review the hidden policy and support-page drafts, then publish and link
   them only when their operational details are final.
4. Create fulfillment and Whatnot-reserve locations only after their physical
   address, storage, and reconciliation procedure are confirmed.

## Following Milestones

### Catalog and Inventory

1. Enter suppliers and initial wholesale purchase orders.
2. Receive and inspect the first shipment using
   `commerce/inventory-intake.csv`.
3. Prepare supplier-authorized product images and original drop photography.
4. Publish 10 to 30 sealed products with language, costs, identifiers, weights,
   dimensions, inventory, and SEO fields completed.

### Fulfillment and Pickup

1. Configure packages and calculated carrier rates.
2. Implement and test optional paid signature confirmation.
3. Configure return, damage, fraud-review, and tracking workflows.
4. Confirm Danceology permission, public pickup address, hours, storage, staff
   responsibility, and customer handoff procedure.
5. Test one shipped order and one pickup order end to end.

### Domains, Measurement, and Launch

1. Connect `shop.pokeplaystudios.com` to Shopify through Cloudflare.
2. Redirect `pokeplay.store` to the canonical Shopify domain.
3. Configure GA4 ecommerce, Search Console, and Google Merchant Center.
4. Configure Shopify Forms and essential customer messages.
5. Run private soft-launch orders and a simulated Whatnot reconciliation.
6. Set `NEXT_PUBLIC_SHOP_URL=https://shop.pokeplaystudios.com` only after
   checkout acceptance testing passes.
7. Merge `develop`, deploy, verify production, and promote the first drop.

## Working References

- Shopify Sidekick handoff: `docs/commerce/shopify-sidekick-phase-2-setup.md`
- Phase 2 requirements: `specs/002-pokeplay-commerce/spec.md`
- Implementation plan: `specs/002-pokeplay-commerce/plan.md`
- Task checklist: `specs/002-pokeplay-commerce/tasks.md`
- Catalog and SKU rules: `docs/commerce/catalog-and-inventory.md`
- Operating playbook: `docs/commerce/operating-playbook.md`
- Supplier intake template: `commerce/inventory-intake.csv`
- Store launch configuration: `README.md`
