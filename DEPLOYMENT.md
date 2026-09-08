# Deploy to Vercel

## Fastest method

1. Push this project to GitHub.
2. Open https://vercel.com/new.
3. Import the GitHub repository.
4. Keep the detected framework as **Vite**.
5. Click **Deploy**.

The project already includes `vercel.json` with the correct build command and output folder.

## Vercel CLI

After installing Node.js, run:

```bash
npm install -g vercel
vercel login
vercel --prod
```

When prompted, accept the project defaults. The command prints your live URL.
