# CooksDelight 🍳

CooksDelight is a modern, high-fidelity culinary platform designed to inspire and educate home cooks. It combines real-time recipe discovery with a rich, curated library of cooking techniques and dietary-focused advice.

## 🌟 Key Features

- **Recipe Discovery**: Browse a vast collection of recipes fetched from the DummyJSON API, with filtering by categories and search functionality.
- **Featured Recipes**: An interactive carousel showcasing top-rated dishes.
- **Culinary Wisdom (Tips Page)**:
  - **Mastering the Basics**: Step-by-step guides on essential skills like knife handling and roasting.
  - **Tips & Tricks**: Practical advice for everyday cooking, from herb usage to produce selection.
  - **Nourishing Every Palate**: Specialized content for Gluten-Free, Plant-Based, and Allergy-Friendly diets.
- **Interactive UI**: Fully responsive design with smooth animations, custom sliders, and high-quality visual overlays.
- **Authentication**: Modern login and signup interfaces (Frontend-ready).

## 📂 Directory Structure

```text
CooksDelight/
├── API-docs/               # Documentation for API integrations
├── Design/                 # UI/UX Design assets and screenshots
├── public/                 # Static assets (favicons, svgs)
├── src/
│   ├── assets/             # Images and Icons
│   ├── components/         # Reusable UI components
│   │   ├── TipCard.jsx     # Shared layout for technique cards
│   │   ├── NourishingCard.jsx # Specialized overlay cards
│   │   └── ...             # Feature-specific components
│   ├── data/               # Local data files (tipsData.js)
│   ├── pages/              # Main view components (Home, Tips, etc.)
│   ├── App.jsx             # Main router and app shell
│   ├── main.jsx            # Entry point
│   └── style.css           # Tailwind & Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Build tool configuration
```

## 🛠️ Technologies Used

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **HTTP Client**: [Axios 1](https://axios-http.com/)
- **Icons**: [Heroicons 2](https://heroicons.com/)
- **Font**: Inter (Sans-serif)

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js (v18 or higher) installed.
- **npm**: Usually comes with Node.js.

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd CooksDelight
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run in Development Mode**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📄 License

This project is part of the GIG Front-End Course. All rights reserved.
