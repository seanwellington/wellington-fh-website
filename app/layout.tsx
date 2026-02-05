import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellington Funeral Home Jamaica | Compassionate Funeral Services",
  description: "Wellington's Funeral Home provides compassionate funeral services in Port Maria, Jamaica. Available 24/7 for at-need services, pre-planning, and cremation. Call +1 876-996-7077.",
  keywords: ["funeral home", "Jamaica", "Port Maria", "St. Mary", "cremation", "burial", "funeral services", "Wellington"],
  authors: [{ name: "Wellington's Funeral Home & Company Limited" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Wellington Funeral Home Jamaica | Compassionate Funeral Services",
    description: "Wellington's Funeral Home provides compassionate funeral services in Port Maria, Jamaica. Available 24/7.",
    type: "website",
    locale: "en_JM",
    siteName: "Wellington Funeral Home",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Wellington Funeral Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellington Funeral Home Jamaica',
    description: 'Compassionate funeral services in Port Maria, Jamaica. Available 24/7.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#1A365D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
