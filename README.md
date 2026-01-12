# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

The project is ready to deploy on platforms like Vercel (recommended) or Netlify.

### Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Create a new project in Vercel and import your repository.
3. In the Vercel project settings set (if not auto-detected):
   - **Build Command:** `npm run vercel-build` (or `npm run build`)
   - **Output Directory:** `dist`
4. Add any environment variables (if needed) in the Vercel dashboard and deploy.

A `vercel.json` is included to ensure the static build output (`dist`) is used and SPA routing rewrites to `index.html`.

**Notes:**

- If you deploy to a subpath (e.g., `https://example.com/my-app/`) set `base` in `vite.config.ts` (or use `--base /my-app/` during build).
- Optimize large images in `src/assets` (export WebP or compress images) for faster page loads — Vercel serves optimized static assets but smaller source files speed up build and transfer.
- If you rely on runtime environment variables, define them in the Vercel dashboard under Project Settings -> Environment Variables.

> Tip: update the local browserslist database before committing (optional):
> `npx update-browserslist-db@latest`


## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
