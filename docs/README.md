# Wellington Funeral Home Website

Production URL: https://wellington-fh-website-production.up.railway.app
Custom Domain (pending): www.wellingtonfhja.com

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Fonts:** Playfair Display (headings), Inter (body)
- **Hosting:** Railway
- **Repository:** https://github.com/seanwellington/wellington-fh-website

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, services, about, CTA, location |
| `/about` | Company history, values, team |
| `/services` | Full service offerings |
| `/obituaries` | Obituary listings (mock data) |
| `/contact` | Contact form, map, hours |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/faqs` | Frequently asked questions |
| `/schedule` | Appointment scheduling |
| `/pre-planning` | Pre-planning services |

## Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-primary` | #1A365D | Navy blue — headers, buttons, trust |
| `--color-secondary` | #8B6914 | Gold — accents, highlights (WCAG AA) |
| `--color-secondary-light` | #D4A821 | Lighter gold for dark backgrounds |
| `--color-background` | #F7F7F7 | Off-white page background |
| `--color-text` | #2D3748 | Charcoal body text |

## Lighthouse Scores

- **Performance:** 97/100
- **Accessibility:** 96/100
- **Best Practices:** 100/100
- **SEO:** 100/100

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

Railway auto-deploys on push to `master` branch.

## DNS Configuration (Pending)

To connect the custom domain:

1. In Cloudflare DNS, add CNAME record:
   - Name: `www`
   - Target: `wellington-fh-website-production.up.railway.app`
   - Proxy status: DNS only (gray cloud)

2. In Railway project settings → Domains:
   - Add custom domain: `www.wellingtonfhja.com`
   - Wait for SSL certificate provisioning

3. For root domain redirect:
   - Add Cloudflare Page Rule or redirect
   - Redirect `wellingtonfhja.com` → `www.wellingtonfhja.com`

## Content Source

Content extracted from Wayback Machine archive:
https://web.archive.org/web/20250620045210/https://www.wellingtonfhja.com/

Design is completely new — modern, mobile-first, WCAG AA compliant.

## Contact Information (In Site)

- **Phone:** +1 (876) 996-7077
- **Email:** service@wellingtonfhja.com
- **Address:** 52 Warner Street, Port Maria, St. Mary, Jamaica
- **Company Reg:** 109409
- **TRN:** 003037568
