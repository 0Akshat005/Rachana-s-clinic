# Rachana Physiotherapy Clinic

Vite + React + TypeScript website for Rachana Physiotherapy Clinic, Manish Nagar, Nagpur.

## Run locally

```bash
npm install
npm run dev
```

## Before launch — replace or confirm

- Add real, consented images in `public/images/` and replace the illustrated photo placeholders. Add the real logo at `public/logo.svg` if available.
- Confirm doctor qualifications, council registration number, approved biography, philosophy quote and listed certifications.
- Confirm which phone number is connected to WhatsApp.
- Replace all three visibly labelled sample testimonials with consented, real reviews; add a Google URL/rating only when verified.
- Confirm prices before setting `showPricing` to `true` in `src/data/clinic.ts`.
- Confirm session duration, nearby localities, advanced-therapy names (especially MST and Hydrocollateral packs), clinical copy and the visit process.
- Have Marathi/Hindi translations proofread by native speakers.
- Replace the example canonical domain in `src/components/SEO.tsx` and `public/sitemap.xml` with the production domain.
- Have the privacy text and WhatsApp handling reviewed legally.

All clinic facts and long-form service content are held in `src/data/clinic.ts`.
