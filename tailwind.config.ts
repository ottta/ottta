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
                serif: ["var(--font-serif)"],
                mono: ["var(--font-mono)"]
            },
            screens: {
                "3xl": "1792px",
                "4xl": "2048px"
            },
            colors: {
                neutral: {
                    950: "#0d0d0d"
                }
            },
            typography: ({ theme }: any) => ({
                neutral: {
                    css: {
                        "--tw-prose-body": theme("colors.neutral.950"),
                        "--tw-prose-headings": theme("colors.neutral.950"),
                        "--tw-prose-links": theme("colors.pink.500"),
                        "--tw-prose-bold": theme("colors.neutral.950"),
                        "--tw-prose-hr": theme("colors.neutral.300"),
                        "--tw-prose-quote-borders": theme("colors.neutral.300"),
                        "--tw-prose-quotes": theme("colors.neutral.950"),
                        "--tw-prose-code": theme("colors.neutral.950"),
                        "--tw-prose-invert-body": theme("colors.neutral.300"),
                        "--tw-prose-invert-headings": theme("colors.neutral.300"),
                        "--tw-prose-invert-links": theme("colors.pink.600"),
                        "--tw-prose-invert-bold": theme("colors.neutral.200"),
                        "--tw-prose-invert-hr": theme("colors.neutral.800"),
                        "--tw-prose-invert-quote-borders": theme("colors.neutral.800"),
                        "--tw-prose-invert-quotes": theme("colors.neutral.300"),
                        "--tw-prose-invert-code": theme("colors.neutral.300")
                    }
                }
            })
        }
    }
};

export default config;
