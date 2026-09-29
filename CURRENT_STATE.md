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
2. Apply PokePlay Store branding and navigation to the Horizon theme.
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
