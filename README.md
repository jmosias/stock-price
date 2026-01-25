## Project Overview

![Image](https://github.com/user-attachments/assets/3e9fc110-da4b-4574-9526-29fa7b3df68c)

[View Live Website](https://stocks.osias.dev/)

This stock price web application allows users to search for real-time stock data by entering a company ticker symbol.

The app fetches data from the [Finnhub API](https://finnhub.io/docs/api/) and displays relevant stock information, including the current price, change percentage, market capitalization, and more.

### File Structure

- **`_components/`**:
  - **`SearchBar.tsx`**: The search bar component where users input stock symbols.
  - **`StockProfile.tsx`**: Displays the stock details after a search.
- **`_lib/`**:
  - **`constants.ts`**: Contains constant variables like error messages.
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
- NPM or PNPM or equivalent

### Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

