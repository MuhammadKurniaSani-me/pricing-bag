# 📦 Goodie Bag Pricing Engine

A blazing-fast, static web application built to automate complex manufacturing pricing rules for custom goodie bags. 

This tool eliminates manual calculation errors for the Marketing and Customer Service teams by converting raw dimensions, material choices, and economic variables into precise manufacturing costs and automated WhatsApp templates.

## 🚀 Features

*   **Decoupled Architecture:** Pricing rules (materials, print costs, margins) are completely separated from the UI logic and stored in a static `catalog.json` file, allowing management to update prices without touching the codebase.
*   **Dynamic Volume Pricing:** Implements a linear interpolation algorithm to automatically adjust profit margins based on order volume (e.g., higher margins for 100 pcs, gliding down to wholesale margins at 1,000+ pcs).
*   **MOQ & Prototype Handling:** Automatically intercepts orders below the Minimum Order Quantity (MOQ) and pivots the logic to calculate a flat-rate prototype/sampling fee.
*   **Zero-Friction CS Workflow:** Instantly generates a formatted WhatsApp message based on the calculated output, complete with a one-click "Copy to Clipboard" feature.

## 🛠️ Tech Stack

*   **Framework:** [Astro](https://astro.build/) (For zero-overhead component rendering and static site generation)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Runtime & Package Manager:** [Bun](https://bun.sh/) (For lightning-fast local development)
*   **Deployment:** GitHub Actions (CI/CD) & GitHub Pages

## ⚙️ How to Update Prices (For Management)

All pricing logic is stored in `src/data/catalog.json`. To update a price, simply edit the JSON file and commit the changes. 

```json
"materials": {
  "spunbond_75gsm": 0,
  "canvas": 4000, 
  "dinier": 3500
}
```

## 🚀 CI/CD Pipeline

This project is configured with a GitHub Actions workflow (.github/workflows/deploy.yml). Any push to the main branch will automatically trigger a production build via Astro and deploy the latest static assets to GitHub Pages. No manual server deployment is required.