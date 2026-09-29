# Catalog and Inventory Rules

## Product Model

Create separate Shopify products for English, Japanese, Simplified Chinese,
and Traditional Chinese releases. Do not model language as a variant. Every
product title begins with the language in square brackets, for example:

`[Japanese] Pokemon Card 151 Booster Box`

Required product data:

- Language: English, Japanese, Simplified Chinese, or Traditional Chinese
- Set and sealed-product format
- Supplier and supplier SKU
- Barcode or GTIN when supplied
- PokePlay SKU
- Release date
- Wholesale and landed cost
- Retail price
- Quantity received
- Packed weight and dimensions
- Condition and inspection status
- Inventory location
- Image-use authorization

## SKU Convention

Use `PP-LANG-SET-FORMAT-NNN`.

- `LANG`: `EN`, `JP`, `SC`, or `TC`
- `SET`: short uppercase set code, no spaces
- `FORMAT`: `BBX`, `ETB`, `BND`, `TIN`, `BOX`, `PK`, or another documented code
- `NNN`: three-digit sequence used when the preceding fields are not unique

Examples:

- `PP-JP-SV2A-BBX-001`
- `PP-EN-MEW-ETB-001`
- `PP-SC-CS5-BOX-001`

Never reuse an SKU, even after a product is archived.

## Shopify Metafields

Create these product metafields before importing the first catalog:

| Name | Namespace and key | Type |
| --- | --- | --- |
| Product language | `pokeplay.language` | Single-line text |
| Set name | `pokeplay.set_name` | Single-line text |
| Product format | `pokeplay.format` | Single-line text |
| Release date | `pokeplay.release_date` | Date |
| Supplier | `pokeplay.supplier` | Single-line text |
| Supplier SKU | `pokeplay.supplier_sku` | Single-line text |
| Landed cost | `pokeplay.landed_cost` | Decimal |

Use the controlled language values exactly as written above. Enable storefront
filtering for language, set, and product format.

## Inventory Locations

- `Online Store Fulfillment`: default sellable stock and shipping origin.
- `Whatnot Reserve`: stock allocated to upcoming live shows; exclude this
  location from online order fulfillment.
- `Danceology Studio - Draper Pickup`: only stock physically transferred to the
  studio and eligible for customer pickup.

Do not publish or increment available inventory until products have arrived,
been counted, and passed inspection.
