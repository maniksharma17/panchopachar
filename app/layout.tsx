import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panchopachar",
  description: "Panchopachar: Health & wellness resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
