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
