# Barton's Automotive website

A responsive, dependency-free website for Barton's Automotive's in-house and mobile repair services. It uses plain HTML, CSS, and JavaScript, so there is no build step or package manager.

## Project files

- `index.html` — page content and SEO metadata
- `style.css` — colors, layout, typography, and responsive styles
- `script.js` — mobile navigation and automatic copyright year
- `images/favicon.svg` — browser tab icon
- `images/bartons-automotive-logo.png` — primary business logo
- `robots.txt` and `sitemap.xml` — search-engine discovery files

## Preview locally

Double-click `index.html` to open it in your default browser. For a more accurate preview, run this command from the project folder if Python is installed:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Edit the content

Open `index.html` in any text editor. Search for the wording you want to change, edit it, save, and refresh the browser.

- Phone links use `tel:+13154180044` for calls and `sms:+13154180044` for texts.
- The visible number is `(315) 418-0044`.
- Labor and parts pricing appear in the hero and pricing sections.
- Colors and spacing are defined at the top of `style.css` under `:root`.

### Add a real logo or repair photos

1. Copy optimized JPG, WebP, PNG, or SVG files into `images`. Use simple lowercase names without spaces, such as `logo.svg` or `brake-repair.webp`.
2. In `index.html`, find `photo-placeholder`.
3. Replace the placeholder's inner content with an image, for example:

```html
<img src="images/brake-repair.webp" alt="Barton's Automotive performing a brake repair">
```

Keep `alt` text short and describe the actual image. Resize large photos first (about 1600 pixels wide or less is generally enough).

For a Facebook sharing image, create a 1200 × 630 image in `images` and add this beside the other Open Graph tags:

```html
<meta property="og:image" content="https://www.bartonsautomotive.com/images/facebook-share.jpg">
```

## Commit with GitHub Desktop

1. Open GitHub Desktop.
2. Choose **File → Add local repository**, then select this folder if it is not already listed.
3. Review the changed files in the left panel.
4. Enter a summary such as `Update services and photos`.
5. Select **Commit to main**.
6. Select **Push origin** to upload the commit to GitHub.

## Deploy with Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages** and create a Pages project by importing the repository.
3. Use these deployment settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` (the repository root)
4. Save and deploy. Cloudflare provides a temporary `pages.dev` address.
5. In the project's custom-domain settings, add `www.bartonsautomotive.com` and follow the DNS prompts.

After the custom domain is active, confirm these URLs load:

- `https://www.bartonsautomotive.com/`
- `https://www.bartonsautomotive.com/robots.txt`
- `https://www.bartonsautomotive.com/sitemap.xml`

Cloudflare Pages automatically deploys later commits pushed to the connected branch.
