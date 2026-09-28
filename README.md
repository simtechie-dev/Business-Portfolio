# Simtech Hub Website

A responsive one-page website built with plain HTML, CSS and JavaScript.

## Project structure

```text
simtech-hub/
├── dist/
│   ├── assets/
│   │   └── simtech-hub-logo.png
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .openai/
│   └── hosting.json
├── README.md
└── DEPLOYMENT.md
```

## Open the website locally

You can double-click `dist/index.html` to open it directly in a browser.

For the most accurate local preview, open a terminal inside the `dist` folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Edit the website

- Edit content and page structure in `dist/index.html`.
- Edit colours, spacing and responsive design in `dist/styles.css`.
- Edit the mobile menu and quote-form behaviour in `dist/script.js`.
- Replace `dist/assets/simtech-hub-logo.png` only with another transparent logo file using the same filename.

## Brand colours

- Purple: `#5A2A83`
- Orange: `#FF7217`

## Important notes

- The quote form does not store customer information.
- It prepares a message for the customer to copy and send through Telegram.
- Replace the placeholder portfolio items with genuine project samples when available.
- Update the canonical URL in `dist/index.html` after connecting a real domain.

See `DEPLOYMENT.md` for publishing instructions.
