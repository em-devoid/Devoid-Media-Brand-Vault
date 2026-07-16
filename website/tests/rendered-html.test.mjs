import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the Devoid Media homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Devoid Media — Art Without Apology<\/title>/i);
  assert.match(html, /role="dialog"/);
  assert.match(html, /Independent creative studio · 21\+/);
  assert.match(html, /Enter the Void/);
  assert.match(html, /I am 21\+/);
  assert.match(html, /Art for the parts of us that refuse to disappear\./);
  assert.match(html, /We do not create to perform an identity\./);
  assert.match(html, /Let yourself be seen\./);
  assert.match(html, /Where authenticity is beautifully ruthless/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps the final brand typography wired to local assets", async () => {
  const [page, layout, entryCss, statementCss, footerCss] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/entry-heading.css", import.meta.url), "utf8"),
    readFile(new URL("../app/statement-copy.css", import.meta.url), "utf8"),
    readFile(new URL("../app/footer-tagline.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="entry-copy"/);
  assert.match(page, /Where authenticity is beautifully ruthless/);
  assert.match(layout, /import "\.\/footer-tagline\.css"/);
  assert.match(entryCss, /font-family:\s*"Waters Gothic"/);
  assert.match(statementCss, /font-family:\s*"Hanford Script"/);
  assert.match(statementCss, /url\("\/fonts\/hanford-script\.ttf"\)/);
  assert.match(statementCss, /font-family:\s*"Elemental"/);
  assert.match(footerCss, /font-family:\s*"ParmaPetit"/);
  assert.match(footerCss, /url\("\/fonts\/parma-petit-italic\.ttf"\)/);
});
