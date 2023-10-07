import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class", "[data-theme='dark']"],
    plugins: [require("@tailwindcss/typography")],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"]
            }
        }
    }
};

export default config;
