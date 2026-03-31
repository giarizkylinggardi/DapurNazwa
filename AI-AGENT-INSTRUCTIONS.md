# 🤖 AI Agent System Prompt & Development Guide
**Project:** Dapur Nazwa - Culinary Landing Page
**Goal:** Build a modern, highly performant, and responsive landing page with a Direct-to-WhatsApp ordering system.

## 🛠️ 1. Tech Stack & Versioning Rules
You MUST strictly adhere to the following technologies already configured in this project. **Do not use older versions or suggest installing alternative libraries unless explicitly asked.**

* **Framework:** React v19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS **v4** (using `@tailwindcss/vite`). *Note: Tailwind v4 has no `tailwind.config.js`. Use CSS variables in `src/index.css` for custom themes if needed.*
* **Animations:** Framer Motion (v12). Use simple, elegant scroll animations (`initial`, `whileInView`, `viewport={{ once: true }}`).
* **Icons:** `@phosphor-icons/react`. Always import individual icons (e.g., `import { WhatsappLogo, MapPin } from "@phosphor-icons/react"`).
* **Routing:** NO React Router needed. This is a Single Page Application (SPA) landing page. Use smooth scrolling for navigation.

## 📐 2. Code Style & Architecture Guidelines
* **Components:** Use React Functional Components with ES6 Arrow Functions.
* **Folder Structure:** Create the following directories inside `src/` as we build:
    - `src/components/` (Navbar, Footer, Buttons, MenuCard)
    - `src/sections/` (Hero, Menu, ContactLocation)
    - `src/data/` (menuData.js)
    - `src/assets/` (MUST contain subfolders: `makanan/`, `minuman/`, `paket/`, `snackbox/`, `cake/`, `donuts/`)
* **Styling Rules:** Use Tailwind utility classes. For complex dynamic classes, use template literals.
* **Clean Code:** Remove any unused imports. Keep components modular.

## 🎨 3. Design System (Dapur Nazwa)
* **Primary Color Theme:** Warm, appetizing colors (e.g., Orange/Amber/Red tones for primary buttons).
* **Typography:** Clean sans-serif.
* **Image Sizing (CRITICAL):** All product images MUST use `w-full h-48 object-cover` (or similar fixed height) inside cards to prevent layout breakage.
* **Brand Assets:** The logo is available at `public/logo.svg`. It can be accessed directly using `<img src="/logo.svg" />`.
* **WhatsApp Number:** All WA links MUST direct to `https://wa.me/6289668795011`.

---

## 🚀 4. Step-by-Step Execution Plan
**AI AGENT INSTRUCTION:** When the user asks you to build a specific step, follow the instructions below precisely. 

### Step 1: Initialization & Clean Up
* **Task:** Clean up `src/App.jsx`. Create basic layout importing `Navbar`, `Hero`, `Menu`, `ContactLocation`, `Footer`.
* **Data Setup:** Create `src/data/menuData.js`. 
    * **CRITICAL:** Each item MUST have a `category` property (makanan, minuman, paket, snackbox, cake, donuts) and the `image` must point to the correct subfolder (e.g., `src/assets/makanan/item.jpg`).

### Step 2: Navbar Component
* **Task:** Create `src/components/Navbar.jsx`.
* **Details:** Fixed top, responsive. 
    * **Logo:** Use `<img src="/logo.svg" alt="Dapur Nazwa Logo" className="h-10 w-auto" />` (adjust size to look attractive and proportional). Add navigation links.

### Step 3: Hero Section
* **Task:** Create `src/sections/Hero.jsx`.
* **Details:** Split layout. Catchy headline, description, and "Lihat Menu" CTA button. Add a soft Framer Motion fade-in.

### Step 4: Menu/Catalog Section with Category Filter
* **Task:** Create `src/sections/Menu.jsx` and `src/components/MenuCard.jsx`.
* **Details:** Create horizontal filter buttons for categories. Filter the mapped grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
* **MenuCard:** Show image (CRITICAL: `w-full h-56 object-cover rounded-t-xl`), title, desc, price, and "Pesan via WA" button. 
    * **WA Button Logic:** Target `https://wa.me/6289668795011?text=Halo Dapur Nazwa, saya ingin pesan: [Nama Menu]` using `window.open`.

### Step 5: Contact & Location Section
* **Task:** Create `src/sections/ContactLocation.jsx`.
* **Details:** Create a section displaying the physical address and a Google Maps embed.
    * **CRITICAL MAPS IMPLEMENTATION:** Use the exact JSX code below for the iframe. Wrap it in a responsive container (e.g., `className="w-full aspect-video md:h-96 rounded-xl overflow-hidden shadow-md"`).
    ```jsx
    <iframe 
      src="[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.21231675649!2d107.97657361046713!3d-7.101374192872313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f479e41f2c4cf%3A0x27250d8e0c591c1d!2sNazwa%20catering%2FDapur%20Nazwa!5e0!3m2!1sid!2sid!4v1774932079109!5m2!1sid!2sid](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.21231675649!2d107.97657361046713!3d-7.101374192872313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f479e41f2c4cf%3A0x27250d8e0c591c1d!2sNazwa%20catering%2FDapur%20Nazwa!5e0!3m2!1sid!2sid!4v1774932079109!5m2!1sid!2sid)" 
      className="w-full h-full"
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    ```

### Step 6: Footer & Floating WhatsApp Button
* **Task:** Create `src/components/Footer.jsx` and `src/components/FloatingWA.jsx`.
* **Details:** * **Footer:** Include the `/logo.svg` again (perhaps in grayscale or smaller size), copyright text, and operational hours.
    * **FloatingWA:** Fixed bottom-right button, pulsating animation. Target URL: `https://wa.me/6289668795011`.

---
**End of Instructions.** AI, acknowledge these rules and wait for the user to specify which step to execute first.