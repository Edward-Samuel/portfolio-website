# Edward Samuel L — Portfolio

A dark, modern, single-page portfolio website built with React + Vite.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## deploy to Firebase Hosting

1. Install the Firebase CLI (if you haven't already):
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```bash
   firebase login
   ```

3. Replace the placeholder project ID in `.firebaserc` with your actual Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```
   (`firebase.json` is already configured with `public: "dist"` and SPA rewrites.)

## Customization

- Edit content: `src/data.js`
- Edit colors / styling: `src/index.css` (`:root` CSS variables)
- Build output directory: `dist` (configured in `vite.config.js` and `firebase.json`)
