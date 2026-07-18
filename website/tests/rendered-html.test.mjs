import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  return (await import(workerUrl.href)).default;
}

async function render(path = "/") {
  const worker = await loadWorker();

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
  assert.match(html, /href="\/collaborate"/);
  assert.match(html, />Portfolio<\/a>/);
  assert.match(html, /02 \/ Portfolio/);
  assert.match(html, /Every frame is part confession, part invitation⎯/);
  assert.match(html, /come closer, look longer\.\.\. recognize something\./);
  assert.doesNotMatch(html, />Selected work<\/a>/i);
  assert.doesNotMatch(html, /02 \/ Selected work/i);
  assert.doesNotMatch(html, /View study/i);
  assert.doesNotMatch(html, /<b>↗<\/b>/);
  assert.match(html, /Where authenticity is beautifully ruthless/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("server-renders the dedicated collaboration page", async () => {
  const response = await render("/collaborate");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Creator collaboration/);
  assert.match(html, /Professional inquiry/);
  assert.match(html, /Choose “All” when one username works everywhere\./);
  assert.doesNotMatch(html, /All \/ same handle/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /X \(formerly Twitter\)/);
  assert.match(html, /Bluesky/);
  assert.match(html, /Book em\.devoid for modeling/);
  assert.match(html, /collabs@devoidmediallc\.com/);
  assert.match(html, /partnerships@devoidmediallc\.com/);
  assert.match(html, /press@devoidmediallc\.com/);
  assert.match(html, /Loading secure verification/);
});

test("exposes only the public Turnstile site key", async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request("https://devoidmediallc.com/api/inquiry/config"),
    { TURNSTILE_SITE_KEY: "public-test-key" },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { siteKey: "public-test-key" });
});

test("rejects inquiries without a Turnstile token", async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request("https://devoidmediallc.com/api/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        type: "creator",
        name: "Test Creator",
        email: "creator@example.com",
        platforms: ["Instagram"],
        handle: "@creator",
        message: "A real collaboration request.",
      }),
    }),
    { RESEND_API_KEY: "secret", TURNSTILE_SECRET_KEY: "turnstile-secret" },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /verification/i);
});

test("verifies and routes creator inquiries through Resend", async (t) => {
  const originalFetch = globalThis.fetch;
  const requests = [];
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  globalThis.fetch = async (input, init) => {
    const url = String(input);
    requests.push({ url, init });

    if (url.includes("turnstile/v0/siteverify")) {
      return Response.json({
        success: true,
        hostname: "devoidmediallc.com",
        action: "creator-inquiry",
      });
    }
    if (url === "https://api.resend.com/emails") {
      return Response.json({ id: "email-test-id" });
    }
    throw new Error(`Unexpected fetch: ${url}`);
  };

  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request("https://devoidmediallc.com/api/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        type: "creator",
        turnstileToken: "verified-token",
        name: "Test Creator",
        email: "creator@example.com",
        platforms: ["Instagram", "Fansly"],
        handle: "@creator",
        message: "A real collaboration request.",
      }),
    }),
    { RESEND_API_KEY: "resend-secret", TURNSTILE_SECRET_KEY: "turnstile-secret" },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.equal(requests.length, 2);
  const verificationBody = requests[0].init.body;
  assert.equal(verificationBody.get("response"), "verified-token");
  const email = JSON.parse(requests[1].init.body);
  assert.deepEqual(email.to, ["collabs@devoidmediallc.com"]);
  assert.equal(email.from, "Devoid Media Website <forms@info.devoidmediallc.com>");
  assert.equal(email.reply_to, "creator@example.com");
});

test("routes business and press inquiries to the shared info inbox", async (t) => {
  const originalFetch = globalThis.fetch;
  const recipients = [];
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url.includes("turnstile/v0/siteverify")) {
      return Response.json({
        success: true,
        hostname: "devoidmediallc.com",
        action: "professional-inquiry",
      });
    }
    if (url === "https://api.resend.com/emails") {
      recipients.push(JSON.parse(init.body).to);
      return Response.json({ id: "email-test-id" });
    }
    throw new Error(`Unexpected fetch: ${url}`);
  };

  const worker = await loadWorker();
  for (const project of ["Brand collaboration", "Press or appearance"]) {
    const response = await worker.fetch(
      new Request("https://devoidmediallc.com/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "professional",
          turnstileToken: `verified-${project}`,
          name: "Test Partner",
          company: "Test Company",
          email: "partner@example.com",
          project,
          message: "A professional inquiry.",
        }),
      }),
      { RESEND_API_KEY: "resend-secret", TURNSTILE_SECRET_KEY: "turnstile-secret" },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
  }

  assert.deepEqual(recipients, [
    ["info@devoidmediallc.com"],
    ["info@devoidmediallc.com"],
  ]);
});

test("keeps the final brand typography wired to local assets", async () => {
  const [page, collaborationPage, layout, entryCss, heroCss, statementCss, footerCss, contactCss, portfolioCss] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/collaborate/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/entry-heading.css", import.meta.url), "utf8"),
    readFile(new URL("../app/hero-heading.css", import.meta.url), "utf8"),
    readFile(new URL("../app/statement-copy.css", import.meta.url), "utf8"),
    readFile(new URL("../app/footer-tagline.css", import.meta.url), "utf8"),
    readFile(new URL("../app/contact-forms.css", import.meta.url), "utf8"),
    readFile(new URL("../app/portfolio-grid.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="entry-copy"/);
  assert.match(page, /work-column work-column-/);
  assert.match(page, /title: "Velvet Room"[\s\S]*?format: "landscape"/);
  assert.match(page, /Where authenticity is beautifully ruthless/);
  assert.match(page, /href="\/collaborate"/);
  assert.match(collaborationPage, /collabs@devoidmediallc\.com/);
  assert.match(collaborationPage, /partnerships@devoidmediallc\.com/);
  assert.match(collaborationPage, /press@devoidmediallc\.com/);
  assert.match(collaborationPage, /fetch\("\/api\/inquiry"/);
  assert.doesNotMatch(collaborationPage, /window\.location\.href\s*=\s*`mailto:/);
  assert.match(layout, /import "\.\/footer-tagline\.css"/);
  assert.match(layout, /import "\.\/portfolio-grid\.css"/);
  assert.match(entryCss, /font-family:\s*"Waters Gothic"/);
  assert.match(heroCss, /font-family:\s*"Hanford Script"/);
  assert.match(heroCss, /url\("\/fonts\/hanford-script\.ttf"\)/);
  assert.match(statementCss, /font-family:\s*"Hanford Script"/);
  assert.match(statementCss, /url\("\/fonts\/hanford-script\.ttf"\)/);
  assert.match(statementCss, /font-family:\s*"Elemental"/);
  assert.match(footerCss, /font-family:\s*"ParmaPetit"/);
  assert.match(footerCss, /url\("\/fonts\/parma-petit-italic\.ttf"\)/);
  assert.match(contactCss, /\.contact-intro h1[\s\S]*var\(--display\)/);
  assert.match(contactCss, /clamp\(1\.65rem,\s*2\.5vw,\s*2\.25rem\)[\s\S]*\/ 1\.08 var\(--display\)/);
  assert.match(contactCss, /\.platform-options[\s\S]*grid-template-columns:\s*repeat\(4/);
  assert.match(portfolioCss, /width:\s*clamp\(420px, 30vw, 560px\)/);
});
