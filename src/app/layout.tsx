import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciao Maribella Ristorante | Upscale Northern Italian Dining in Sioux Falls",
  description: "Entri come amici, Vada come famiglia. Authentic Northern Italian cuisine in an elegant, warm setting. OpenTable Diners' Choice & Wine Spectator Award winner.",
  keywords: ["Italian restaurant", "Sioux Falls", "fine dining", "Northern Italian", "reservations", "wine bar"],
  openGraph: {
    title: "Ciao Maribella Ristorante",
    description: "Authentic Northern Italian cuisine in Sioux Falls, SD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
