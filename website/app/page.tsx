"use client";

import { FormEvent, useEffect, useState } from "react";

const works = [
  { src: "/media/editorial-wide.jpg", title: "Crimson Study", kind: "Boudoir / Art Direction", wide: true },
  { src: "/media/editorial-standing.jpg", title: "After Hours", kind: "Editorial Modeling" },
  { src: "/media/editorial-bound.png", title: "Bound in Red", kind: "Visual Storytelling" },
  { src: "/media/editorial-fishnets.png", title: "Second Skin", kind: "Self-Portraiture", wide: true },
  { src: "/media/editorial-splits.png", title: "Velvet Room", kind: "Cinematic Portraiture" },
  { src: "/media/editorial-arch.jpg", title: "Nocturne", kind: "Intimate Editorial" },
];

const services = [
  ["01", "Modeling", "Alternative, boudoir, editorial, promotional, and character-led work."],
  ["02", "Content", "Premium photo and video assets, UGC, product imagery, and campaign concepts."],
  ["03", "Story", "Dark romance, literary shorts, voice, and multidisciplinary narrative projects."],
  ["04", "Direction", "Visual worlds, campaign art direction, photography, and creative partnerships."],
];

type InquiryType = "creator" | "professional";

const creatorPlatforms = ["Instagram", "TikTok", "X / Twitter", "OnlyFans", "Fansly", "All / same handle"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("creator");

  useEffect(() => {
    const restoreEntry = requestAnimationFrame(() => {
      setAgeConfirmed(sessionStorage.getItem("devoid-entry") === "confirmed");
    });

    return () => cancelAnimationFrame(restoreEntry);
  }, []);

  const enter = () => {
    sessionStorage.setItem("devoid-entry", "confirmed");
    setAgeConfirmed(true);
  };

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
      {!ageConfirmed && (
        <div className="entry" role="dialog" aria-modal="true" aria-labelledby="entry-title">
          <div className="entry-glow" />
          <img src="/media/logo-main.png" alt="Devoid Media" />
          <div className="entry-copy">
            <p className="eyebrow entry-kicker">Independent creative studio · 21+</p>
            <h1 id="entry-title">Enter the Void</h1>
            <p className="entry-notice">This site contains mature artistic themes. By entering, you confirm you are at least 21 years old.</p>
          </div>
          <button onClick={enter}>I am 21+</button>
        </div>
      )}

      <header className="header">
        <a className="brand" href="#top" aria-label="Devoid Media home"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Collaborate</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <span>↗</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="eyebrow">Devoid Media LLC · The studio of em.devoid</p>
            <h1 className="hero-title" aria-label="Art for the parts of us that refuse to disappear.">
              <span className="hero-title-desktop" aria-hidden="true">
                <span>Art for the parts of us</span>
                <span>that refuse to disappear.</span>
              </span>
              <span className="hero-title-mobile" aria-hidden="true">
                <span>Art for the</span>
                <span>parts of us</span>
                <span>that refuse to</span>
                <span>disappear.</span>
              </span>
            </h1>
            <p className="lede">Boudoir. Dark romance. Intimate storytelling. A creative practice built on truth, freedom, and expression without apology.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Enter the archive</a>
              <a className="text-link" href="#philosophy">Discover the philosophy <span>↓</span></a>
            </div>
          </div>
          <div className="hero-index"><span>Est.</span><strong>2026</strong></div>
        </section>

        <section className="marquee" aria-label="Creative disciplines"><div>Boudoir <i>✦</i> Dark Romance <i>✦</i> Modeling <i>✦</i> Visual Storytelling <i>✦</i> Creative Direction <i>✦</i></div></section>

        <section className="philosophy" id="philosophy">
          <div className="section-number">01 / Philosophy</div>
          <div className="philosophy-copy">
            <p className="eyebrow">The founding truth</p>
            <h2>Devoid never meant empty.<br /><em>It meant free.</em></h2>
            <div className="philosophy-grid">
              <p className="large">We do not create mirrors to reflect ourselves. We create them so others can recognize themselves.</p>
              <div><p>Devoid Media does not exist to manufacture identity. It exists to protect the freedom to express it—to give language and image to truths people have lived long before they had words for them.</p><p>Truth before illusion. Originality without performance. Work refined until it could only have come from us.</p></div>
            </div>
          </div>
          <img className="philosophy-mark" src="/media/logo-mark.png" alt="" />
        </section>

        <section className="work" id="work">
          <div className="section-head"><div><p className="eyebrow">02 / Selected work</p><h2 className="ghost-section-title">Archives of<br />the void</h2></div><p>Every frame is part confession, part invitation: come closer, look longer, recognize something.</p></div>
          <div className="work-grid">
            {works.map((work, index) => <figure className={work.wide ? "work-card wide" : "work-card"} key={work.title}>
              <div className="image-wrap"><img src={work.src} alt={`${work.title} — ${work.kind}`} /><span>0{index + 1}</span></div>
              <figcaption><div><p>{work.kind}</p><h3>{work.title}</h3></div><span>View study ↗</span></figcaption>
            </figure>)}
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="studio-photo"><img src="/media/portrait.jpg" alt="em.devoid in a red editorial portrait" /></div>
          <div className="studio-copy">
            <p className="eyebrow">03 / The artist & the studio</p>
            <h2 className="ghost-section-title">One vision.<br />Many forms.</h2>
            <p className="intro">em.devoid is the artist. Devoid Media LLC is the studio built to protect and expand the work.</p>
            <p>Across photography, modeling, adult content, literary fiction, and creative direction, the medium changes. The standard does not: honest work, made with intention, refined without complacency.</p>
            <a className="text-link" href="#contact">Work with Devoid Media <span>↗</span></a>
          </div>
        </section>

        <section className="services">
          <div className="section-head compact"><div><p className="eyebrow">04 / Capabilities</p><h2 className="ghost-section-title">Built to create</h2></div><p>For aligned brands, photographers, publications, artists, and audiences.</p></div>
          <div className="service-list">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></article>)}</div>
        </section>

        <section className="statement">
          <img src="/media/editorial-wide.jpg" alt="Crimson boudoir editorial" />
          <div className="statement-content">
            <p className="eyebrow">The Promise</p>
            <blockquote>
              <strong>We do not create to perform an identity.</strong>
              <strong>We create to express one.</strong>
            </blockquote>
            <div className="statement-lines">
              <p className="statement-belonging">
                For everyone who has ever believed they had to become someone else in order to belong… <em>You never had to stop being you.</em>
              </p>
              <p className="statement-seen">Let yourself be seen.</p>
              <p className="statement-release">
                Devoid Media isn’t to help <em>find</em> something lost.
              </p>
              <p className="statement-release">
                It’s to help <em>free</em> what has been buried.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">05 / Collaborate</p>
            <h2>Choose your<br />way in.</h2>
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
              <h3>{inquiryType === "creator" ? "Let’s make something together." : "Bring me the idea you can’t shake."}</h3>
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

      <footer><div className="footer-wordmark"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></div><p>Where authenticity is beautifully ruthless</p><div><span>© 2026 Devoid Media LLC</span><span>em.devoid is a registered trade name</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
