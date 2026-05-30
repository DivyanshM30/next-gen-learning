# Next-Gen Learning Dashboard

A futuristic, highly animated education platform prototype built with Next.js, Framer Motion, Tailwind CSS, and Supabase.

## Architecture Choices & Server/Client Component Split

This project embraces the Next.js App Router paradigm, explicitly separating server-side data fetching from client-side interactivity to optimize both performance and user experience.

### 1. Server Components (RSC)
- **`app/page.tsx`**: Acts as the main entry point and is a **Server Component**. It securely connects to Supabase on the server (using `@supabase/ssr`), fetching the course data directly without exposing any database logic or credentials to the browser.
- **`app/layout.tsx` & `app/loading.tsx`**: Handled purely on the server. `loading.tsx` automatically acts as a React `<Suspense>` boundary, streaming the skeleton loaders instantly to the client while the Supabase fetch occurs in the background.

### 2. Client Components (`"use client"`)
Client components were pushed as far down the tree as possible to ensure only interactive elements ship JavaScript to the browser.
- **`components/Sidebar.tsx`**: Requires state (`useState`) to track the active tab and Framer Motion's `layoutId` to animate the background indicator.
- **`components/BentoGrid.tsx`**: The grid wrappers (`BentoGrid` and `BentoItem`) use Framer Motion's `variants`, `whileHover`, and `staggerChildren` to control the entry animations and spring physics hover states.
- **`components/tiles/CourseTile.tsx` & `ActivityTile.tsx`**: Contain animated progress bars and charts that need to mount at `0` and animate to their target value on load, requiring client-side execution.

### 3. "No Div Soup" & Semantic HTML
To strictly adhere to semantic HTML rules, I utilized proper markup tags:
- The Sidebar uses `<nav>` and `<ul>`/`<li>` for links.
- The main wrapper uses `<main>`.
- The dashboard header uses `<header>`.
- The `BentoItem` wrapper is rendered as a `<motion.article>`, meaning every tile is properly structured as an independent article.

### 4. Zero Layout Shifts
Framer Motion was used exclusively with `transform` (scale, translate) and `opacity` properties. No width/height/margin changes were made during animations, ensuring that entrance staggers and hover states never trigger browser repaints or layout shifts, keeping animations perfectly smooth at 60fps.

### 5. Error Handling & Fallbacks
If the Supabase connection fails (or if environment variables are missing during initial clone), the server component (`getCourses` in `page.tsx`) catches the error and elegantly degrades by returning a set of high-fidelity mock data. This ensures the dashboard always renders beautifully, even if the database isn't hooked up yet.

## Getting Started

1. Clone the repository.
2. Run `npm install`.
3. Rename `.env.example` to `.env.local` and add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Run `npm run dev`.
