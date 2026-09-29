# PokePlay Studios

The PokePlay Studios marketing site for PokePlay Live and PokePlay Store. It
runs on [vinext](https://github.com/cloudflare/vinext) and Cloudflare Workers;
Shopify is the Phase 2 commerce and inventory system of record.

## Prerequisites

- Node.js `>=22.13.0`

## Local Development

```bash
npm install
npm run dev
npm run build
```


## Commerce Launch Switch

Until Shopify passes checkout acceptance testing, store calls to action fall
back to the current PokePlay Live listings on Whatnot. Set this environment
variable in Cloudflare only when the Shopify storefront is ready:

```bash
NEXT_PUBLIC_SHOP_URL=https://shop.pokeplaystudios.com
```

Rebuild and deploy after changing the value. Do not set it to a preview or
password-protected Shopify URL.

## Phase 2 Operations

- Current project state and next milestones: `CURRENT_STATE.md`
- Requirements and progress: `specs/002-pokeplay-commerce/`
- Catalog and SKU rules: `docs/commerce/catalog-and-inventory.md`
- Receiving and fulfillment procedures: `docs/commerce/operating-playbook.md`
- Blank supplier intake sheet: `commerce/inventory-intake.csv`

Shopify owns products, purchase orders, inventory, customers, and orders. This
repository intentionally does not duplicate commerce records in D1.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build and verify the rendered site routes and commerce content
- `npm run db:generate`: generate Drizzle migrations after schema changes
