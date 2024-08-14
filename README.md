## Project Overview

[https://stocks.osias.dev/](https://stocks.osias.dev/)

This stock price web application allows users to search for real-time stock data by entering a company ticker symbol.

The app fetches data from the [Finnhub API](https://finnhub.io/docs/api/) and displays relevant stock information, including the current price, change percentage, market capitalization, and more.

### File Structure

- **`_components/`**:
  - **`SearchBar.tsx`**: The search bar component where users input stock symbols.
  - **`StockProfile.tsx`**: Displays the stock details after a search.
- **`_utils/`**:
  - **`fetchStockData.ts`**: Handles API requests for stock data.
  - **`formatter.ts`**: Handles numbers and dates formatting.
- **`(routes)/`**:
  - **`page.tsx`**: The homepage where users can search for stock information.
  - **`layout.tsx`**: The root layout of the application.
- **`api/`**:
  - **`stock/route.ts`**: API route for stock data.
- **`global.css`**: Global and component-specific styles for the application.
- **`store.ts`**: State management using [Jotai](https://jotai.org/) atoms

## Installation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Prerequisites

- [Obtain Finnhub API Key](https://finnhub.io/) (Place it in a `.env` file with the key `FINNHUB_API_KEY`)
- Node.js (v16.14.0 or higher)
- NPM or Yarn or equivalent

### Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
