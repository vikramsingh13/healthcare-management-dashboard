import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from '/@lib/utils';

const inter = Inter({ subsets: ["latin"] });

const fontSans = Plus_Jakarta_Sans({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Healthcare Management System",
  description: "Author: Vikram Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn}>{children}</body>
    </html>
  );
}
