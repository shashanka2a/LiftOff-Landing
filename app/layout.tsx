import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Liftoff – Design That Launches Startups",
  description: "High-impact digital experiences that transform bold ideas into beautiful products.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Liftoff – Design That Launches Startups",
    description: "High-impact digital experiences that transform bold ideas into beautiful products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liftoff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftoff – Design That Launches Startups",
    description: "High-impact digital experiences that transform bold ideas into beautiful products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const inter = Inter({ subsets: ["latin"] });
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


