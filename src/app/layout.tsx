import "./globals.css";

import { type Metadata } from "next";
import { headers } from "next/headers";
import { type PropsWithChildren } from "react";

import { mono, sans, serif, text } from "@/libs/fonts";
import { cn } from "@/libs/utils";

import Provider from "@/app/Provider";

import AppGrid from "@/components/Utils/AppGrid";
import BarBottom from "@/components/Utils/BarBottom";
import Footer from "@/components/Utils/Footer";
import Header from "@/components/Utils/Header";
import ScrollToTop from "@/components/Utils/ScrollToTop";
import Separator from "@/components/Utils/Separator";

const isProduction = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(
    isProduction ? `https://otta.unforma.club` : "http://localhost:3000"
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
          <Separator />
          <BarBottom />
          <ScrollToTop />
          <AppGrid />
        </Provider>
      </body>
    </html>
  );
}
