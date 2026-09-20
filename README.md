# YONG Lyhor — Portfolio

Single-page developer portfolio for YONG Lyhor (Data Engineer • AI Engineer • Full-Stack), built with Vue 3 + Vite.

🌐 **Live:** https://yong-lyhor.vercel.app

## Features

- Single-page layout with sticky, scroll-spy navigation (Home, About, Skills, Projects, Experience, Education, Certificates, Achievements, Contact)
- Custom follow-dot cursor with native pointer on interactive elements
- Projects section with real local preview images and filterable cards
- Experience timeline, education, certificates and achievements sections
- Working contact form backed by the **Resend** API (with mailto fallback)
- Dark / light themes
- Optimized static bundle, deployed to Vercel

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite**
- **Tailwind CSS**
- **JavaScript (ESM)**
- **Vue Router** (single-page routes + project detail pages)
- **Resend** (email delivery)
- **Vercel** (hosting, serverless function for the contact form)

## Getting Started

```bash
npm install
npm run dev            # start dev server (http://localhost:1437)
npm run build          # production build → dist/
npm run preview        # preview the production build
```

### Environment variables

Create a `.env` file (see `.env.example`):

```
RESEND_API_KEY=re_...
CONTACT_TO=you@example.com
RESEND_FROM=Portfolio <onboarding@resend.dev>
```

The dev server mounts a local `/api/send-email` middleware (see `vite.config.js`), so the contact form works both locally and in production on Vercel (via `api/send-email.js`).

## Project Structure

```
api/                  Vercel serverless function (Resend email endpoint)
public/
  archivement/        Certificates, CV and achievement images
  images/             Profile photos
  projects/           Real project preview images
src/
  components/         Reusable UI (Navbar, Hero, ProjectCard, ContactForm, CursorFX ...)
  data/               Content data (projects, experience, skills, certificates ...)
  directives/         Custom directives (v-reveal)
  router/             Vue Router setup
  views/              Page views (Home, project detail, 404)
```

## Deployment

Deploy to Vercel with the Vite preset. The `api/` directory is picked up automatically as serverless functions, and the `.env` variables must be configured in the Vercel project settings.

## License

Private portfolio project.