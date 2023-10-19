"use client";

import { BlogTocProps } from "@/components/Blogs/BlogToc";
import { cn } from "@/libs/utils";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import TOCList from "@/components/Blogs/TOCList";

export default function BlogTocMobile(props: BlogTocProps) {
    const { items } = props;
    const [open, setOpen] = useState(false);

    const tocMobile = useRef(null);
    useOnClickOutside(tocMobile, () => open && setOpen(false));
    return (
        <div ref={tocMobile} className={cn("lg:hidden", "relative")}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    "h-12",
                    "w-full",
                    "flex items-center justify-between",
                    "border-b",
                    "px-3",
                    "-mb-px",
                    "relative",
                    "z-10",
                    "bg-neutral-50/90 dark:bg-neutral-950/90",
                    "backdrop-blur-sm"
                )}
            >
                <span className={cn("font-bold")}>On this page</span>
                <span>
                    <motion.svg
                        animate={{ rotate: open ? "180deg" : "0deg" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height="1.5rem"
                        width="1.5rem"
                        fill="currentColor"
                    >
                        <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                    </motion.svg>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                            "px-3",
                            "absolute",
                            "right-0 left-0",
                            "bottom-0",
                            "translate-y-full",
                            "border-b",
                            "bg-neutral-50/90 dark:bg-neutral-950/90",
                            "backdrop-blur-sm",
                            "leading-normal",
                            "overflow-hidden"
                        )}
                    >
                        <TOCList items={items} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
