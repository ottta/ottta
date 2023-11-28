"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/libs/utils";

import useGrid from "@/hooks/use-grid";

export default function AppGrid() {
  const division = 12;
  const { grid } = useGrid();

  const [mousePos, setMousePos] = useState({
    y: 0,
    x: 0,
    xOffset: false,
    yOffset: false
  });
  function mouseHandler(e: globalThis.MouseEvent) {
    const { clientY, clientX } = e;
    const html = document.documentElement;
    setMousePos((prev) => ({
      ...prev,
      y: clientY,
      x: clientX,
      xOffset: clientX >= html.clientWidth / 2,
      yOffset: clientY >= html.clientHeight / 2
    }));
  }
  useEventListener("mousemove", mouseHandler);

  return (
    <AnimatePresence initial={false}>
      {grid && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed",
            "inset-0",
            "z-50",
            "pointer-events-none touch-none",
            "px-3 lg:px-12",
            "bg-neutral-100/30 dark:bg-neutral-900/30"
          )}
        >
          <div
            data-layout="fluid"
            className={cn(
              "grid grid-cols-6 lg:grid-cols-12",
              "h-full",
              "border-x",
              "divide-x",
              "border-red-500/20 divide-red-500/20"
            )}
          >
            {Array(division)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-red-500",
                    "flex items-end justify-center",
                    "pb-6",
                    "text-3xl"
                  )}
                >
                  {i + 1}
                </div>
              ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: mousePos.y - 0.5,
              left: 0,
              right: 0,
              borderBottom: "1px solid #7d7d7d"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: mousePos.x - 0.5,
              borderRight: "1px solid #7d7d7d"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: mousePos.y,
              left: mousePos.x,
              width: "0.5em",
              height: "0.5em",
              backgroundColor: "#7d7d7d",
              transform: "translate(-50%, -50%)"
            }}
          />
          <div
            className={cn(
              "font-mono",
              "py-2 px-4",
              "absolute",
              "whitespace-nowrap",
              "transition-[transform] duration-300 linear"
            )}
            style={{
              top: mousePos.y,
              left: mousePos.x,
              transform: `translate(${mousePos.xOffset ? -100 : 0}%, ${
                mousePos.yOffset ? -100 : 0
              }%)`
            }}
          >
            <div style={{ fontSize: "0.875em" }}>Y: {mousePos.y}</div>
            <div style={{ fontSize: "0.875em" }}>X: {mousePos.x}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
