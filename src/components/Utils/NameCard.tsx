import NextLink from "next/link";

import { SOCIALS, cn } from "@/libs/utils";

export default function NameCard() {
  return (
    <div
      className={cn(
        "absolute",
        "left-0",
        "top-0",
        "right-0",
        // "bottom-0",
        "py-16",
        "z-40",

        "pointer-events-none",
        "touch-none",
        "px-4 lg:px-12"
      )}
    >
      <div
        className={cn(
          "border-x",
          "grid grid-cols-8 lg:grid-cols-12",
          // "bg-blue-500",
          "h-full"
        )}
      >
        <div
          className={cn(
            "bg-neutral-50 dark:bg-neutral-950",
            "p-4",
            "col-start-1",
            "col-span-6 lg:col-span-3",
            "border-y",
            "pointer-events-auto",
            "touch-auto",
            "flex",
            "flex-col",
            "gap-y-4",
            "leading-tight"
          )}
        >
          <div
            className={cn("text-3xl lg:text-4xl", "font-black", "leading-none")}
          >
            Open to Work or Collaboration
          </div>

          <div>
            <div className={cn("text-xl lg:text-2xl", "font-bold")}>
              Taufik Oktama
            </div>
            <div className={cn("text-lg lg:text-xl")}>
              Graphic Designer Turned Software &amp; Font Developer
            </div>
          </div>

          <div
            className={cn("text-md", "text-neutral-600 dark:text-neutral-500")}
          >
            Based in Leeds, <br />
            England, United Kingdom.
          </div>

          <ul
            className={cn(
              "flex",
              "gap-2",
              "flex-wrap",
              "text-neutral-600 dark:text-neutral-500",
              "max-lg:hidden"
            )}
          >
            {SOCIALS.sort((a, b) => a.label.localeCompare(b.label)).map(
              (item, i) => (
                <li key={i}>
                  <NextLink
                    {...item.link}
                    target="_blank"
                    className={cn("text-xs")}
                  >
                    {item.label}
                  </NextLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
