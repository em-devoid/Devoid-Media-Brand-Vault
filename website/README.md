# Devoid Media Website

The production website for Devoid Media LLC and the em.devoid creative brand.

## What is included

- Responsive editorial portfolio and studio website
- Official Devoid Media logo assets and supplied photography
- Age-confirmation entrance
- Project Genesis philosophy and brand positioning
- Collaboration inquiry flow
- Embedded Demon Stars, Song of Coronos, and Ghosthey brand fonts
- OpenAI Sites deployment configuration

Waters Gothic is by Mouser Fonts (Jerry Landers) and is used under its commercial-web-use license.

## Local development

From this folder:

```bash
pnpm install
pnpm run dev
```

Create a production build with:

```bash
pnpm run build
```

## Deployment

The repository is configured to publish to the owner-only preview site by default:

<https://devoid-media-private-preview.em-devoid.chatgpt.site>

Approved releases are promoted separately to the public production site:

<https://devoidmediallc.com>

The production Sites project configuration is preserved in
`.openai/production-hosting.json`. Do not publish to it until the owner approves
the preview for release.

## Archive

The earlier static HTML/CSS/JavaScript prototype is preserved in `legacy-static/` for reference.
