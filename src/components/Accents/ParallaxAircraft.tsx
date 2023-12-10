"use client";

import landscape from "../../../public/images/astronout-1.png";

import { motion, useScroll, useTransform } from "framer-motion";
import NextImage from "next/image";
import { useRef } from "react";

import { cn } from "@/libs/utils";

import useAgent from "@/hooks/use-agent";

export default function ParallaxAircraft() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.5, 0.9], [1.2, 0.7]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.9], [0, -25]);

  const { isMobile } = useAgent();

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative",
        "h-screen",
        "w-screen",
        "overflow-hidden",
        "border-b",
        "bg-gradient-to-b",
        "from-neutral-300 dark:from-neutral-800",
        "to-transparent"
      )}
    >
      <motion.div
        style={{ fontVariationSettings: `"wdth" 75` }}
        className={cn(
          "absolute",
          "whitespace-nowrap",
          "leading-none",
          "px-3 lg:px-12"
        )}
      >
        <div className={cn("text-[11rem] lg:text-[20rem]", "font-black")}>
          H45&deg;+
        </div>
        {/* <div
          className={cn("text-6xl", "px-4")}
          style={{ fontFeatureSettings: `"zero" 1` }}
        >
          Leeds, England, UK
        </div> */}
      </motion.div>

      <motion.div
        style={{ rotate, scale }}
        className={cn("relative", "w-screen", "h-screen", "overflow-hidden")}
      >
        <NextImage
          alt="Astronout"
          src={landscape}
          priority
          fill
          className={cn(
            "object-cover",
            "object-center",
            "select-none",
            "pointer-events-none",
            "touch-none"
          )}
        />
      </motion.div>

      <ul
        className={cn(
          "absolute",
          "left-3 right-3",
          "lg:left-12 lg:right-12",
          "top-0 bottom-0",
          "border-x",
          "grid",
          "grid-cols-8 lg:grid-cols-12",
          "divide-x",
          "select-none",
          "pointer-events-none"
        )}
      >
        {Array(isMobile ? 8 : 12)
          .fill("")
          .map((_, i) => (
            <li key={i}></li>
          ))}
      </ul>
    </div>
  );
}
