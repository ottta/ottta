"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/libs/utils";
import CrossWord from "@/components/CrossWord";

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // target: undefined,
        offset: ["start end", "end"]
    });

    const horz = useTransform(scrollYProgress, [0.175, 1], ["0%", "-100%"]);
    const vert = useTransform(scrollYProgress, [0.1, 0.5], ["33.33%", "-50%"]);
    const bgX = useTransform(scrollYProgress, [0.175, 0.8, 1], ["33.33%", "-33.33%", "-66.66%"]);

    return (
        <div className={cn("border-y", "-my-px", "px-3 lg:px-12", "max-lg:hidden")}>
            <div
                ref={targetRef}
                data-layout="fluid"
                className={cn(
                    "h-[calc(640vh-3rem)] lg:h-[calc(600vh-6rem)]",
                    "border-x",
                    "relative"
                )}
            >
                <div
                    className={cn(
                        "sticky top-16 lg:top-[calc(3rem-1px)]",
                        "h-[calc(100vh-8rem)] lg:h-[calc(100vh+2px-6rem)]",
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
                            "divide-x"
                        )}
                    >
                        <CrossWord />
                        <CrossWord />

                        <motion.div
                            className={cn(
                                "absolute",
                                "h-[calc(100vh-6rem+1px)]",
                                "w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-6rem)]",
                                "top-0 right-[0px]",
                                "translate-x-full",
                                "!border-none",
                                "bg-neutral-50 dark:bg-neutral-950"
                            )}
                        >
                            <div
                                className={cn(
                                    "-ml-px",
                                    "absolute",
                                    "top-0 bottom-0",
                                    "left-1/2 -translate-x-1/2",
                                    "border-r"
                                )}
                            />
                            <div
                                className={cn(
                                    "-ml-px",
                                    "absolute",
                                    "left-0 right-0",
                                    "top-1/2 -translate-y-1/2",
                                    "border-b"
                                )}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
