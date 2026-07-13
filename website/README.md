# Devoid Media — Website

The public homepage for Devoid Media LLC. Built as a fast, static site (plain HTML/CSS/JS) so it
loads instantly, ranks well, and can be hosted anywhere for free.

```
website/
├── index.html      # the page
├── css/styles.css  # all styling (brand palette + layout)
├── js/main.js      # mobile menu, social icons, active nav, year
└── assets/         # your images (see assets/README.md)
```

## 1. Preview it locally

Just open `index.html` in a browser. Or, for a proper local server:

```bash
cd website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 2. Add your real content

- **Social links:** in `index.html`, replace the `href="#"` on each social icon with your real
  Instagram / X / TikTok / YouTube URLs.
- **Images:** add files to `assets/` and follow the swap comments in `css/styles.css`
  (search for `background:` — each placeholder tells you what photo goes there).
- **Copy:** all text is plain and editable directly in `index.html`.

## 3. Publish to devoidmediallc.com (now that it's off Canva)

Two solid free options. **Netlify** is the simplest for a custom domain:

### Option A — Netlify (recommended, easiest domain setup)
1. Create a free account at netlify.com.
2. Drag-and-drop the `website/` folder onto the Netlify dashboard (instant deploy), **or** connect
   this GitHub repo and set the publish directory to `website`.
3. In **Site settings → Domain management → Add a custom domain**, enter `devoidmediallc.com`.
4. Netlify shows you the DNS records to set. At your **domain registrar** (wherever you bought
   devoidmediallc.com), either:
   - point the domain's **nameservers** to Netlify (easiest — Netlify manages everything), or
   - add the **A record** and **CNAME** (`www`) Netlify provides.
5. Netlify auto-issues a free HTTPS certificate. Live in ~5–30 min after DNS propagates.

### Option B — GitHub Pages
1. Push this repo to GitHub (public).
2. Repo **Settings → Pages** → deploy from branch. (Pages serves from the repo root or `/docs`, so
   you'd move the site's files there, or use a small action to publish the `website/` folder.)
3. Add a `CNAME` file containing `devoidmediallc.com`, then set the A records at your registrar to
   GitHub's Pages IPs and a `www` CNAME to `<username>.github.io`.

> Since you just disconnected from Canva, DNS may take a few hours to fully clear before the new
> host resolves. That's normal.

## 4. Goal: collaborators + traffic

This build already supports both, but here's what moves the needle next:

**Convert visitors into collaborators**
- The **Request a Collaboration** button (hero + CTA band) currently opens
  `mailto:socials@devoidmediallc.com`. Consider adding a short embedded form
  (Netlify Forms is free and needs zero backend) so people can submit without opening an email app.
- Keep a one-line pitch of *what you offer* and *who it's for* above the fold — done.

**Get found (traffic / SEO)**
- SEO meta tags, Open Graph share cards, and Organization structured data are already in `<head>`.
- Add `assets/og-image.jpg` (1200×630) so shared links show a striking preview — this alone
  meaningfully increases click-throughs from social posts.
- After going live, submit the site to **Google Search Console** and add a `sitemap.xml`.
- Link the site in every social bio and email signature; inbound links + real traffic are what
  build ranking over time.
