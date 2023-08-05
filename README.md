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

NOTE:

When cloning on a different machine, do this:
```bash
git clone --recurse-submodules <repository_url>
```

Replace <repository_url> with the URL of your React app's repository on GitHub. The --recurse-submodules flag ensures that Git recursively clones the main repository and all its submodules.

After cloning, you'll have both the main repository and the strapi submodule locally, and you can work with the entire codebase, including the content of the strapi folder. However, keep in mind that submodules maintain their own separate version history, and you'll need to manually update the submodule if you want to use the latest changes from the strapi repository.

# 3. Frontend

## 3.4 Navbar

### 3.4.1 Commit: Add navbar

"3.4.1. Add navbar"

Add basic structure.


### 3.4.2 Commit: Add navbar svg icons and wrapping div

"3.4.2. Add navbar svg icons and wrapping div"

Icons will be used later.

### 3.4.3 Commit: Add navbar logo

"3.4.3. Add navbar logo"

I haven't copied it correctly from the course repo, Github currently has issues with SVGs, but I've fixed it. Hence the weirdness in the code.

### 3.4.4 Commit: Add navbar links and styles

"3.4.4. Add navbar links and styles"

react-tailwind-strapi-003-04-04-navbar-links-and-styles-commit-done.mp4

### 3.4.5 Commit: Add navbar buttons and styles

"3.4.5. Add navbar buttons and styles"

Add the Login and Sign Up buttons.

### 3.4.6 Commit: Add navbar menu button (toggleable on mobile)

"3.4.6 Commit: Add navbar menu button (toggleable on mobile)"

Add the icon, styling, and toggleability.

## 3.5 Blogs Section

### 3.5.1 Commit: Add blogs section

"3.5.1. Add blogs section"

* Add basic structure.
* Add styling.
* The video shows the responsiveness issue with the single card image on mobile. I've fixed it in the next commit.

react-tailwind-strapi-003-05-01-add-blogs-section-card-styling-issue.mp4

### 3.5.2 Commit: Add navbar menu overlap fix

"3.5.2. Add navbar menu overlap fix"

* Previously, the image was going under the navbar. This fixes it.

### 3.5.3 Commit: Update blogs card with title n desc, repeat cards

"3.5.3 Commit: Update blogs card with title n desc, repeat cards"

* Added an h3 and a p tag under the image.
* Repeated the same card three times (hard coded).
* Also, I'm dynamically repeating cards, because hard-coding is bad.

react-tailwind-strapi-003-05-03-update-blogs-card-with-title-desc-plus-repeat-cards.mp4

### 3.5.4 Commit: Further improve blogs cards responsiveness

"3.5.4 Commit: Further improve blogs cards responsiveness"

* Added small and medium screens columns for the cards.

react-tailwind-strapi-003-05-04-further-improve-blogs-cards-responsiveness.mp4

## 3.6 Footer

### 3.6.1 Commit: Add footer

"3.6.1 Add footer"

* Add basic structure.

react-tailwind-strapi-003-06-01-add-footer.mp4

### 3.6.2 Commit: Add footer styling

"3.6.2 Add footer styling"

Install icons:
`npm i react-icons`

react-tailwind-strapi-003-06-02-add-footer-styling.mp4

## 3.7 Blog Content (Pt 1)

### 3.7.1 Commit: Add Homepage page

"3.7.1 Add Homepage page"

* Move the content of App.jsx page to separate page, called Homepage.jsx.

react-tailwind-strapi-003-07-01-add-homepage-component.mp4

### 3.7.2 Commit: Add BlogContent page

"3.7.2 Add BlogContent page"

* Add BlogContent page.
* Hook up the basic structure and test using only BlogContent in App.jsx because later on I'll be dynamically switching between BlogContent and Homepage using routing.

react-tailwind-strapi-003-07-02-add-blogcontent-page.mp4

### 3.7.3 Commit: Add BlogContent component

"3.7.3 Add BlogContent component, mv pages/BlogContent to pages/BlogContentPage"

* Add BlogContent component.
* Update the pages/BlogContent to pages/BlogContentPage because there was a naming conflict.
