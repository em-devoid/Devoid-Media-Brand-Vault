"use client";

import Link from "next/link";
import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";

type InquiryType = "creator" | "professional";
type SubmissionState = "idle" | "submitting" | "success" | "error";

interface TurnstileApi {
  render(
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "dark";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ): string;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const creatorPlatforms = [
  "Instagram",
  "Threads",
  "X (formerly Twitter)",
  "TikTok",
  "Bluesky",
  "Fansly",
  "OnlyFans",
  "All",
];

function TurnstileField({
  siteKey,
  action,
  ready,
  onToken,
}: {
  siteKey: string;
  action: string;
  ready: boolean;
  onToken: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready || !siteKey || !containerRef.current || !window.turnstile) return;

    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      theme: "dark",
      callback: onToken,
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken(""),
    });

    return () => window.turnstile?.remove(widgetId);
  }, [action, onToken, ready, siteKey]);

  return (
    <div className="turnstile-field">
      <div ref={containerRef} />
      {!ready || !siteKey ? <p className="turnstile-loading">Loading secure verification…</p> : null}
    </div>
  );
}

export default function CollaboratePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("creator");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [platformError, setPlatformError] = useState(false);
  const [siteKey, setSiteKey] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [verificationKey, setVerificationKey] = useState(0);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/inquiry/config", { signal: controller.signal })
      .then(async (response) => {
        const result = (await response.json()) as { siteKey?: string; error?: string };
        if (!response.ok || !result.siteKey) {
          throw new Error(result.error || "Form verification is unavailable.");
        }
        setSiteKey(result.siteKey);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setSubmissionState("error");
        setSubmissionMessage("Secure verification could not load. Please refresh and try again.");
      });

    return () => controller.abort();
  }, []);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((current) =>
      current.includes(platform)
        ? current.filter((item) => item !== platform)
        : [...current, platform],
    );
    setPlatformError(false);
  };

  const chooseInquiryType = (type: InquiryType) => {
    setInquiryType(type);
    setPlatformError(false);
    setTurnstileToken("");
    setVerificationKey((current) => current + 1);
    setSubmissionState("idle");
    setSubmissionMessage("");
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>, type: InquiryType) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const isCreator = type === "creator";
    const platforms = data.getAll("platform").map(String);

    if (isCreator && platforms.length === 0) {
      setPlatformError(true);
      document.getElementById("platform-picker")?.focus();
      return;
    }

    if (!turnstileToken) {
      setSubmissionState("error");
      setSubmissionMessage("Complete the secure verification before sending.");
      return;
    }

    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type,
          turnstileToken,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          platforms,
          handle: data.get("handle"),
          company: data.get("company"),
          project: data.get("project"),
          message: data.get("message"),
        }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error || "Your inquiry could not be sent.");

      form.reset();
      setSelectedPlatforms([]);
      setTurnstileToken("");
      setVerificationKey((current) => current + 1);
      setSubmissionState("success");
      setSubmissionMessage(result.message || "Your inquiry is on its way.");
    } catch (error) {
      setTurnstileToken("");
      setVerificationKey((current) => current + 1);
      setSubmissionState("error");
      setSubmissionMessage(error instanceof Error ? error.message : "Your inquiry could not be sent.");
    }
  };

  return (
    <>
      <header className="header collaboration-header">
        <Link className="brand" href="/" aria-label="Devoid Media home"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></Link>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <Link href="/#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</Link>
          <Link href="/#work" onClick={() => setMenuOpen(false)}>Selected work</Link>
          <Link href="/#studio" onClick={() => setMenuOpen(false)}>Studio</Link>
          <Link href="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</Link>
        </nav>
        <Link className="header-cta" href="/">Back to the studio <span>↙</span></Link>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      </header>

      <main className="collaboration-page">
        <section className="contact" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">Collaborate / Devoid Media</p>
            <h1>Choose your<br />way in.</h1>
            <p>Two doors, one studio. Choose the path that best matches who you are and what you want to create.</p>

            <div className="contact-paths" role="tablist" aria-label="Choose an inquiry type">
              <button
                className={`contact-path ${inquiryType === "creator" ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={inquiryType === "creator"}
                aria-controls="creator-inquiry"
                onClick={() => chooseInquiryType("creator")}
              >
                <span>01</span>
                <strong>Creator collaboration</strong>
                <small>Social media, OnlyFans, Fansly, and individual collabs.</small>
              </button>
              <button
                className={`contact-path ${inquiryType === "professional" ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={inquiryType === "professional"}
                aria-controls="professional-inquiry"
                onClick={() => chooseInquiryType("professional")}
              >
                <span>02</span>
                <strong>Professional inquiry</strong>
                <small>Brands, businesses, press, publications, and project partners.</small>
              </button>
            </div>

            <div className="contact-direct">
              <p><span>Creator collabs</span><a href="mailto:collabs@devoidmediallc.com">collabs@devoidmediallc.com</a></p>
              <p><span>Business</span><a href="mailto:partnerships@devoidmediallc.com">partnerships@devoidmediallc.com</a></p>
              <p><span>Press</span><a href="mailto:press@devoidmediallc.com">press@devoidmediallc.com</a></p>
            </div>
          </div>

          <div className="contact-panel">
            <div className="inquiry-heading">
              <p className="eyebrow">{inquiryType === "creator" ? "Creator / individual" : "Brand / business / press"}</p>
              <h2>{inquiryType === "creator" ? "Let’s make something together." : "Bring me the idea you can’t shake."}</h2>
              <p>{inquiryType === "creator"
                ? "Tell me where you create, how to find you, and what kind of collaboration you have in mind."
                : "Tell me who you represent, what you are building, and where em.devoid or Devoid Media fits into the vision."}</p>
            </div>

            <form
              id="creator-inquiry"
              className="inquiry-form"
              onSubmit={(event) => submitInquiry(event, "creator")}
              hidden={inquiryType !== "creator"}
            >
              <div className="form-row">
                <label>Your name *<input name="name" autoComplete="name" required placeholder="Your name" /></label>
                <label>Email address *<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
              </div>
              <label>Phone number <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-5555" /></label>
              <fieldset
                className={`platform-picker ${platformError ? "has-error" : ""}`}
                id="platform-picker"
                tabIndex={-1}
                aria-describedby="platform-guidance platform-error"
              >
                <legend>Preferred platforms *</legend>
                <p id="platform-guidance">Choose “All” when one username works everywhere.</p>
                <div className="platform-options">
                  {creatorPlatforms.map((platform) => (
                    <label className="platform-option" key={platform}>
                      <input
                        type="checkbox"
                        name="platform"
                        value={platform}
                        checked={selectedPlatforms.includes(platform)}
                        onChange={() => togglePlatform(platform)}
                      />
                      <span className="platform-check" aria-hidden="true" />
                      <span className="platform-name">{platform}</span>
                    </label>
                  ))}
                </div>
                <p className="platform-error" id="platform-error" role="alert" aria-live="polite">
                  {platformError ? "Choose at least one preferred platform." : ""}
                </p>
              </fieldset>
              <label>Social handle *<input name="handle" required placeholder="@yourhandle" /></label>
              <label>What do you want to create? *<textarea name="message" required rows={5} placeholder="Tell me about you, the collaboration, timing, location, and the energy you want to create…" /></label>
              {inquiryType === "creator" ? (
                <TurnstileField
                  key={`creator-${verificationKey}`}
                  siteKey={siteKey}
                  action="creator-inquiry"
                  ready={turnstileReady}
                  onToken={setTurnstileToken}
                />
              ) : null}
              <button className="button primary" type="submit" disabled={submissionState === "submitting"}>
                {submissionState === "submitting" ? "Sending…" : "Send collab request"} <span>↗</span>
              </button>
            </form>

            <form
              id="professional-inquiry"
              className="inquiry-form"
              onSubmit={(event) => submitInquiry(event, "professional")}
              hidden={inquiryType !== "professional"}
            >
              <div className="form-row">
                <label>Your name *<input name="name" autoComplete="name" required placeholder="Your name" /></label>
                <label>Company / organization *<input name="company" autoComplete="organization" required placeholder="Company or organization" /></label>
              </div>
              <div className="form-row">
                <label>Email address *<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
                <label>Phone number <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-5555" /></label>
              </div>
              <label>What are we creating? *
                <select name="project" required defaultValue="">
                  <option value="" disabled>Select a project type</option>
                  <option>Brand collaboration</option>
                  <option>Book em.devoid for modeling</option>
                  <option>Editorial or photography</option>
                  <option>Creator campaign</option>
                  <option>Writing or story</option>
                  <option>Press or appearance</option>
                  <option>Something entirely new</option>
                </select>
              </label>
              <label>Tell me about the vision *<textarea name="message" required rows={5} placeholder="The idea, timing, scope, and why em.devoid or Devoid Media…" /></label>
              {inquiryType === "professional" ? (
                <TurnstileField
                  key={`professional-${verificationKey}`}
                  siteKey={siteKey}
                  action="professional-inquiry"
                  ready={turnstileReady}
                  onToken={setTurnstileToken}
                />
              ) : null}
              <button className="button primary" type="submit" disabled={submissionState === "submitting"}>
                {submissionState === "submitting" ? "Sending…" : "Send professional inquiry"} <span>↗</span>
              </button>
            </form>

            <p
              className={`form-status ${submissionState}`}
              role={submissionState === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {submissionMessage}
            </p>
          </div>
        </section>
      </main>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
        onReady={() => setTurnstileReady(true)}
      />

      <footer><div className="footer-wordmark"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></div><p>Where authenticity is beautifully ruthless</p><div><span>© 2026 Devoid Media LLC</span><span>em.devoid is a registered trade name</span><Link href="/">Back to home ↑</Link></div></footer>
    </>
  );
}
