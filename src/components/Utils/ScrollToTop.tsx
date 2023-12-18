"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/libs/utils";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.8, 0.9], ["100%", "0%"]);
  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ type: "tween" }}
      className={cn(
        "fixed",
        "bottom-16 lg:bottom-12",
        "left-3 lg:left-12",
        "right-3 lg:right-12",
        "z-10",
        "grid grid-cols-4 lg:grid-cols-12",
        "pointer-events-none",
        "touch-none"
      )}
    >
      <div
        className={cn(
          "col-start-4 col-span-1",
          "lg:col-start-12 col-span-1",
          "flex items-center justify-center lg:justify-end",
          "py-2",
          "lg:px-4"
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className={cn(
            "w-12 lg:w-12",
            "aspect-square",
            "text-rose-500 dark:text-rose-600",
            "bg-rose-300 dark:bg-rose-800",
            "border border-current",
            "rounded-full",
            "flex items-center justify-center",
            "pointer-events-auto",
            "touch-auto",
            "shadow"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            height="1.5rem"
            width="1.5rem"
            fill="currentColor"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
