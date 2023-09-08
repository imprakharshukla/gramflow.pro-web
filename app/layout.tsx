import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GramFlow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gramflow.pro",
    images: [
      {
        url: "https://gramflow.pro/og_image_gramflow.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GramFlow",
    description:
      "Start selling rapidly on Instagram with Automated Orders, Shipping and Accounting",
    images: [
      {
        url: "https://gramflow.pro/og_image_gramflow.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  description:
    "Start selling rapidly on Instagram with Automated Orders, Shipping and Accounting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
