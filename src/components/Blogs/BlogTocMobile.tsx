"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { cn } from "@/libs/utils";

import useNavigationEvents from "@/hooks/use-navigation-events";
import useTableOfContent from "@/hooks/use-table-content";

import { BlogTocProps } from "@/components/Blogs/BlogToc";
import TOCList from "@/components/Blogs/TOCList";

function TOCIndicator(props: BlogTocProps) {
  const { items } = props;
  const active = useTableOfContent(items);

  if (!active) return <></>;
  const selected = items.find((item) => item.htmlId === active);
  if (!selected) return <></>;
  return (
    <span className={cn("line-clamp-1", "text-left", "font-text")}>
      {selected.text.trim()}
    </span>
  );
}

export default function BlogTocMobile(props: BlogTocProps) {
  const { items } = props;
  const [open, setOpen] = useState(false);

  const tocMobile = useRef(null);
  useOnClickOutside(tocMobile, () => open && setOpen(false));
  useNavigationEvents({ action: () => setOpen(false) });
  return (
    <div ref={tocMobile} className={cn("lg:hidden", "relative")}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "h-12",
          "w-full",
          "flex items-center justify-between",
          "gap-x-3",
          "border-b",
          "px-3",
          "-mb-px",
          "relative",
          "z-10",
          "bg-neutral-50/90 dark:bg-neutral-950/90",
          "backdrop-blur-sm"
        )}
      >
        <div className={cn("flex", "gap-x-3", "overflow-hidden", "w-full")}>
          <span className={cn("font-bold", "shrink-0")}>On this page</span>
          <TOCIndicator items={items} />
        </div>
        <span className={cn("shrink-0")}>
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
            initial={{ opacity: 0, y: "88%", scale: 0.88 }}
            animate={{ opacity: 1, y: "100%", scale: 1 }}
            exit={{ opacity: 0, y: "88%", scale: 0.88 }}
            transition={{ type: "tween", stiffness: 1000, duration: 0.1 }}
            className={cn(
              "px-0 py-0",
              "absolute",
              "right-3 left-3",
              "bottom-0",
              "translate-y-full",
              "border-b border-x",
              "rounded-b-2xl",
              "bg-neutral-50/90 dark:bg-neutral-950/90",
              "backdrop-blur-sm",
              "overflow-hidden",
              "shadow-neutral-400 dark:shadow-neutral-700",
              "shadow-[0_1rem_2rem_-0.25rem]"
            )}
          >
            <TOCList items={items} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
