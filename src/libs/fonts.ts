import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sans = localFont({
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

export const serif = localFont({
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

export const text = localFont({
  display: "block",
  variable: "--font-text",
  src: [
    {
      path: "../../public/fonts/Ordinal[slnt,wght].woff2",
      weight: "300 700",
      style: "normal italic"
    }
  ]
});

export const mono = JetBrains_Mono({
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["italic", "normal"],
  variable: "--font-mono"
});
