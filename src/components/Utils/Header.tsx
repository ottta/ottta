"use client";

import { AnimatePresence, type Variants, motion } from "framer-motion";
import NextLink from "next/link";
import { PropsWithChildren, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { SITEMAPS, cn } from "@/libs/utils";

type ModalChildProps = PropsWithChildren<{ className?: string }>;

function ModalChild(props: ModalChildProps) {
  const { children, className } = props;
  const variantsChild: Variants = {
    show: { y: "0%" },
    hide: { y: "-200%" }
  };
  return (
    <motion.div
      variants={variantsChild}
      transition={{ type: "just" }}
      className={cn(
        "relative",
        "px-4 py-2",
        "pointer-events-auto",
        "touch-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const refHeader = useRef(null);
  useOnClickOutside(refHeader, () => open && setOpen(false));

  const variantsParent: Variants = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
    hide: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0",
        "z-50",
        "lg:px-12",
        "select-none",
        "pointer-events-none",
        "touch-none"
      )}
    >
      <div
        className={cn(
          "grid",
          "grid-cols-6",
          "lg:border-x",
          "max-lg:divide-y lg:divide-x",
          "lg:w-[calc(50%+1px)]",
          "lg:h-screen",
          "transition-[border-color] duration-300",
          open ? "!border-inherit" : "!border-transparent"
        )}
      >
        <div
          className={cn(
            "h-16 lg:h-12",
            "flex items-center justify-between",
            "pr-4 lg:pr-2",
            "pl-4",
            "bg-neutral-50 dark:bg-neutral-950",
            "relative",
            "col-span-6 lg:col-span-3",
            "overflow-hidden",
            "pointer-events-auto",
            "touch-auto",
            "z-50",
            "border-b",
            "lg:border-x",
            "-mx-px"
          )}
        >
          <NextLink href="/" className={cn("text-xl", "font-bold")}>
            Taufik Oktama
          </NextLink>
          <motion.button
            disabled={open}
            onClick={() => setOpen((prev) => !prev)}
            animate={{ rotate: open ? "180deg" : "0deg" }}
            className={cn(
              "flex items-center",
              "font-bold",
              "border",
              "border-lime-400",
              "bg-lime-200",
              "rounded",
              "aspect-square",
              "w-12 lg:w-8",
              "rounded-full",
              "flex",
              "items-center justify-center"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="24"
              width="24"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              key="navigation"
              initial="hide"
              exit="hide"
              animate="show"
              variants={variantsParent}
              className={cn("relative", "col-span-6 lg:col-span-3")}
            >
              <div
                ref={refHeader}
                className={cn(
                  "col-span-3",
                  "col-start-1",
                  "flex",
                  "flex-col",
                  "divide-y"
                )}
              >
                <div
                  className={cn(
                    "bg-neutral-950 dark:bg-neutral-50",
                    "z-30",
                    "font-bold",
                    "h-12",
                    "flex",
                    "items-center",
                    "relative",
                    "z-30",
                    "px-4",
                    "text-neutral-50 dark:text-neutral-950",
                    "mb-4",
                    "pointer-events-auto",
                    "touch-auto"
                  )}
                >
                  <NextLink href="/">Menu</NextLink>
                </div>

                {/* <ModalChild
                  className={cn(
                    "bg-red-400",
                    "z-20",
                    "h-12",
                    "flex items-center"
                  )}
                ></ModalChild> */}

                <ModalChild
                  className={cn(
                    "bg-neutral-50 dark:bg-neutral-950",
                    "min-h-[15rem]",
                    "!border-b",
                    // "flex-grow",
                    "flex",
                    "flex-col",
                    "justify-between",
                    "py-4"
                  )}
                >
                  <ul>
                    {SITEMAPS.map((item, i) => (
                      <li key={i}>
                        <NextLink {...item.link} className={cn("text-4xl")}>
                          {item.label}
                        </NextLink>
                      </li>
                    ))}
                  </ul>

                  <div>
                    Repository for this site available{" "}
                    <NextLink
                      href="https://github.com/ottta/ottta"
                      target="_blank"
                      className={cn("underline")}
                    >
                      here
                    </NextLink>
                    .
                  </div>
                </ModalChild>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
