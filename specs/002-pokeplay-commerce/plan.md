# PokePlay Commerce Phase 2 Implementation Plan

## 1. Commerce Foundation

- Create the Shopify store on Basic and install Horizon.
- Configure business identity, Shopify Payments, optional customer accounts, the United States market, tax settings, and store policies.
- Connect `shop.pokeplaystudios.com` and redirect `pokeplay.store`.
- Match the PokePlay Store theme to the existing brand without duplicating the marketing site.

## 2. Catalog and Inventory

- Define the language-first product template and SKU convention.
- Create collections for new drops, languages, and sealed product formats.
- Add suppliers and record wholesale purchase orders in Shopify.
- Receive inventory through inbound transfers and include freight, duties, and currency conversion in landed cost.
- Configure the online, Whatnot reserve, and Danceology pickup locations.

## 3. Fulfillment

- Configure accurate product weights, packages, calculated carrier rates, and the one-to-two-business-day processing window.
- Add the optional paid signature-confirmation service and fulfillment flag.
- Configure the 14-day unopened return policy and damage-report workflow.
- Enable Danceology pickup only after the operating agreement and handoff procedure are complete.

## 4. Marketing and Launch

- Point the PokePlay Studios site to Shopify with `NEXT_PUBLIC_SHOP_URL` after the storefront passes acceptance testing.
- Add Shopify Forms, customer segments, welcome messaging, abandoned-checkout messaging, and post-purchase follow-up.
- Configure GA4, Search Console, Google Merchant Center, and free product listings.
- Run a private soft launch before promoting the first drop.

## Rollout

- Week 1: Shopify foundation, theme, payments, policies, domains, and locations.
- Week 2: product model, suppliers, inventory, photography, shipping, and pickup setup.
- Week 3: site integration, email, analytics, Google product feed, and private test orders.
- Week 4: reconciliation test, final corrections, catalog release, and first promoted drop.

## Validation

- Test guest checkout, taxes, calculated rates, optional signature service, shipment tracking, cancellation, refund, and damage handling.
- Test each catalog language and confirm the correct title, images, identifiers, price, and fulfillment record reach the order.
- Test that Whatnot reserve stock is never sellable online.
- Test Danceology pickup from selection through transfer, ready notification, identity check, and completed pickup.
- Test mobile layouts, SSL, analytics events, email consent, product metadata, and Google feed eligibility.
