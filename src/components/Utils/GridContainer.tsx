import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface GridContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function GridContainer(props: GridContainerProps) {
  const { children, ...rest } = props;
  return (
    <div className={cn("border-y", "px-4 lg:px-12", "-my-px")}>
      <div data-layout="fluid" className={cn("border-x")}>
        <div
          {...rest}
          className={cn("grid grid-cols-8 lg:grid-cols-12", rest.className)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
