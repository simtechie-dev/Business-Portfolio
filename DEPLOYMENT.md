# Deployment instructions

The publishable website is inside the `dist` folder. You can host it with any static website provider.

## Option 1: Netlify Drop — easiest

1. Create or sign in to a Netlify account.
2. Open `https://app.netlify.com/drop`.
3. Drag the complete `dist` folder into the upload area.
4. Netlify will provide a temporary website address.
5. Open **Domain management** if you want to connect your own domain.

## Option 2: Cloudflare Pages

1. Create or sign in to a Cloudflare account.
2. Open **Workers & Pages** and select **Create application**.
3. Choose **Pages** and upload the website assets.
4. Upload the contents of the `dist` folder.
5. There is no build command; the output directory is `dist` when using Git.
6. Use **Custom domains** to connect your own domain.

## Option 3: GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of the `dist` folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Save and wait for GitHub to provide the public link.

## Before connecting a custom domain

1. Replace `https://example.com/` in `dist/index.html` with the final domain.
2. Confirm that the phone numbers, emails and social links are still correct.
3. Test the Telegram, call and email buttons on a mobile phone.
4. Add the final website address to the Simtech Hub Google Business Profile.

## Files to upload

Upload everything inside `dist`:

- `index.html`
- `styles.css`
- `script.js`
- `assets/simtech-hub-logo.png`
