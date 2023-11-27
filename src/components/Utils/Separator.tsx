"use client";

import GridContainer from "../GridContainer";

import { cn } from "@/libs/utils";

import useAgent from "@/hooks/use-agent";

export default function Separator() {
  const { isMobile } = useAgent();
  const arr = isMobile ? 6 : 12;
  return (
    <GridContainer
      className={cn(
        "h-16 lg:h-12",
        "divide-x",
        "whitespace-nowrap",
        "overflow-hidden"
      )}
    >
      {Array(arr)
        .fill("")
        .map((_, i) => (
          <div key={i} />
        ))}
    </GridContainer>
  );
}
