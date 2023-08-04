# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 2. Project Setup

## 2.2 React JS & Tailwind CSS

### 2.2.1 Installing Vite locally

```bash
npm create vite@latest react-tailwind-strapi-blog -- --template react

# Need to install the following packages:
#    create-vite@4.4.1
# Ok to proceed? (y) y

npm i
npm run dev

  VITE v4.4.8  ready in 509 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Video:
react-tailwind-strapi-001-vite-react-working.mp4

## 2.2.2 Install Tailwind CSS

As per [Tailwind CSS: Installation](https://tailwindcss.com/docs/guides/vite):

```bash
# npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Stop the server, then:
```bash
npm i -D tailwindcss postcss autoprefixer; npx tailwindcss init -p
```

## 2.2.3 Tailwind config

Tailwind config:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 2.2.4 Add to index.css

1. Comment out all the code
2. Add on top:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start build process: `npm run dev`.

## 2.2.5 Start using TW in App.js

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
        Hello World!
    </h1>
  );
}
```

End of 2.2 vid:
react-tailwind-strapi-002-02-tw-working.mp4

## 2.3 Strapi CMS

### 2.3.1. Run the strapi command

```bash
# npx create-strapi-app@latest react-tailwind-strapi-blog --quickstart
npx create-strapi-app@latest strapi --quickstart

Need to install the following packages:
  create-strapi-app@4.12.1
Ok to proceed? (y)
Creating a quickstart project.
Creating a new Strapi application at C:\Users\...\react-tailwind-strapi-blog\strapi.
Creating files.
⠋ Installing dependencies:
```

Adds new folder, `strapi`.
```
localhost:1337/admin/auth/register-admin
```

Q:
I've ran the command npx create-strapi-app@latest strapi --quickstart, which opened the admin login at localtost 1337, but I've accidentally stopped the process with CTRL + D in the terminal. How do I restart the process so that I can setup the login for strapi admin?

A:
```
cd strapi
npm run develop
# go to http://localhost:1337/admin
```

End of 2.3.1 vid:
react-tailwind-strapi-002-03-01-pt1-strapi-admin-creds-setup.mp4
react-tailwind-strapi-002-03-01-pt2-adding-Blogs-collection.mp4












