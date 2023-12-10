"use client";

import NextLink from "next/link";

import { cn } from "@/libs/utils";

import useAgent from "@/hooks/use-agent";

export default function Header() {
  const { isSafari } = useAgent();

  return (
    <header
      className={cn(
        "h-16 lg:h-12",
        // "border-y",
        // !isSafari && "lg:border-t-0",
        "fixed top-0 right-0 left-0",
        "z-50",
        "px-3 lg:px-12"
        // "bg-neutral-50/90 dark:bg-neutral-950/90",
        // "backdrop-blur-sm"
      )}
    >
      <div
        className={cn(
          "fluid",
          "h-full",
          "flex items-center justify-between",
          "border-x",
          "px-3 lg:px-4"
        )}
      >
        <NextLink
          href="/"
          className={cn(
            "flex items-center",
            // "text-3xl lg:text-sm",
            "font-bold"
            // "uppercase"
          )}
        >
          {/* otta */}
          {/* Taufik Oktama */}
        </NextLink>
        <button name="Share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
            className={cn("w-6 aspect-square")}
          >
            <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
