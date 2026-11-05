import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Northstar Digital",
    template: "%s | Northstar Digital",
  },
  description: "An independent digital studio building thoughtful brands, digital products, and experiences for what comes next.",
  openGraph: {
    title: "Northstar Digital",
    description: "An independent digital studio building thoughtful brands, digital products, and experiences for what comes next.",
    url: siteUrl,
    siteName: "Northstar Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Northstar Digital",
    description: "An independent digital studio building thoughtful brands, digital products, and experiences for what comes next.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-paper font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
