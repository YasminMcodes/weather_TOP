# Webpack Project Template

A simple, modern, and reusable Webpack starter template for JavaScript projects.

## Getting Started

1. Click **Use this template** on GitHub  
2. Clone your new repository  
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
  ```bash
  npm start
```
5. Build for production:
```
npm run build
```
6. Lint your code:
```
npm run lint
```

7. Format your code:
```
npm run format
```
Features

Webpack 5 + Babel (ES6 support)

HTMLWebpackPlugin for automatic HTML generation

CSS support (with style-loader & css-loader)

Image & font file support

Development server with live reload

ESLint + Prettier for code quality and consistent formatting

##Folder Structure

├── src/          # Source files
│   ├── index.js
│   ├── styles.css
│   └── assets/   # Images & fonts
├── dist/         # Production build (generated)
├── package.json
├── webpack.config.js
├── .eslintrc.json
└── .prettierrc

##Usage

Add JS, CSS, images, or fonts in src/

Import assets in your JS/CSS as needed

Run npm start for live development

Run npm run build for a production bundle

Recommended VS Code Extensions

ESLint – Linting support

Prettier – Code formatting

Live Server – Optional, for previewing static HTML

##Notes

Make sure your Node version is compatible with the template (Node 18+ recommended)

Update dependencies as needed for future projects
