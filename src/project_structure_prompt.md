# 🛠️ General Project Structure Prompt — React + Vite

> **Copy and paste the prompt below to an AI assistant (or use it as your own reference) to scaffold a new project following this exact architecture.**

---

## THE PROMPT

```
Create a React web application using the following tech stack, folder structure, file conventions, and code patterns. Follow every detail precisely.

---

## 🔧 TECH STACK

- **Framework:** React (latest stable, e.g., v19+)
- **Build Tool:** Vite (latest stable, e.g., v7+) with `@vitejs/plugin-react`
- **Language:** JavaScript (JSX — NOT TypeScript)
- **Styling:** Vanilla CSS (NO TailwindCSS, NO CSS modules, NO styled-components)
- **Routing:** react-router-dom (latest v7+) with BrowserRouter and client-side routing
- **Fonts:** Google Fonts loaded via `<style>` tags in `index.html`, and/or `@fontsource` npm packages imported in components
- **Deployment:** Vercel (include `vercel.json` for SPA rewrite support)
- **Package Manager:** npm

---

## 📁 PROJECT FOLDER STRUCTURE

```
project-root/
├── index.html              ← Entry HTML file (Vite's entry point)
├── package.json            ← Dependencies & scripts
├── vite.config.js          ← Vite configuration
├── vercel.json             ← Vercel SPA rewrite rules
├── eslint.config.js        ← ESLint config
├── .gitignore
├── public/                 ← Static public assets (favicon, OG images, etc.)
│   └── favicon.svg
├── src/
│   ├── main.jsx            ← React DOM root entry point
│   ├── App.jsx             ← Root component with route definitions
│   ├── pages/              ← All page-level components (.jsx files)
│   │   ├── Home.jsx        ← Main landing page (composes section components)
│   │   ├── SectionA.jsx    ← Individual section/page components
│   │   ├── SectionB.jsx
│   │   ├── DetailPageX.jsx ← Standalone routed pages
│   │   └── ...
│   ├── components/         ← Reusable UI components (.jsx files)
│   │   ├── NavBar.jsx
│   │   ├── Card.jsx
│   │   └── ...
│   ├── css/                ← All CSS files (one per component/page + globals)
│   │   ├── index.css       ← Global base styles & CSS reset
│   │   ├── App.css         ← App-level layout styles (if needed)
│   │   ├── NavBar.css      ← Styles for NavBar component
│   │   ├── Card.css        ← Styles for Card component
│   │   ├── Home.css        ← Styles for Home page
│   │   ├── SectionA.css    ← Styles for SectionA
│   │   └── ...
│   └── assets/             ← Images, icons, SVGs, and media files
│       ├── logo.png
│       ├── background.jpg
│       └── ...
```

---

## 📄 FILE STRUCTURES & CODE PATTERNS

### 1. `index.html` — Entry HTML File

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image" href="./src/assets/your-favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your App Title</title>

  <!-- Load Google Fonts here -->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@200..800&display=swap');
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

**Key rules:**
- Vite uses this as the entry point
- Google Fonts are loaded in a `<style>` block inside `<head>`
- The `<div id="root">` is where React mounts
- The script tag points to `/src/main.jsx` with `type="module"`

---

### 2. `vite.config.js` — Vite Configuration

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Key rules:**
- Minimal config — just the React plugin
- No custom aliases or extra config unless needed

---

### 3. `src/main.jsx` — React Entry Point

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

**Key rules:**
- Wraps `<App />` inside `<BrowserRouter>` for routing
- Wraps everything in `<StrictMode>`
- Imports the global `index.css` here (only place for global styles import)
- Uses `createRoot` (React 18+ API)

---

### 4. `src/App.jsx` — Root Component (Route Definitions)

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailPageX from './pages/DetailPageX'
import DetailPageY from './pages/DetailPageY'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-x" element={<DetailPageX />} />
      <Route path="/detail-y" element={<DetailPageY />} />
    </Routes>
  )
}

export default App
```

**Key rules:**
- `App.jsx` ONLY contains route definitions — no layout, no navbar, no styling
- Each `<Route>` maps a URL path to a page component
- Page components are imported from `./pages/`
- Use default exports for all components

---

### 5. Page Files (`src/pages/*.jsx`) — Two Types

#### TYPE A: Composition Page (e.g., Home page)
A page that composes multiple section components together in one scrollable view, with anchor-based in-page navigation.

```jsx
import NavBar from "../components/NavBar"
import SectionA from "../pages/SectionA"
import SectionB from "../pages/SectionB"
import SectionC from "../pages/SectionC"
import '../css/Home.css'

function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div id="section-a">
        <SectionA />
      </div>
      <div id="section-b">
        <SectionB />
      </div>
      <div id="section-c">
        <SectionC />
      </div>
    </div>
  )
}

export default Home
```

**Key rules:**
- Wraps each section in a `<div id="...">` for smooth-scroll anchor navigation
- Includes `<NavBar />` at the top
- Imports its own CSS from `../css/Home.css`

#### TYPE B: Section / Content Page
A standalone section that displays content — text, images, data, etc.

```jsx
import '../css/SectionA.css'
import someImage from '../assets/some-image.png'
import '@fontsource/your-font';

function SectionA() {
  return (
    <div className='section-container'>
      <p className='section-title'>Section Title</p>
      <p className='section-content'>Your content goes here...</p>
      <img src={someImage} className='section-image' alt="Description" />
    </div>
  )
}

export default SectionA
```

**Key rules:**
- Each page/section imports its own dedicated CSS file from `../css/`
- Images are imported as JS modules from `../assets/` (NOT referenced as string paths)
- Fonts from `@fontsource` packages are imported at the component level
- Uses a function declaration (not arrow function) for the component
- Always has a default export at the bottom

#### TYPE C: Detail / Standalone Routed Page
A page with its own URL route, accessed via the router (not a section of the home page). Includes its own NavBar.

```jsx
import '../css/DetailPage.css'
import "@fontsource/your-font";
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import logo from '../assets/detail-logo.png'
import screenshot1 from '../assets/screenshot-1.png'
import screenshot2 from '../assets/screenshot-2.png'

function DetailPage() {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-container">
      <NavBar />
      <section className="detail-top-section">
        <div className="detail-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="detail-content">
          <h2>Project Name</h2>
          <p>Description paragraph...</p>
          <p>
            Links:
            <br />
            <a href="https://github.com/...">GitHub Repository</a>
          </p>
        </div>
      </section>

      <section className="detail-images">
        <img src={screenshot1} alt="Screenshot 1" />
        <img src={screenshot2} alt="Screenshot 2" />
      </section>
    </div>
  )
}

export default DetailPage
```

**Key rules:**
- Uses `useEffect` with `window.scrollTo(0, 0)` to scroll to top on mount
- Includes its own `<NavBar />` since it's a standalone route
- Uses `<section>` tags for semantic grouping
- External links use `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`

---

### 6. Component Files (`src/components/*.jsx`) — Reusable UI

#### Simple Reusable Component (e.g., Card)
```jsx
import '../css/Card.css'
import { Link } from 'react-router-dom'

function Card(props) {
  const isExternal = props.link && (props.link.startsWith('http') || props.link.startsWith('https'));

  return (
    <div className='card-container'>
      {props.link ? (
        isExternal ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer" className='card-link'>
            <img src={props.src} className='card-img' alt={props.title} />
          </a>
        ) : (
          <Link to={props.link} className='card-link'>
            <img src={props.src} className='card-img' alt={props.title} />
          </Link>
        )
      ) : (
        <div className='card-link'>
          <img src={props.src} className='card-img' alt={props.title} />
        </div>
      )}
      <div className='card-text'>
        <p className='card-title'>{props.title}</p>
        <p className='card-desc'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
```

#### Stateful Component with Hooks (e.g., NavBar)
```jsx
import '../css/NavBar.css'
import icon from '../assets/logo.png'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cross-page anchor scrolling
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll to section
      navigate('/', { state: { targetId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navBar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navBar-container'>
        <img src={icon} className='icon' alt="Logo" />
        <div className='navBar-items-list'>
          <ul>
            <li className='navBar-item' onClick={() => scrollToSection('section-a')}>
              Section A
            </li>
            <li className='navBar-item' onClick={() => scrollToSection('section-b')}>
              Section B
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
```

**Key rules for components:**
- Each component imports its own CSS from `../css/`
- Props are accessed via `props.xxx` (no destructuring required)
- Use `useState`, `useEffect` for state and side effects
- Use `useNavigate` for programmatic navigation
- Use `useLocation` for reading current route info
- Internal links use `<Link to="...">`, external links use `<a href="..." target="_blank">`
- Differentiate between internal/external links using `.startsWith('http')`
- All components use function declarations + default export

---

### 7. Data-Driven Rendering Pattern
When rendering lists of similar items, define a data array at the top and `.map()` over it:

```jsx
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'

const itemsData = [
  { src: item1, className: 'img-item1', alt: 'Item 1' },
  { src: item2, className: 'img-item2', alt: 'Item 2' },
];

function ItemList() {
  return (
    <div className='items-container'>
      {itemsData.map((item, index) => (
        <img key={`item-${index}`} src={item.src} className={item.className} alt={item.alt} />
      ))}
    </div>
  )
}

export default ItemList
```

---

### 8. CSS Files (`src/css/*.css`) — Styling Conventions

#### `index.css` — Global Base Styles
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

#root {
  width: 100%;
}
```

#### Per-Component/Page CSS
- One CSS file per page or component
- File name matches the component name (e.g., `NavBar.jsx` → `NavBar.css`)
- Uses plain class selectors (`.class-name`), no BEM, no CSS modules
- Scoping is done by convention (unique class names per component)
- Each component/page CSS file is imported at the top of its corresponding `.jsx` file

---

### 9. `vercel.json` — SPA Routing for Vercel

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Key rule:** This ensures all routes are handled by the React SPA (prevents 404s on page refresh for sub-routes).

---

### 10. `package.json` — Scripts & Dependencies

```json
{
  "name": "your-project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.x.x",
    "react-dom": "^19.x.x",
    "react-router-dom": "^7.x.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.x.x",
    "eslint": "^9.x.x",
    "vite": "^7.x.x"
  }
}
```

---

## ✅ CONVENTIONS SUMMARY

| Convention | Rule |
|---|---|
| File extension | Always `.jsx` for components and pages |
| Component style | Function declarations (not arrow functions) |
| Exports | Default export at the bottom of every file |
| CSS approach | One separate `.css` file per component/page, all in `src/css/` |
| Image imports | Imported as JS modules from `src/assets/`, used as `src={variable}` |
| Routing | `react-router-dom` with `BrowserRouter` in `main.jsx`, `Routes`/`Route` in `App.jsx` |
| State management | React hooks (`useState`, `useEffect`) — no external state libraries |
| Navigation | `useNavigate` for programmatic, `<Link>` for internal, `<a>` for external |
| Anchor scrolling | `div#id` wrappers + `scrollIntoView({ behavior: 'smooth' })` |
| Scroll-to-top | `useEffect(() => { window.scrollTo(0, 0) }, [])` on routed pages |
| Cross-page scroll | Navigate with `state: { targetId }`, read it via `useLocation` |
| Data rendering | Define data arrays at top, `.map()` over them in JSX |
| Font loading | Google Fonts in `index.html` `<style>`, `@fontsource` packages in components |

---

## 🚀 SETUP COMMANDS

To initialize a new project with this structure:

1. `npm create vite@latest ./ -- --template react`
2. `npm install react-router-dom`
3. `npm install @fontsource/your-chosen-font` (optional)
4. Delete default boilerplate files (App.css content, logo, counter code)
5. Create the folder structure: `src/pages/`, `src/components/`, `src/css/`, `src/assets/`
6. Move `index.css` into `src/css/` and update the import path in `main.jsx`
7. Build out pages, components, and CSS following the patterns above

---

Now build the project for: [DESCRIBE YOUR PROJECT HERE — e.g., "an e-commerce landing page", "a restaurant website", "a SaaS dashboard", etc.]
```
