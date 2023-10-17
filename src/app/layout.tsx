import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Ubuntu_Mono } from "next/font/google";
import localFont from "next/font/local";
import Provider from "@/app/Provider";
import AppGrid from "@/components/AppGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarBottom from "@/components/BarBottom";
import { cn } from "@/libs/utils";
import ScrollToTop from "@/components/ScrollToTop";

const isProduction = process.env.NODE_ENV === "production";

const sans = localFont({
    display: "swap",
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
    display: "swap",
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

const ubuntu = Ubuntu_Mono({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-mono"
});

export const metadata: Metadata = {
    metadataBase: new URL(isProduction ? `https://ottta.vercel.app` : "http://localhost:3000"),
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
        { media: "(prefers-color-scheme: light)", color: "#fafafa" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
    ],
    authors: [{ name: "Taufik Oktama", url: "https://unforma.club/oktama-taufik" }],
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
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(sans.variable, serif.variable, ubuntu.variable)}
        >
            <body>
                <Provider>
                    <Header />
                    <main className={cn("min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-6rem)]")}>
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
