"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/libs/utils";

import { ContainerInfo } from "@/components/Accents/ContainerInfo";
import CrossWord from "@/components/Accents/CrossWord";

function EndCap() {
  return (
    <ul
      className={cn(
        "absolute",
        "h-[calc(100vh-0rem+0px)]",
        "w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-6rem)]",
        "top-0 right-px",
        "translate-x-full",
        "bg-neutral-200 dark:bg-neutral-900",
        "grid grid-cols-12",
        "divide-x"
      )}
    >
      {Array(3)
        .fill("")
        .map((_, i) => {
          const isFirst = i === 0;
          const isSecond = i === 1;
          const isThird = i === 2;
          return (
            <li
              key={i}
              className={cn(
                "-ml-px",
                "overflow-hidden",
                "relative",
                isFirst && "col-span-6",
                isSecond && "col-span-3",
                isThird && "col-span-3",
                !isFirst && "flex flex-col divide-y"
              )}
            >
              {isFirst && <ContainerInfo />}
              {!isFirst && (
                <>
                  <div className={cn("h-1/2", "relative")}>
                    {isThird && (
                      <div
                        className={cn(
                          "border",
                          "rounded-full",
                          "w-full aspect-square",
                          "absolute",
                          "top-1/2 left-1/2",
                          "-translate-x-1/2 -translate-y-1/2"
                        )}
                      />
                    )}
                  </div>
                  <div
                    className={cn(
                      "h-1/2",
                      "bg-cover bg-center",
                      "text-red-500",
                      "backdrop:grayscale",
                      "p-4",
                      "text-4xl",
                      "font-bold",
                      "grayscale"
                    )}
                    style={{
                      backgroundImage: isThird
                        ? "url(/images/reservoir.jpg)"
                        : "none"
                    }}
                  >
                    {isThird && <>FFF</>}
                  </div>
                </>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // target: undefined,
    offset: ["start end", "end"]
  });

  const horz = useTransform(scrollYProgress, [0.33, 0.95], ["0%", "-100%"]);
  const bgX = useTransform(scrollYProgress, [0.33, 1], ["33.33%", "-66.66%"]);

  return (
    <div
      className={cn(
        "border-y",
        "-mt-px",
        "px-3 lg:px-12",
        "max-lg:hidden",
        "bg-neutral-200 dark:bg-neutral-900"
      )}
    >
      <div ref={targetRef} className={cn("h-[300vh]", "border-x", "relative")}>
        <div
          className={cn(
            "sticky top-0 lg:top-0",
            "h-screen",
            "flex",
            "overflow-hidden",
            "bg-neutral-200 dark:bg-neutral-900"
          )}
        >
          <motion.div
            style={{
              x: bgX,
              backgroundImage: `url("/images/gajah-small.png")`
            }}
            className={cn(
              "absolute",
              "h-full",
              "left-0 right-0",
              "overflow-hidden",
              "bg-contain",
              "bg-center",
              "bg-no-repeat"
            )}
          />

          <motion.div
            style={{ x: horz }}
            className={cn(
              "h-full",
              "flex items-center flex-nowrap",
              "relative",
              "divide-x",
              "relative"
            )}
          >
            <div
              className={cn(
                "w-[calc(100vw-6rem)]",
                "h-full",
                "p-4",
                "relative",
                "flex items-end",
                "bg-neutral-200 dark:bg-neutral-900"
              )}
            >
              <div
                style={{ fontVariationSettings: `"wdth" 75` }}
                className={cn(
                  "text-[20rem]",
                  "font-black",
                  "leading-none",
                  "px-4",
                  "absolute",
                  "bottom-0",
                  "right-0"
                )}
              >
                A1
              </div>
            </div>
            <CrossWord />
            <EndCap />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
