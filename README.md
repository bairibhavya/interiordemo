# ArtSpace Interiors — React + Vite

A premium multi-page interior design studio website recreated from the supplied ArtSpace concept board. Warm ivory, walnut, brass accents, dark forest-green CTAs, large interior photos and responsive layouts.

## Run locally

1. Unzip and open **ArtSpace-Interiors-React-Website** in VS Code.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the URL printed by Vite (typically http://localhost:5173/).

This is React/Vite — **not** a Python project. For a production build run `npm run build`; deploy the repository root to Vercel (Framework: Vite; Output directory: `dist`).

## Routes

- `/` — full home page, project cards, testimonial design, studio CTA
- `/services` — six service cards
- `/services/:slug` — service details and contact link
- `/projects` — filters and live (typing) search
- `/projects/:slug` — gallery, image navigation, fullscreen lightbox, design details
- `/process` — five-step process
- `/about` — studio story, values, photography
- `/contact` — validated consultation enquiry

## Features

- React Router SPA routes, responsive mobile navigation.
- Live filters: selecting Kitchen filters instantly; typing `v` instantly matches `Villa` / `Vijayawada` (no Enter needed).
- Real image files are bundled locally in `public/images/` using crops of the user-provided design board; there are no remote image dependencies.
- Interactive project gallery with thumbnail selection, next/previous navigation, accessible fullscreen lightbox and keyboard support.
- Working client-side enquiry validation. In *demo mode*, completed enquiries are saved only in this browser's localStorage and the page says so explicitly.
- Optional secure enquiry API in `api/enquiries.js`; Vercel function uses a server-only Supabase role key. See below.

## Turn on real enquiries (requires setup)

1. Create a **separate** Supabase project for the interior design client. Do not reuse another client's database for this demo.
2. Review and execute `database/001_artspace_enquiries.sql`.
3. Deploy to Vercel and add server environment variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SITE_URL` (full production website origin, e.g. `https://yourdomain.com`).
4. Add client-side `VITE_ENABLE_LIVE_ENQUIRIES=true` and redeploy.
5. Submit a test enquiry and confirm it appears in `artspace_enquiries`.
6. Before accepting real leads: add a production-grade rate limiter and anti-spam challenge, publish a privacy notice, agree on data retention, remove sample company claims and review access controls. The current API validates payloads, honeypot and Origin, but **does not implement a production rate limiter**.

**Never commit `.env.local` or any secret key.** The server-role key must be stored only in Vercel server environment variables, not client-side VITE variables.

## Client-delivery checklist

- Replace `ArtSpace Interiors` demo branding/contact details with client-approved identity and information.
- Replace example photo crops and fictitious project info with licensed, genuine client portfolio photography and details.
- Replace or remove illustrative testimonials and numbers like “150+ projects”. These are template examples, not verified business claims.
- Replace social media placeholder links with actual profiles.
- Configure enquiry backend and anti-spam before real bookings/leads.
- Test on real phones/browsers, accessibility, live forms and the production build before client launch.

## Notes on photography

The photographs are **cropped from the concept image supplied by the user** to guarantee an offline visual match. The reference is a designed collage, not full-resolution source photography. The crops therefore have limited native resolution; replace these with high-resolution licensed photos for production. This project does not claim to have the original portfolio photographs.
