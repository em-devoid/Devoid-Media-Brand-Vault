"use client";

import { FormEvent, useState } from "react";

type InquiryType = "creator" | "professional";

const creatorPlatforms = ["Instagram", "TikTok", "X / Twitter", "OnlyFans", "Fansly", "All / same handle"];

export default function CollaboratePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("creator");

  const submitInquiry = (event: FormEvent<HTMLFormElement>, type: InquiryType) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const isCreator = type === "creator";
    const recipient = isCreator ? "collabs@devoidmediallc.com" : "info@devoidmediallc.com";
    const subject = isCreator
      ? `Creator collaboration — ${data.get("handle")} via ${data.get("platform")}`
      : `Professional inquiry — ${data.get("company")} — ${data.get("project")}`;
    const details = isCreator
      ? [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone") || "Not provided"}`,
          `Preferred platform: ${data.get("platform")}`,
          `Social handle: ${data.get("handle")}`,
        ]
      : [
          `Name: ${data.get("name")}`,
          `Company / organization: ${data.get("company")}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone") || "Not provided"}`,
          `Project type: ${data.get("project")}`,
        ];
    const body = [...details, "", `${data.get("message")}`].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <header className="header collaboration-header">
        <a className="brand" href="/" aria-label="Devoid Media home"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="/#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a href="/#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="/#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</a>
        </nav>
        <a className="header-cta" href="/">Back to the studio <span>↙</span></a>
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
                onClick={() => setInquiryType("creator")}
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
                onClick={() => setInquiryType("professional")}
              >
                <span>02</span>
                <strong>Professional inquiry</strong>
                <small>Brands, businesses, press, publications, and project partners.</small>
              </button>
            </div>

            <div className="contact-direct">
              <p><span>Creator collabs</span><a href="mailto:collabs@devoidmediallc.com">collabs@devoidmediallc.com</a></p>
              <p><span>Business & press</span><a href="mailto:info@devoidmediallc.com">info@devoidmediallc.com</a></p>
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
              <fieldset className="platform-picker">
                <legend>Preferred platform *</legend>
                <p>Choose “All / same handle” when one username works everywhere.</p>
                <div className="platform-options">
                  {creatorPlatforms.map((platform) => (
                    <label className="platform-option" key={platform}>
                      <input type="radio" name="platform" value={platform} required={platform === creatorPlatforms[0]} />
                      <span>{platform}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label>Social handle *<input name="handle" required placeholder="@yourhandle" /></label>
              <label>What do you want to create? *<textarea name="message" required rows={5} placeholder="Tell me about you, the collaboration, timing, location, and the energy you want to create…" /></label>
              <button className="button primary" type="submit">Send collab request <span>↗</span></button>
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
              <label>What are we creating?
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
              <button className="button primary" type="submit">Send professional inquiry <span>↗</span></button>
            </form>
          </div>
        </section>
      </main>

      <footer><div className="footer-wordmark"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></div><p>Where authenticity is beautifully ruthless</p><div><span>© 2026 Devoid Media LLC</span><span>em.devoid is a registered trade name</span><a href="/">Back to home ↑</a></div></footer>
    </>
  );
}
