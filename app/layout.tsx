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
  openGraph: {
    title: "Wellington Funeral Home Jamaica | Compassionate Funeral Services",
    description: "Wellington's Funeral Home provides compassionate funeral services in Port Maria, Jamaica. Available 24/7.",
    type: "website",
    locale: "en_JM",
    siteName: "Wellington Funeral Home",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1A365D" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
