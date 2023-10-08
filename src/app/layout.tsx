import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import Provider from "@/app/Provider";

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

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
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
        <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
