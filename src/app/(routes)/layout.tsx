import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Real-Time Stock Prices",
  description: "Search stock symbols and check their prices in real time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Stocks" />
      </head>
      <body className="bg-background text-foreground font-sans`">
        {children}
      </body>
    </html>
  );
}
