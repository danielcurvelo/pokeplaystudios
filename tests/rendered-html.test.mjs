import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the PokePlay homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /PokePlay Studios \| Pokemon Cards, Live Auctions &amp; Drops/);
  assert.match(html, /The game room for Pokemon card collectors\./);
  assert.match(html, /https:\/\/www\.whatnot\.com\/user\/pokeplaylive/);
  assert.match(html, /PokePlay Studios/);
  assert.match(html, /not affiliated with, endorsed by, or sponsored by Pokemon/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("server-renders core SEO routes", async () => {
  for (const path of ["/live", "/shop", "/contact"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /PokePlay/);
    assert.match(html, /https:\/\/www\.whatnot\.com\/user\/pokeplaylive/);
  }
});
