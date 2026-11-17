# Sumit Bhojani — Developer Portfolio

Modern, high-performance portfolio website engineered for **Sumit Bhojani**, Full Stack Developer & AWS Cloud Specialist. Built using **React.js, Vite, Tailwind CSS, and Lucide Icons**, with dark/light theme switching, live IST clock, interactive developer terminal, AWS serverless architecture visualizer, and direct resume download.

---

## ⚡ Tech Stack

- **Framework**: React.js (v18) + Vite
- **Styling**: Tailwind CSS with custom developer aesthetic & dot-grid patterns
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti & CSS keyframes

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static production bundle in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── Sumit_Bhojani_Resume.pdf   # Downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Responsive glassmorphism nav & theme toggle
│   │   ├── Hero.jsx               # Terminal widget, live IST clock, CTAs, verified badge
│   │   ├── About.jsx              # Summary, key statistics & specialization pillars
│   │   ├── Skills.jsx             # Categorized skills grid + AWS certification highlight
│   │   ├── Experience.jsx         # Dhitech Solutions timeline & production deliverables
│   │   ├── Projects.jsx           # DrivePG, Call Clutch, RBS deep dive & architecture flows
│   │   ├── Certifications.jsx     # AWS Certified Cloud Practitioner credential badge
│   │   ├── Education.jsx          # Gujarat Technological University B.E. details
│   │   ├── Contact.jsx            # Interactive contact form, WhatsApp & clipboard shortcuts
│   │   └── Footer.jsx             # Copyright & back-to-top button
│   ├── data/
│   │   └── portfolioData.js       # Central data store for quick edits
│   ├── App.jsx                    # Root component with dark mode state management
│   ├── index.css                  # Tailwind styles & dot grid pattern
│   └── main.jsx                   # React DOM entry point
├── index.html                     # HTML shell, metadata, and fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🌐 Free One-Click Deployment

### Deploy on Vercel:
1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository. Framework preset **Vite** will be auto-detected.
4. Click **Deploy**.

### Deploy on Netlify:
1. Connect your GitHub repository on [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **Deploy Site**.
