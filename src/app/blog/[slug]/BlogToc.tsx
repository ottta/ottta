"use client";

import NextLink from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

import useTableOfContent from "@/hooks/use-table-content";
import { IToc } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

type BlogTocProps = {
    items: IToc[];
};

function ItemToc(
    props: IToc & {
        activeToc: string | null;
    }
) {
    const { level, htmlId, text, activeToc } = props;
    const isActive = activeToc === htmlId;
    return (
        <li className={cn(level === 2 && "pl-4", level === 3 && "pl-8", "relative")}>
            <NextLink
                shallow
                href={`#${htmlId}`}
                data-level={level}
                className={cn(
                    "line-clamp-1",
                    "text-neutral-400 dark:text-neutral-700",
                    isActive && "text-neutral-950 dark:text-neutral-300 font-bold",
                    "transition-all duration-300"
                )}
            >
                {text}
            </NextLink>
        </li>
    );
}

function TocMobile(props: BlogTocProps & { activeToc: string | null }) {
    const { items, activeToc } = props;
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
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                            "p-3",
                            "absolute",
                            "right-0 left-0",
                            "bottom-0",
                            "translate-y-full",
                            "border-b",
                            "bg-neutral-50/90 dark:bg-neutral-900",
                            "backdrop-blur-sm",
                            "leading-normal"
                        )}
                    >
                        {items.map((item, i) => (
                            <ItemToc key={i} activeToc={activeToc} {...item} />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function BlogToc(props: BlogTocProps) {
    const { items } = props;
    const activeToc = useTableOfContent(items);

    if (items.length <= 0) return <div>No TOCs</div>;
    return (
        <>
            <div
                className={cn(
                    "max-lg:hidden",
                    "sticky",
                    "top-12",
                    "p-4",
                    "flex flex-col",
                    "gap-y-4"
                )}
            >
                <div className={cn("font-bold")}>On this page</div>
                <ul className={cn("leading-normal")}>
                    {items.map((item, i) => (
                        <ItemToc key={i} activeToc={activeToc} {...item} />
                    ))}
                </ul>
            </div>

            <TocMobile activeToc={activeToc} items={items} />
        </>
    );
}
