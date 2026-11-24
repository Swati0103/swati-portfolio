# Swati Singh — Portfolio (Next.js)

A Flutter-themed personal portfolio built with **Next.js 15 (App Router) + TypeScript**.

## Features
- 🐦 Animated flock of birds (boids simulation on canvas) that flees your cursor; click to scatter them
- 🌙 / ☀️ Night sky with twinkling stars, or a day sky (theme saved in localStorage)
- ⌨️ Typewriter hero, a Dart code window, animated counters and scroll-reveal sections
- 🗂️ Filterable project cards with phone mock-ups and 3D tilt
- 🤖 **SwatiBot**: an in-browser assistant that answers questions from the CV
- 📄 Downloadable enhanced CV (`public/Swati_Singh_Enhanced_CV.pdf`)
- Responsive, and respects `prefers-reduced-motion`

## Run locally
Requires [Node.js 18.18+](https://nodejs.org) (LTS recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:
```bash
npm run build && npm start
```

## Edit your content
All text lives in **`lib/data.ts`**: profile, experience, skills, projects, AI cards and SwatiBot answers.
Add your LinkedIn/GitHub URLs to `profile.linkedin` / `profile.github` and the buttons will appear.

## Deploy
Push this folder to GitHub and import it at [vercel.com](https://vercel.com/new). No configuration is needed.
