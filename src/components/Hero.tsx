import GridContainer from "./Utils/GridContainer";

import { cn } from "@/libs/utils";

import AnalogClock from "@/components/Accents/AnalogClock";

export default function Hero() {
  return (
    <GridContainer>
      <div className={cn("col-span-8 lg:col-span-6", "grid", "divide-y")}>
        <div className={cn("grid", "grid-cols-6", "divide-x")}>
          <div className={cn("col-span-3", "p-2 lg:p-4")}>
            <div
              className={cn(
                "flex",
                "flex-col",
                "justify-between",
                "font-bold",
                "h-full",
                "bg-neutral-300 dark:bg-neutral-800",
                "rounded-xl",
                "p-3 lg:p-4"
              )}
            >
              <div className={cn("lg:text-4xl")}>Wednesday</div>
              <div>
                <div className={cn("lg:text-4xl")}>December</div>
                <div className={cn("lg:text-8xl")}>17</div>
              </div>
            </div>
          </div>
          <div className={cn("col-span-3", "p-2 lg:p-4")}>
            <div
              className={cn(
                "bg-neutral-300 dark:bg-neutral-800",
                "p-3 lg:p-4",
                "rounded-xl"
              )}
            >
              <AnalogClock />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid grid-cols-6",
            "lg:divide-x",
            "hyphens-auto",
            "max-lg:hidden"
          )}
        >
          <div
            className={cn(
              "col-span-6 lg:col-span-3",
              "p-4",
              "flex items-start",
              "lg:flex-col",
              "gap-y-4"
            )}
          >
            <div
              className={cn(
                "text-rose-500 dark:text-rose-600",
                "bg-rose-300 dark:bg-rose-800",
                "aspect-square w-full",
                "border border-current",
                "rounded-full",
                "overflow-hidden",
                "flex items-center justify-center"
              )}
            >
              <div
                className={cn(
                  "w-1/4 aspect-square",
                  "bg-neutral-50 dark:bg-neutral-950",
                  "rounded-full",
                  "text-rose-500 dark:text-rose-600",
                  "border border-current"
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "col-span-6 lg:col-span-3",
              "p-3 lg:p-4",
              "flex items-start"
            )}
          ></div>
        </div>
      </div>

      <div
        className={cn(
          "col-span-6",
          "flex items-center justify-center",
          "lg:p-12"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          height="100%"
          width="100%"
          fill="currentColor"
        >
          <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
        </svg>
      </div>
    </GridContainer>
  );
}
