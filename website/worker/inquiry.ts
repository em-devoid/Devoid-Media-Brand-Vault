export interface InquiryEnv {
  RESEND_API_KEY?: string;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
}

type InquiryType = "creator" | "professional";

interface InquiryPayload {
  type?: unknown;
  turnstileToken?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  platforms?: unknown;
  handle?: unknown;
  company?: unknown;
  project?: unknown;
  message?: unknown;
}

interface TurnstileResult {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

const MAX_BODY_BYTES = 32_000;
const MAX_MESSAGE_LENGTH = 5_000;
const MAX_SHORT_LENGTH = 200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CREATOR_PLATFORMS = new Set([
  "Instagram",
  "Threads",
  "X (formerly Twitter)",
  "TikTok",
  "Bluesky",
  "Fansly",
  "OnlyFans",
  "All",
]);
const PROFESSIONAL_PROJECTS = new Set([
  "Brand collaboration",
  "Book em.devoid for modeling",
  "Editorial or photography",
  "Creator campaign",
  "Writing or story",
  "Press or appearance",
  "Something entirely new",
]);

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: JSON_HEADERS,
  });
}

function text(value: unknown, maxLength = MAX_SHORT_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function list(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => text(item, 80)).filter(Boolean);
}

function required(value: string) {
  return value.length > 0;
}

async function verifyTurnstile(
  request: Request,
  env: InquiryEnv,
  token: string,
  type: InquiryType,
) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return { ok: false, unavailable: true };
  }

  const form = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) form.set("remoteip", remoteIp);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: form,
    },
  );

  if (!response.ok) return { ok: false, unavailable: true };

  const result = (await response.json()) as TurnstileResult;
  const expectedAction = `${type}-inquiry`;
  const requestHostname = new URL(request.url).hostname;
  const hostnameMatches = result.hostname === requestHostname;
  const actionMatches = result.action === expectedAction;

  return {
    ok: result.success === true && hostnameMatches && actionMatches,
    unavailable: false,
  };
}

function recipientFor(type: InquiryType) {
  if (type === "creator") return "collabs@devoidmediallc.com";
  return "info@devoidmediallc.com";
}

function buildEmail(payload: {
  type: InquiryType;
  name: string;
  email: string;
  phone: string;
  platforms: string[];
  handle: string;
  company: string;
  project: string;
  message: string;
}) {
  const isCreator = payload.type === "creator";
  const recipient = recipientFor(payload.type);
  const subject = isCreator
    ? `Creator collaboration — ${payload.handle} via ${payload.platforms.join(", ")}`
    : `${payload.project} — ${payload.company}`;
  const details = isCreator
    ? [
        "NEW CREATOR COLLABORATION REQUEST",
        "",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `Preferred platforms: ${payload.platforms.join(", ")}`,
        `Social handle: ${payload.handle}`,
      ]
    : [
        "NEW PROFESSIONAL INQUIRY",
        "",
        `Name: ${payload.name}`,
        `Company / organization: ${payload.company}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `Project type: ${payload.project}`,
      ];

  return {
    from: "Devoid Media Website <forms@info.devoidmediallc.com>",
    to: [recipient],
    reply_to: payload.email,
    subject,
    text: [...details, "", "MESSAGE", payload.message].join("\n"),
  };
}

export async function handleInquiryRequest(request: Request, env: InquiryEnv) {
  const url = new URL(request.url);

  if (url.pathname === "/api/inquiry/config") {
    if (request.method !== "GET") return json({ error: "Method not allowed." }, 405);
    if (!env.TURNSTILE_SITE_KEY) {
      return json({ error: "Form verification is temporarily unavailable." }, 503);
    }
    return json({ siteKey: env.TURNSTILE_SITE_KEY });
  }

  if (url.pathname !== "/api/inquiry") return null;
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY) {
    return json({ error: "The inquiry service is temporarily unavailable." }, 503);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) return json({ error: "Request is too large." }, 413);

  let raw = "";
  let input: InquiryPayload;
  try {
    raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return json({ error: "Request is too large." }, 413);
    input = JSON.parse(raw) as InquiryPayload;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const type = input.type === "creator" || input.type === "professional" ? input.type : null;
  const turnstileToken = text(input.turnstileToken, 2_048);
  const name = text(input.name);
  const email = text(input.email).toLowerCase();
  const phone = text(input.phone, 50);
  const platforms = list(input.platforms).filter((item) => CREATOR_PLATFORMS.has(item));
  const handle = text(input.handle, 100);
  const company = text(input.company);
  const project = text(input.project);
  const message = text(input.message, MAX_MESSAGE_LENGTH);

  if (!type || !required(name) || !EMAIL_PATTERN.test(email) || !required(message)) {
    return json({ error: "Complete every required field before sending." }, 400);
  }
  if (type === "creator" && (!required(handle) || platforms.length === 0)) {
    return json({ error: "Choose a platform and provide your social handle." }, 400);
  }
  if (
    type === "professional" &&
    (!required(company) || !PROFESSIONAL_PROJECTS.has(project))
  ) {
    return json({ error: "Provide your company and select a project type." }, 400);
  }
  if (!turnstileToken) {
    return json({ error: "Complete the verification before sending." }, 400);
  }

  try {
    const verification = await verifyTurnstile(request, env, turnstileToken, type);
    if (!verification.ok) {
      const status = verification.unavailable ? 503 : 403;
      const error = verification.unavailable
        ? "Verification is temporarily unavailable. Please try again."
        : "Verification expired or failed. Please try again.";
      return json({ error }, status);
    }

    const emailPayload = buildEmail({
      type,
      name,
      email,
      phone,
      platforms,
      handle,
      company,
      project,
      message,
    });
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
        "idempotency-key": crypto.randomUUID(),
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected an inquiry email", resendResponse.status);
      return json({ error: "Your inquiry could not be sent. Please try again." }, 502);
    }

    return json({ ok: true, message: "Your inquiry is on its way." });
  } catch (error) {
    console.error("Inquiry submission failed", error instanceof Error ? error.message : error);
    return json({ error: "Your inquiry could not be sent. Please try again." }, 500);
  }
}
