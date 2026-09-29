# PokePlay Commerce Phase 2 Spec

## Objective

Launch PokePlay Store as a Shopify storefront for sealed English, Japanese, Simplified Chinese, and Traditional Chinese Pokemon card products while keeping PokePlay Studios as the parent marketing site and PokePlay Live as the Whatnot stream brand.

## Success Criteria

- Launch 10-30 physically received sealed products at `shop.pokeplaystudios.com`.
- Use Shopify as the source of truth for products, purchase orders, inventory, customers, and web orders.
- Keep website, Whatnot, and Danceology pickup inventory distinct so products cannot be oversold.
- Ship or prepare at least 95% of paid orders within two business days.
- Clearly identify product language on listings, collections, order lines, and fulfillment records.
- Support nationwide United States shipping and eligible pickup at Danceology Studio in Draper, Utah.

## Requirements

### Commerce

- Use Shopify Basic with the Horizon theme.
- Use `shop.pokeplaystudios.com` as the canonical store domain.
- Redirect `pokeplay.store` to the canonical Shopify store.
- Keep guest checkout enabled and make customer accounts optional.
- Enable Shopify Payments, Shop Pay, major cards, Apple Pay, and Google Pay where approved.
- Keep the existing `/shop` route as an SEO and brand bridge rather than duplicating Shopify product pages.
- Use `NEXT_PUBLIC_SHOP_URL` to switch the PokePlay Studios site to the live Shopify storefront only after checkout is ready.

### Catalog

- Launch sealed inventory only; singles, slabs, preorders, subscriptions, and mystery products are out of scope.
- Represent English, Japanese, Simplified Chinese, and Traditional Chinese releases as separate products, not language variants.
- Include the language in every product title and expose it as a Shopify product metafield and storefront filter.
- Record supplier, supplier SKU, barcode or GTIN, PokePlay SKU, set, format, release date, wholesale cost, landed cost, price, weight, dimensions, condition, and inventory location.
- Use supplier-authorized images for standard catalog views and original photography for featured drops and social promotion.
- Publish products only after they are physically received and inspected.

### Inventory

- Create `Online Store Fulfillment`, `Whatnot Reserve`, and `Danceology Studio - Draper Pickup` Shopify locations.
- Prevent `Whatnot Reserve` from fulfilling online orders.
- Receive wholesale inventory through Shopify purchase orders and inbound transfers.
- Allocate show inventory to `Whatnot Reserve` before each show and reconcile sales and returns immediately afterward.
- Disable continued selling when inventory reaches zero.
- Perform weekly physical counts for the first 60 days.

### Fulfillment

- Sell and ship only within the United States in Phase 2.
- Use calculated Shopify Shipping rates based on accurate weights and package dimensions.
- Publish a one-to-two-business-day processing window.
- Offer carrier signature confirmation as an optional paid cart add-on; never add it automatically based only on order value.
- Accept unopened returns within 14 days and treat opened trading-card products as final sale.
- Require damage or incorrect-item reports with photographs within 48 hours.

### Local Pickup

- Offer eligible pickup orders at Danceology Studio in Draper during published open hours after studio permission and operating procedures are confirmed.
- Keep the private fulfillment address hidden from customers.
- Transfer pickup inventory from `Online Store Fulfillment` to Danceology when needed.
- Never mark an order ready until it is physically present at Danceology.
- Require customers to wait for the ready notification and present their name and order number.
- Keep local delivery disabled.

### Promotion and Measurement

- Promote through Whatnot, Instagram, TikTok, Shopify email, Google Merchant Center, and free Google Shopping listings.
- Configure GA4 ecommerce events and a domain-level Google Search Console property.
- Use Shopify Forms for drop alerts and customer segmentation.
- Defer paid advertising until at least 30 days of conversion, margin, and fulfillment data exist.
- Avoid guaranteed-value, investment, and misleading scarcity claims.

## Out of Scope

- Custom checkout or custom inventory database.
- Automatic Whatnot inventory synchronization.
- International customer shipping.
- Paid advertising at launch.
- Local delivery.
- Preorders, singles, slabs, subscriptions, loyalty programs, and a mobile app.

## External Launch Gates

- Shopify account ownership, billing plan, identity, and payment verification.
- Tax registrations and accountant review.
- Danceology permission, pickup hours, storage, staff responsibility, and customer handoff procedure.
- Supplier authorization for product imagery and brand assets.
- Shopify domain and Cloudflare DNS verification.
