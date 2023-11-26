import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { headers } from "next/headers";
import type { PropsWithChildren } from "react";

import { cn } from "@/libs/utils";

import Provider from "@/app/Provider";

import AppGrid from "@/components/AppGrid";
import BarBottom from "@/components/BarBottom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const isProduction = process.env.NODE_ENV === "production";

const sans = localFont({
  display: "block",
  variable: "--font-sans",
  src: [
    {
      path: "../../public/fonts/Georama[wdth,wght].ttf",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "../../public/fonts/Georama-Italic[wdth,wght].ttf",
      weight: "100 900",
      style: "italic"
    }
  ]
});

const serif = localFont({
  display: "block",
  variable: "--font-serif",
  src: [
    {
      path: "../../public/fonts/Labrada[wght].woff2",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "../../public/fonts/Labrada-Italic[wght].woff2",
      weight: "100 900",
      style: "italic"
    }
  ]
});

const text = localFont({
  display: "block",
  variable: "--font-text",
  src: [
    {
      path: "../../public/fonts/OpenSans[wdth,wght].ttf",
      weight: "300 800",
      style: "normal"
    },
    {
      path: "../../public/fonts/OpenSans-Italic[wdth,wght].ttf",
      weight: "300 800",
      style: "italic"
    }
  ]
});

const mono = JetBrains_Mono({
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["italic", "normal"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    isProduction ? `https://ottta.vercel.app` : "http://localhost:3000"
  ),
  alternates: {
    canonical: "/"
  },
  title: {
    template: "%s | Taufik Oktama",
    default: "Taufik Oktama"
  },
  description:
    "A Designer turned Software Developer. Now run Unforma Club, and develop typography product Truetype Supply: for Type Designers & Foundries",
  applicationName: "Taufik's Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e5e4" },
    { media: "(prefers-color-scheme: dark)", color: "#fb923c" }
  ],
  authors: [
    { name: "Taufik Oktama", url: "https://unforma.club/oktama-taufik" }
  ],
  creator: "Taufik Oktama",
  publisher: "Taufik Oktama",
  keywords: [
    "Designer",
    "Type Design",
    "Font",
    "Font Engineer",
    "Font Production",
    "Portfolio",
    "A Jack of All Trades"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;
  const headerList = headers();
  const agent = headerList.get("user-agent");

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        sans.variable,
        serif.variable,
        mono.variable,
        text.variable
      )}
    >
      <body>
        <Provider agent={agent}>
          <Header />
          <main
            className={cn(
              "min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-6rem)]"
            )}
          >
            {children}
          </main>
          <Footer />
          <BarBottom />
          <ScrollToTop />
          <AppGrid />
        </Provider>
      </body>
    </html>
  );
}
