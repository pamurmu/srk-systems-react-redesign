# SRK Systems React redesign

Responsive React + Vite + Tailwind website concept based on information from https://srksystem.com.

## Run locally
1. Install Node.js LTS: https://nodejs.org/
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the localhost URL shown in the terminal.

## Production build
Run `npm run build`. Vite writes the production site to `dist/`.

## Features
- Responsive mobile navigation
- Filterable service cards
- Process and AMC sections
- Interactive FAQ accordion
- Contact form creates a prefilled WhatsApp enquiry
- Click-to-call and floating WhatsApp actions
- SEO title, description and mobile viewport metadata

## Before publishing
Confirm all contact details, service scope and brand compatibility. The product and site-context gallery currently uses image assets hosted on srksystem.com. Confirm you have permission to reuse those assets if publishing this as a replacement. Replace with owned/licensed photos when possible. The contact form does not store leads: the visitor must send the prepared message in WhatsApp. Test on mobile and run `npm run build` before deploying.
