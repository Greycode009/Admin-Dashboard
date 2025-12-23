# Admin Dashboard

**A clean, responsive admin dashboard built with React, Vite, and Tailwind CSS.**

---

## 🚀 Project Overview

This repository contains a lightweight admin dashboard template used for managing students, payments, fees, and reports. It's built with React + Vite and styled with Tailwind CSS. The UI is component-driven and includes example pages and data to help you get started quickly.

## 🧭 Features

- Responsive layout with a sidebar and dashboard cards
- React Router-powered page navigation
- Sample pages: **Dashboard**, **Students**, **Fees**, **Payment**, **Reports**, **Settings**
- Simple, easy-to-extend component structure

## 🛠 Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- ESLint

## 📁 Project Structure

```
src/
  App.jsx           # App routes and layout
  main.jsx          # App bootstrap
  index.css         # Global styles + Tailwind imports
  assets/           # Images and static assets
  components/       # Reusable UI components (Sidebar, Layout, DashboardCard)
  pages/            # Page views (Dashboard, Student, Fees, Payment, Report, Setting)
  pages/Data/       # Example data files
```

## ⬇️ Getting Started

1. Clone the repo:

```bash
git clone <repo-url>
cd admin-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser (Vite default port).

## ⚙️ Available Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint
- `npm start` — alias for `npm run dev`

## 💡 Development Tips

- Components are located in `src/components` for easy reuse.
- Example data is in `src/pages/Data/dashboardData.js` — replace with API calls as needed.
- Tailwind config lives in the root if you need to customize utilities.

## 🔧 Deployment

Build and serve the `dist` folder using any static hosting (Netlify, Vercel, GitHub Pages, etc.):

```bash
npm run build
# then serve the contents of `dist/`
```

## 🤝 Contributing

Contributions and improvements are welcome. Please open an issue or submit a PR with a clear description of your changes.


**Author:** Dipesh Malla
