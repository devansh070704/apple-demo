# 🍎 Apple iPhone 14 Landing Page Replica

A pixel-perfect, modern, and highly responsive replica of the Apple iPhone 14 & iPhone 14 Pro landing page. Built with React, Next.js, TypeScript, and Tailwind CSS, this project showcases pixel-level accuracy matching premium Figma specifications for desktop screens (1440px targets) while providing fluid, responsive layout adaptations for mobile devices (down to 375px screens like the iPhone SE).

---

## ✨ Features

- **Pixel-Perfect Fidelity**: Matches original design assets, font hierarchies, spatial offsets, and margins.
- **Mobile-Responsive Card Fitment**: All product cards and promotional grids adapt flawlessly on mobile screens, utilizing zero-padding layouts (`pb-0 px-0`) so graphics sit perfectly flush with card edges.
- **Tailwind Precision**: Customized spacing including strict **24px vertical gaps** between text content/action links and product graphics on mobile.
- **Chapter Navigation Swiper**: Interactive horizontal swiper for quick model previews.
- **Sleek Dark and Light Themes**: Visual styling tailored to each hero and showcase segment.
- **Clean Architecture**: Built using modular React components (`src/components/*`) and fully type-safe TypeScript.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/devansh070704/apple-demo.git
   cd apple-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## ⚡ Deployment on Vercel

This repository is pre-optimized for hosting on the **Vercel Platform**. Next.js has first-class native integration on Vercel.

### Step-by-Step Deployment

1. **Sign Up / Log In**: Visit [Vercel](https://vercel.com) and log in using your GitHub account.
2. **Import Project**: 
   - Click the **"Add New..."** button and select **"Project"**.
   - Under "Import Git Repository", find and click **"Import"** next to `apple-demo`.
3. **Configure Settings**: 
   - Vercel automatically detects Next.js as the framework and sets the optimal build settings (`npm run build`) and output directory (`.next`).
   - Click **"Deploy"**.
4. **Done!** Vercel will build and host your website, providing you with a live production URL instantly.

---

## 🛠️ Verification & Build Results

The codebase compiles flawlessly with a clean static asset compilation structure:

```bash
▲ Next.js 16.2.6 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 2.3s
  Running TypeScript ...
  Finished TypeScript in 2.6s ...
  Collecting page data using 5 workers ...
  Generating static pages using 5 workers (4/4)
✓ Generating static pages successfully in 589ms
  Finalizing page optimization ...
```
