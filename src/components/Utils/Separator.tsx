"use client";

import GridContainer from "./GridContainer";

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
        "border-y",
        "px-3 lg:px-12",
        "-my-px",
        "bg-red-4000",
        props.className
      )}
    >
      <ul
        className={cn(
          "border-x",
          "grid grid-cols-8 lg:grid-cols-12",
          "h-12 lg:h-4",
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
