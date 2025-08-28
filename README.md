
# Annaville SDA Church — Modern, Accessible Website

React + Vite + Tailwind. WCAG 2.2 AA, Core Web Vitals-minded. Text-first hero keeps H1 as LCP.

## Quick Start
```bash
npm install
npm run dev
```

## Build / Preview
```bash
npm run build
npm run preview
```

## Docker (production-like)
```bash
docker compose up --build
# open http://localhost:8080
```

### Notes
- Mobile sticky bar (📞 Call • 🧭 Directions • 📝 Plan a Visit) is persistent.
- GA events in `src/utils/analytics.js`:
  `cta_click`, `click_to_call`, `open_directions`, `visit_form_start`, `visit_form_submit`, `newsletter_signup`, `event_details_view`, `sermon_play`.
- Local WOFF2 fonts preloaded; replace placeholders with real files before production.
- JSON-LD is injected on Home (Organization, Website, FAQ) and Event/Sermon detail pages.
# annaville-sda-site
