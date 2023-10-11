"use client";

import useDate from "@/hooks/use-date";
import { cn } from "@/libs/utils";
import { useCallback, useEffect, useState } from "react";

const tickMarks = Array(60).fill("");
const tickNumbers = Array(12).fill("");

function TickMark() {
    return (
        <g name="tick-marks" className={cn("translate-x-[24px]", "translate-y-[24px]")}>
            {tickMarks.map((_i, i) => {
                const isMainTick = (i + 1) % 5 === 0;
                return (
                    <line
                        key={i}
                        x1={23}
                        x2={isMainTick ? 21.5 : 22}
                        y1={0}
                        y2={0}
                        strokeWidth={isMainTick ? 0.3 : 0.25}
                        style={{ rotate: `${(i + 1) * 6}deg` }}
                    />
                );
            })}
        </g>
    );
}

function TickNumber() {
    return (
        <g
            name="tick-numbers"
            className={cn(
                "translate-x-[24px]",
                "translate-y-[24px]",
                "rotate-90",
                "fill-neutral-50 dark:fill-neutral-950",
                "font-bold",
                "text-[0.25rem]"
            )}
        >
            {tickNumbers.map((_i, i) => {
                return (
                    <text
                        key={i}
                        x={18.5 * Math.cos((Math.PI * (i + 10) * 5) / 30)}
                        y={18.5 * Math.sin((Math.PI * (i + 10) * 5) / 30)}
                        alignmentBaseline="central"
                        dominantBaseline="central"
                        strokeWidth={0}
                        textAnchor="middle"
                    >
                        {i + 1}
                    </text>
                );
            })}
        </g>
    );
}

export default function AnalogClock() {
    const [mounted, setMounted] = useState(false);
    const { seconds, minutes, hours } = useDate();

    const getTimeStyle = useCallback(() => {
        return {
            "--current-seconds": seconds,
            "--current-minutes": minutes,
            "--current-hours": hours % 12
        };
    }, [seconds, minutes, hours]);

    useEffect(() => void setMounted(true), []);

    if (!mounted) return <></>;
    return (
        <>
            <div
                id="__analog-clock"
                style={{
                    position: "relative",
                    ...getTimeStyle()
                }}
            >
                <svg
                    viewBox="0 0 48 48"
                    width="100%"
                    height="100%"
                    strokeWidth={0.3}
                    strokeLinecap="round"
                    className={cn(
                        "-rotate-90",
                        "stroke-neutral-100 dark:stroke-neutral-900",
                        "fill-neutral-900 dark:fill-neutral-100"
                    )}
                >
                    <circle cx={24} cy={24} r={23.9} />
                    <TickMark />
                    <TickNumber />

                    <line
                        name="handle-seconds"
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="0"
                        className={cn(
                            "translate-x-[24px] translate-y-[24px]",
                            "rotate-[calc(var(--current-seconds)*6deg)]"
                        )}
                    />
                    <line
                        name="handle-minutes"
                        x1="0"
                        y1="0"
                        x2="22.5"
                        y2="0"
                        strokeWidth={1.15}
                        className={cn(
                            "translate-x-[24px] translate-y-[24px]",
                            "rotate-[calc(var(--current-minutes)*6deg)]"
                        )}
                    />
                    <line
                        name="handle-hours"
                        x1="0"
                        y1="0"
                        x2="14"
                        y2="0"
                        strokeWidth={1.25}
                        className={cn(
                            "hour-hand",
                            "translate-x-[24px] translate-y-[24px]",
                            "rotate-[calc(var(--current-hours)*30deg)]"
                        )}
                    />
                    <circle cx="24" cy="24" r="1.5" className="pin" />
                </svg>
            </div>
        </>
    );
}
