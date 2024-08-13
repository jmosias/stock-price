import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";

const notoSans = Noto_Sans({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

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
      <body className={`${notoSans.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
