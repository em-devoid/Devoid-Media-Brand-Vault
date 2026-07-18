"use client";

import { useEffect, useState } from "react";

const works = [
  { src: "/media/editorial-wide.jpg", title: "Crimson Study", kind: "Boudoir / Art Direction", format: "landscape" },
  { src: "/media/editorial-standing.jpg", title: "After Hours", kind: "Editorial Modeling", format: "portrait" },
  { src: "/media/editorial-bound.png", title: "Bound in Red", kind: "Visual Storytelling", format: "portrait" },
  { src: "/media/editorial-fishnets.png", title: "Second Skin", kind: "Self-Portraiture", format: "landscape" },
  { src: "/media/editorial-splits.png", title: "Velvet Room", kind: "Cinematic Portraiture", format: "landscape" },
  { src: "/media/editorial-arch.jpg", title: "Nocturne", kind: "Intimate Editorial", format: "portrait" },
];

const workColumns = [
  [0, 2, 4],
  [1, 3, 5],
];

const services = [
  ["01", "Modeling", "Alternative, boudoir, editorial, promotional, and character-led work."],
  ["02", "Content", "Premium photo and video assets, UGC, product imagery, and campaign concepts."],
  ["03", "Story", "Dark romance, literary shorts, voice, and multidisciplinary narrative projects."],
  ["04", "Direction", "Visual worlds, campaign art direction, photography, and creative partnerships."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

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

  return (
    <>
      {!ageConfirmed && (
        <div className="entry" role="dialog" aria-modal="true" aria-labelledby="entry-title">
          <div className="entry-glow" />
          <img src="/media/logo-main.png" alt="Devoid Media" />
          <div className="entry-copy">
            <p className="eyebrow entry-kicker">Independent creative studio · 21+</p>
            <h1 id="entry-title" aria-label="Enter the Void">Enter the <span className="accent-text">Void</span></h1>
            <p className="entry-notice">This site contains mature artistic themes. By entering, you confirm you are at least 21 years old.</p>
          </div>
          <button onClick={enter}>I am 21+</button>
        </div>
      )}

      <header className="header">
        <a className="brand" href="#top" aria-label="Devoid Media home"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</a>
        </nav>
        <a className="header-cta" href="/collaborate">Start a project <span>↗</span></a>
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
            <p className="lede">Boudoir. <span className="accent-text">Dark romance.</span> Intimate storytelling. A creative practice built on truth, freedom, and expression without apology.</p>
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
              <p className="large">We do not create mirrors to reflect ourselves. We create them so others can <span className="accent-text">recognize themselves.</span></p>
              <div><p>Devoid Media does not exist to manufacture identity. It exists to protect the <span className="accent-text">freedom to express it</span>—to give language and image to truths people have lived long before they had words for them.</p><p><span className="accent-text">Truth before illusion.</span> Originality without performance. Work refined until it could only have come from us.</p></div>
            </div>
          </div>
          <img className="philosophy-mark" src="/media/logo-mark.png" alt="" />
        </section>

        <section className="work" id="work">
          <div className="section-head"><div><p className="eyebrow">02 / Portfolio</p><h2 className="ghost-section-title">Archives of<br /><span className="accent-text">the void</span></h2></div><p className="portfolio-intro">Every frame is part confession, part invitation⎯<br /><span className="accent-text">come closer, look longer... recognize something.</span></p></div>
          <div className="work-grid">
            {workColumns.map((column, columnIndex) => (
              <div className={`work-column work-column-${columnIndex + 1}`} key={`work-column-${columnIndex + 1}`}>
                {column.map((workIndex) => {
                  const work = works[workIndex];
                  return <figure className={`work-card work-${workIndex + 1} ${work.format}`} key={work.title}>
                    <div className="image-wrap"><img src={work.src} alt={`${work.title} — ${work.kind}`} /><span>0{workIndex + 1}</span></div>
                    <figcaption><div><p>{work.kind}</p><h3>{work.title}</h3></div></figcaption>
                  </figure>;
                })}
              </div>
            ))}
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="studio-photo"><img src="/media/portrait.jpg" alt="em.devoid in a red editorial portrait" /></div>
          <div className="studio-copy">
            <p className="eyebrow">03 / The artist & the studio</p>
            <h2 className="ghost-section-title">One vision.<br /><span className="accent-text">Many forms.</span></h2>
            <p className="intro"><span className="accent-text">em.devoid is the artist.</span> Devoid Media is the studio built to protect and expand the work.</p>
            <p>Across photography, modeling, adult content, literary fiction, and creative direction, the medium changes. <span className="accent-text">The standard does not:</span> honest work made with intention, refined without losing artistic identity.</p>
            <a className="text-link" href="/collaborate">Work with Devoid Media <span>↗</span></a>
          </div>
        </section>

        <section className="services">
          <div className="section-head compact"><div><p className="eyebrow">04 / Capabilities</p><h2 className="ghost-section-title">Built to <span className="accent-text">create</span></h2></div><p>For aligned brands, photographers, publications, <span className="accent-text">artists, and audiences.</span></p></div>
          <div className="service-list">{services.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="statement">
          <img src="/media/editorial-wide.jpg" alt="Crimson boudoir editorial" />
          <div className="statement-content">
            <p className="eyebrow">The Promise</p>
            <blockquote>
              <strong>We do not create to perform an identity.</strong>
              <strong className="accent-text">We create to express one.</strong>
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

      </main>

      <footer><div className="footer-wordmark"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></div><p>Where authenticity is <span className="accent-text">beautifully ruthless</span></p><div><span>© 2026 Devoid Media LLC</span><span>em.devoid is a registered trade name</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
