"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/libs/utils";

import useAgent from "@/hooks/use-agent";

interface SeparatorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Separator(props: SeparatorProps) {
  const { isMobile } = useAgent();
  const arr = isMobile ? 8 : 12;
  return (
    <div
      className={cn(
        "border-b",
        "px-3 lg:px-12",
        "-mb-px",
        "bg-red-4000",
        "h-12 lg:h-4",
        props.className
      )}
    >
      <ul
        className={cn(
          "h-full",
          "border-x",
          "grid grid-cols-8 lg:grid-cols-12",
          "divide-x",
          "whitespace-nowrap overflow-hidden"
        )}
      >
        {Array(arr)
          .fill("")
          .map((_, i) => (
            <li key={i} />
          ))}
      </ul>
    </div>
  );
}
