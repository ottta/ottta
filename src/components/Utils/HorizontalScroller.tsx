"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Children, type PropsWithChildren, cloneElement, useRef } from "react";

import { cn } from "@/libs/utils";

type HorizontalScrollerProps = PropsWithChildren<{
  direction?: "to-right" | "to-left";
  className?: string;
}>;

export default function HorizontalScroller(props: HorizontalScrollerProps) {
  const { children, direction = "to-left", className } = props;
  const lenChild = Children.count(children);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end"]
  });

  const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);

  return (
    <div
      ref={targetRef}
      className={cn("h-[300vh]", "border-y")}
      data-dir={direction}
    >
      <div
        className={cn("sticky top-0", "overflow-hidden", "h-screen", "flex")}
      >
        <motion.div style={{ x }} className={cn("relative", "flex", className)}>
          {Children.map(children, (child, i) => {
            const isLastChild = i === lenChild - 1;
            // @ts-ignore
            return cloneElement(child, {
              className: cn(
                // @ts-ignore
                child.props.className,
                isLastChild && "absolute z-50",
                isLastChild && "top-0 right-0",
                isLastChild && "translate-x-full",
                isLastChild && "h-screen w-screen"
              )
            });
          })}
        </motion.div>
      </div>
    </div>
  );
}
