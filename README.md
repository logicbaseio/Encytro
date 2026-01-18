# Encytro Landing Page

A modern, responsive landing page for Encytro - Chargeback Reimbursement & Merchant Data Security Company.

## Project Structure

```
Encytro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── PCISection.jsx
│   │   ├── DeflectSection.jsx
│   │   ├── ReflectionsSection.jsx
│   │   ├── AdvantageSection.jsx
│   │   ├── SecuritySection.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionBadge.jsx
│   │   └── LoopingCounter.jsx
│   ├── hooks/
│   │   └── useOnScreen.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

- **Modern React Architecture**: Built with React 18 and Vite
- **Component-Based Structure**: Organized into reusable components
- **Custom Hooks**: Reusable `useOnScreen` hook for scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Intersection Observer-based reveal animations
- **Interactive Elements**: Animated counters, hover effects, and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Lucide React**: Icon library
- **Intersection Observer API**: For scroll animations

## Components Overview

- **Navbar**: Fixed navigation with scroll effects
- **Hero**: Full-screen hero section with video background
- **PCISection**: PCI compliance features showcase
- **DeflectSection**: Chargeback deflection workflow
- **ReflectionsSection**: Advanced chargeback prevention
- **AdvantageSection**: CNP (Card Not Present) coverage
- **SecuritySection**: Merchant data security features
- **Footer**: Contact information and links

## Custom Hooks

- **useOnScreen**: Detects when elements enter the viewport for animations

## Notes

- The project uses Tailwind CSS via CDN in `index.html`
- Logo images are referenced from Google Drive and local fallbacks
- Video backgrounds use external sources (Pixabay)
- All animations are CSS-based for performance
