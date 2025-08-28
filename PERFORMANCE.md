
# Performance Notes

- Default hero is text-first; H1 is LCP.
- Optional photo hero has dim overlay; text remains LCP.
- Use AVIF/WebP for real images; `loading="lazy"` on below-fold images.
- Tailwind builds only used CSS; JS kept lean (<90KB target gz). CSS target <50KB gz.
- Local WOFF2 fonts with `font-display: swap` and preload for top 1–2 fonts.
- `aspect-ratio` used in cards to prevent CLS.
