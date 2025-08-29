import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../lib/fontawsome"
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiscal Fusion - Fusing News and Numbers.",
  description: "Fiscal Fusion – your go-to destination for global news, timely updates, and deep insights on everything from politics and business to lifestyle and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/bogong-moth-celestial-navigation-stars-migration.webp" as="image" />
        <link rel="preload" href="/images/greenergy-biodiesel-plant-closure.webp" as="image" />
        <link rel="preload" href="/images/bayrou-censure-motion-political-tensions-2025.webp" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider  defaultTheme="light" enableSystem={true}>
          
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}
