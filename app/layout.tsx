import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DW Library",
  description: "personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
