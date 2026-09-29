# PokePlay Store: Phase 2 Shopify Setup Instructions

Copy this document into Shopify Sidekick and ask it to complete the setup in the
current Poke Play Store Shopify admin. Confirm each completed item before moving
to the next section.

## Goal

Set up the inventory structure, product data fields, collections, and draft
product workflow for PokePlay Store. This store sells sealed Pokemon Trading
Card Game products in English, Japanese, Simplified Chinese, and Traditional
Chinese.

Do not publish products, enable local delivery, alter payment settings, change
domains, or change taxes as part of this work.

## Existing State

- Store name: Poke Play Store
- An active location named `Danceology Studio` already exists.
- Do not rename, deactivate, publish, or configure pickup for Danceology Studio
  in this task.
- `Danceology Studio - Draper Pickup` should be used only after the business
  confirms studio permission, public pickup address, open hours, secure storage,
  responsible staff, and handoff procedures.
- The business uses a private fulfillment location. Never expose that address
  to customers.
- The store will ship only within the United States at launch.

## 1. Create Product Metafield Definitions

In Settings > Metafields and metaobjects > Products, create these definitions.
Use namespace `pokeplay` and the exact keys below.

| Name | Namespace and key | Content type | Required setup |
| --- | --- | --- | --- |
| Product language | `pokeplay.language` | Single-line text | Enable product-list and Admin API filtering. Use only: English, Japanese, Simplified Chinese, Traditional Chinese. |
| Set name | `pokeplay.set_name` | Single-line text | Enable product-list and Admin API filtering. |
| Product format | `pokeplay.format` | Single-line text | Enable product-list and Admin API filtering. Examples: Booster Box, Elite Trainer Box, Collection Box, Bundle, Tin, Pack. |
| Release date | `pokeplay.release_date` | Date | No filter required. |
| Supplier | `pokeplay.supplier` | Single-line text | Do not expose on storefront. |
| Supplier SKU | `pokeplay.supplier_sku` | Single-line text | Do not expose on storefront. |
| Landed cost | `pokeplay.landed_cost` | Decimal | Do not expose on storefront. |

If Shopify asks whether a metafield should be available to the storefront, make
`Product language`, `Set name`, and `Product format` available. Keep Supplier,
Supplier SKU, and Landed cost private to the admin.

## 2. Create Collections

Create these collections as manual collections for the initial launch. They
should be available to the Online Store but remain empty until real products
are created.

1. `English`
2. `Japanese`
3. `Simplified Chinese`
4. `Traditional Chinese`
5. `New Drops`
6. `Sealed Products`

Do not add collection descriptions that promise investment value, guaranteed
pulls, guaranteed rarity, or artificial scarcity.

## 3. Configure Storefront Filtering

Install or open Shopify Search & Discovery if it is available without a paid
commitment. Add these storefront filters:

- Availability
- Price
- Product language (`pokeplay.language`)
- Product format (`pokeplay.format`)

Do not add Supplier, Supplier SKU, or Landed cost as storefront filters.

## 4. Draft Product Workflow

Do not create real or public products without merchant-supplied inventory data.
Do not invent product titles, prices, product images, suppliers, barcodes,
weights, or stock quantities.

If the merchant wants a dry run and specifically approves test records, create
no more than three products titled exactly:

- `[INTERNAL TEST - DO NOT PUBLISH] English Sealed Product`
- `[INTERNAL TEST - DO NOT PUBLISH] Japanese Sealed Product`
- `[INTERNAL TEST - DO NOT PUBLISH] Simplified Chinese Sealed Product`

For any approved test product:

- Keep status as `Draft`.
- Do not add it to a sales channel.
- Set inventory to zero.
- Assign the matching language metafield.
- Do not attach an image, price, supplier, SKU, barcode, weight, or dimensions.

Otherwise, stop after the collections and metafield setup and ask the merchant
for the first product’s title, language, format, supplier, supplier SKU,
barcode or GTIN, quantity received, landed cost, retail price, packed weight,
dimensions, and authorized image source.

## 5. Report Back

Provide a short completion report with:

- The metafields created, including their namespace and key.
- The collections created.
- The filters enabled.
- Any work that was intentionally paused because it requires a private address,
  merchant approval, or real product data.
