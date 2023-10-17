"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/libs/utils";
import CrossWord from "@/components/CrossWord";

type Unit = {
    entity: string;
    values: { value: number; unit: "LB" | "KG" | "CU.FT" | "CU.M" }[];
};

const units: Unit[] = [
    {
        entity: "Max.Gw",
        values: [
            { unit: "LB", value: 67200 },
            { unit: "KG", value: 30480 }
        ]
    },
    {
        entity: "Tare",
        values: [
            { unit: "LB", value: 8510 },
            { unit: "KG", value: 9860 }
        ]
    },
    {
        entity: "Max.Cw",
        values: [
            { unit: "LB", value: 58690 },
            { unit: "KG", value: 26620 }
        ]
    },
    {
        entity: "CU.FT",
        values: [
            { unit: "CU.FT", value: 2389 },
            { unit: "CU.M", value: 67.7 }
        ]
    }
];

function EndCapText() {
    return (
        <div
            className={cn(
                "p-4",
                "h-1/2",
                "bg-neutral-950 dark:bg-neutral-200",
                "text-neutral-50 dark:text-neutral-950",
                "font-mono uppercase",
                "leading-none",
                "flex items-center"
            )}
        >
            <ul className={cn("w-full")}>
                {units.map((item, i) => (
                    <li key={i} className={cn("grid grid-cols-6", "items-center")}>
                        <div className={cn("col-span-3", "text-8xl")}>{item.entity}</div>
                        <div className={cn("col-span-3")}>
                            {item.values.map((item, i) => (
                                <div
                                    key={i}
                                    className={cn("grid grid-cols-3", "gap-4", "text-4xl")}
                                >
                                    <div />
                                    <div className={cn("text-right")}>{item.value}</div>
                                    <div>{item.unit}</div>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function EndCap() {
    return (
        <ul
            className={cn(
                "absolute",
                "h-[calc(100vh-6rem+1px)]",
                "w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-6rem)]",
                "top-0 right-px",
                "translate-x-full",
                "bg-neutral-50 dark:bg-neutral-950",
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
                                isFirst && "col-span-6",
                                isSecond && "col-span-3",
                                isThird && "col-span-3",
                                !isFirst && "flex flex-col divide-y"
                            )}
                        >
                            {isFirst && <EndCapText />}
                            {!isFirst && (
                                <>
                                    <div className={cn("h-1/2")} />
                                    <div className={cn("h-1/2")} />
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
                        "bg-neutral-50 dark:bg-neutral-950"
                    )}
                >
                    <motion.div
                        style={{ x: bgX, backgroundImage: `url("/images/gajah-small.png")` }}
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
                                "flex items-end"
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
