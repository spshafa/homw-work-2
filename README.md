# Beautiful Card Gallery - Lab Task

A responsive React + Vite project that displays a gallery of cards from local JSON data. Each card includes a Celebrate button and interactive feedback using toast notifications and a congratulations popup.

## Features

- Loads card data from `public/labData.json` using `useEffect` and `useState`
- Displays 8 unique cards with title, category, description, and image
- Celebrate action on card/button click
- Success toast using `react-toastify`
- In-app congratulations popup modal (without browser alert)
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite 8
- React Toastify
- ESLint
- Plain CSS

## Project Structure

```text
Lab_Task/
|- public/
|  |- labData.json
|- src/
|  |- components/
|  |  |- Card.jsx
|  |  |- Navbar.jsx
|  |- App.jsx
|  |- App.css
|  |- index.css
|  |- main.jsx
|- index.html
|- package.json
|- vite.config.js
|- eslint.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Starts Vite dev server
- `npm run build`: Creates production build
- `npm run preview`: Previews production build locally
- `npm run lint`: Runs ESLint checks

## Data Source

Card data is stored locally in:

- `public/labData.json`

Update this file to add, remove, or edit gallery cards.

## Author

Dipta Acharjee
