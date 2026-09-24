# AWS Student Builder Group (AWS SBG) — COMSATS Lahore

Official website for **AWS Student Builder Group (AWS SBG) COMSATS Lahore** at **COMSATS University Islamabad, Lahore Campus, Lahore, Pakistan**.

A modern, student-led technology platform built with React, Vite, TypeScript, Tailwind CSS v4, React Router, and Lucide Icons.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
yarn install
```

### 2. Run Local Development Server
```bash
yarn dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
yarn build
```

### 4. Preview Production Build
```bash
yarn preview
```

---

## 📁 Project Architecture

```text
src/
├── assets/                 # Vector SVG assets & logos
├── components/
│   ├── cards/              # EventCard, TeamCard, PartnerCard, ResourceCard, AchievementCard
│   ├── common/             # Button, Badge, Modal, Lightbox, SectionHeading, EmptyState, etc.
│   └── layout/             # Navbar, Footer, JoinCommunityModal
├── data/                   # Centralized content & data models
│   ├── achievements.ts     # Chapter milestones & timeline records
│   ├── events.ts           # Upcoming & past events, agendas, speakers, galleries
│   ├── partners.ts         # University, tech, and community partners
│   ├── resources.ts        # Official AWS docs, tools, student resources
│   ├── site.ts             # Chapter branding, contact links, stats, social URLs
│   └── team.ts             # Leadership hierarchy & directory
├── hooks/                  # useDocumentTitle, useScrollPosition, useDebounce
├── layouts/                # MainLayout with skip link, sticky nav, modals
├── pages/                  # Home, About, Events, EventDetail, Team, Achievements, Resources, Partners, Contact, NotFound
├── sections/               # Hero, ImpactStats, AboutPreview, WhatWeDo, FeaturedEvents, ReadyToBuildCTA
├── utils/                  # cn (class merger), formatting helpers
├── App.tsx                 # Client-side routing configuration
├── index.css               # Tailwind CSS v4 design tokens & theme
└── main.tsx                # App entry point
```

---

## ✏️ Updating Chapter Content

All content is decoupled from UI components. To update any information, modify the corresponding file in `src/data/`:

* **Chapter Settings & Social Links**: [`src/data/site.ts`](./src/data/site.ts)
* **Events, Agendas, Speakers & Gallery**: [`src/data/events.ts`](./src/data/events.ts)
* **Leadership & Core Team**: [`src/data/team.ts`](./src/data/team.ts)
* **Partners & Collaborations**: [`src/data/partners.ts`](./src/data/partners.ts)
* **Student Resources & Docs**: [`src/data/resources.ts`](./src/data/resources.ts)
* **Timeline Achievements**: [`src/data/achievements.ts`](./src/data/achievements.ts)

---

## 🛡️ Disclaimer

AWS Student Builder Group COMSATS Lahore is an independent student-led university society at COMSATS University Islamabad, Lahore Campus, and is not an AWS corporate organization.
