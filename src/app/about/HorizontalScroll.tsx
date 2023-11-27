"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/libs/utils";

import { ContainerInfo } from "@/components/Accents/ContainerInfo";
import CrossWord from "@/components/CrossWord";

function EndCap() {
  return (
    <ul
      className={cn(
        "absolute",
        "h-[calc(100vh-6rem+1px)]",
        "w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-6rem)]",
        "top-0 right-px",
        "translate-x-full",
        "bg-neutral-100 dark:bg-neutral-900",
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
                      "font-bold"
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
    <div className={cn("border-y", "-mt-px", "px-3 lg:px-12", "max-lg:hidden")}>
      <div
        ref={targetRef}
        data-layout="fluid"
        className={cn(
          "h-[calc(640vh-3rem)] lg:h-[calc(300vh-6rem)]",
          "border-x",
          "relative"
        )}
      >
        <div
          className={cn(
            "sticky top-16 lg:top-12",
            "h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)]",
            "flex",
            "overflow-hidden",
            "bg-neutral-100 dark:bg-neutral-900"
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
                "w-[calc(50vw-3rem)]",
                "h-full",
                "p-4",
                "relative",
                "flex items-end",
                "bg-neutral-100 dark:bg-neutral-900"
              )}
            >
              <div className={cn("text-9xl", "font-bold", "px-4")}>A1</div>
            </div>
            <CrossWord />
            <EndCap />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
