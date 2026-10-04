# Bright Ndubuisi: SEO portfolio

A responsive one-page portfolio of SEO case studies. It's plain HTML, CSS and JS, with no build step and no framework. Every case study is in the HTML itself, so search engines can crawl all of it.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page: hero, case studies, services, approach, tools, contact. Includes meta, Open Graph and JSON-LD (`ProfilePage`, `Person`, `Article`) |
| `styles.css` | All styles (mobile-first; breakpoints at 640/760/900/1000px) |
| `script.js` | Mobile menu; opens a case study when linked directly (e.g. `/#wellington-college-lagos`) |
| `robots.txt`, `sitemap.xml` | Crawl files |
| `vercel.json` | Clean URLs, security and cache headers |
| `assets/` | Favicon and the 1200×630 social share image |

## Run locally

```bash
cd portfolio
python3 -m http.server 8000   # or: npx serve .
```

## Add a case study

1. In `index.html`, copy the block between `CASE STUDY TEMPLATE` and `END CASE STUDY TEMPLATE`.
2. Give the `<article>` a unique `id` (e.g. `id="client-name"`), then update the tags, headline, results and the full write-up inside `<details>`.
3. Add a matching `Article` entry to the JSON-LD `@graph` in `<head>`.

## Before going live

- Replace `https://bright-ndubuisi.vercel.app` with your real domain in `index.html`, `robots.txt` and `sitemap.xml`.
- Contact email and LinkedIn come from the CV. Update them in the contact section and in the JSON-LD `Person` entry if they change.

## Deploy to Vercel

1. In Vercel, go to **Add New → Project** and import this GitHub repository.
2. Set **Root Directory** to `portfolio`.
3. Set **Framework Preset** to **Other**, and leave the build command and output directory empty.
4. Deploy. Every push to the production branch redeploys the site automatically.

After the first deploy, submit `sitemap.xml` in Google Search Console.
