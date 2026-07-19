"use client";

import Link from "next/link";
import { useState } from "react";

const mainChannels = [
  { name: "Instagram", handle: "@em.devoid", href: "https://instagram.com/em.devoid", icon: "/media/socials/instagram.svg" },
  { name: "Threads", handle: "@emdevoid", href: "https://threads.com/emdevoid", icon: "/media/socials/threads.svg" },
  { name: "X", handle: "@emdevoid", href: "https://x.com/emdevoid", icon: "/media/socials/x.svg" },
  { name: "TikTok", handle: "@em.devoid", href: "https://www.tiktok.com/@em.devoid", icon: "/media/socials/tiktok.svg" },
  { name: "Bluesky", handle: "emdevoid.bsky.social", href: "https://bsky.app/profile/emdevoid.bsky.social", icon: "/media/socials/bluesky.svg" },
  { name: "Fansly", handle: "@emdevoid", href: "https://fansly.com/emdevoid", icon: "/media/socials/fansly.png" },
  { name: "OnlyFans", handle: "@em.devoid", href: "https://onlyfans.com/em.devoid", icon: "/media/socials/onlyfans.svg" },
  { name: "Linktree", handle: "All links", href: "https://linktr.ee/em.devoid", icon: "/media/socials/linktree.svg" },
];

const friendLinks = [
  {
    name: "Ghost Orgy・Nine Sisters, One Orchard",
    label: "Official website",
    href: "https://www.unholyghost.org",
    icon: "/media/socials/ghost-orgy.png",
    variant: "website",
  },
  {
    name: "Unholy Ghost・Containment Broken",
    label: "Listen on Spotify",
    href: "https://open.spotify.com/artist/1SslPfozi6GhP2JbSNoLTB?si=df_xI4TWQm6ziQ9uE1qYYw",
    icon: "/media/socials/ghost-orgy.png",
    variant: "spotify",
  },
];

export default function SocialsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header social-header">
        <Link className="brand" href="/" aria-label="Devoid Media home"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></Link>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <Link href="/#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</Link>
          <Link href="/#work" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/#studio" onClick={() => setMenuOpen(false)}>Studio</Link>
          <Link href="/socials" onClick={() => setMenuOpen(false)}>Socials</Link>
          <Link href="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</Link>
        </nav>
        <Link className="header-cta" href="/collaborate">Collaborate <span>↗</span></Link>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      </header>

      <main className="socials-page" id="top">
        <section className="socials-hero">
          <img className="socials-hero-mark" src="/media/logo-main.png" alt="" />
          <div className="socials-hero-copy">
            <p className="eyebrow">Devoid Media / Socials</p>
            <h1>Find me in<br /><span className="accent-text">the void.</span></h1>
            <p>Follow the work, the process, and the worlds still becoming. Every platform opens a different door.</p>
          </div>
        </section>

        <section className="socials-directory" aria-labelledby="main-channels-title">
          <div className="socials-section-heading">
            <p className="eyebrow">01 / em.devoid</p>
            <h2 id="main-channels-title">Main <span className="accent-text">channels</span></h2>
          </div>
          <div className="social-grid">
            {mainChannels.map((channel, index) => (
              <a className="social-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.name}>
                <span className="social-card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="social-icon-wrap"><img src={channel.icon} alt="" /></span>
                <span className="social-card-copy"><strong>{channel.name}</strong><small>{channel.handle}</small></span>
                <span className="social-card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="friends-directory" aria-labelledby="friends-title">
          <div className="friends-intro">
            <p className="eyebrow">02 / In orbit</p>
            <h2 id="friends-title">Friends of<br /><span className="accent-text">the void</span></h2>
            <p>Music and creative work from the people whose worlds deserve a longer look.</p>
          </div>
          <div className="friend-grid">
            {friendLinks.map((friend) => (
              <a className={`social-card friend-card friend-card-${friend.variant}`} href={friend.href} target="_blank" rel="noreferrer" key={friend.label}>
                <span className="social-icon-wrap"><img src={friend.icon} alt="" /></span>
                <span className="social-card-copy"><strong>{friend.name}</strong><small>{friend.label}</small></span>
                <span className="social-card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <a className="back-to-top" href="#top">Back to top ↑</a>

      <footer><div className="footer-wordmark"><img src="/media/logo-wordmark.png" alt="Devoid Media" /></div><p>Where authenticity is <span className="accent-text">beautifully ruthless</span></p><div><span>© 2026 Devoid Media LLC</span><span>em.devoid is a registered trade name</span><Link href="/">Back to home ↑</Link></div></footer>
    </>
  );
}
