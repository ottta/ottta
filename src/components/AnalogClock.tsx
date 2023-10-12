"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import useDate from "@/hooks/use-date";
import { cn } from "@/libs/utils";

const tickMarks = Array(60).fill("");
const tickNumbers = Array(12).fill("");

function Logo() {
    return (
        <text
            alignmentBaseline="central"
            dominantBaseline="central"
            textAnchor="middle"
            x={24}
            y={-36}
            strokeWidth={0}
            className={cn(
                "rotate-90",
                "text-[0.15rem]",
                "fill-amber-400",
                "uppercase",
                "font-bold"
            )}
        >
            Truetype
        </text>
    );
}

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
                        strokeWidth={0.25}
                        style={{ rotate: `${(i + 1) * 6}deg` }}
                        className={cn(
                            isMainTick
                                ? "stroke-neutral-800 dark:stroke-neutral-200"
                                : "stroke-neutral-400 dark:stroke-neutral-600"
                        )}
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
                "fill-neutral-800 dark:fill-neutral-200",
                "translate-x-[24px]",
                "translate-y-[24px]",
                "rotate-90",
                "font-bold",
                "text-[0.175rem]"
            )}
        >
            {tickNumbers.map((_i, i) => {
                return (
                    <text
                        key={i}
                        x={(19 * Math.cos((Math.PI * (i + 10) * 5) / 30)).toFixed(2)}
                        y={(19 * Math.sin((Math.PI * (i + 10) * 5) / 30)).toFixed(2)}
                        strokeWidth={0}
                        alignmentBaseline="central"
                        dominantBaseline="central"
                        textAnchor="middle"
                    >
                        {i + 1}
                    </text>
                );
            })}
        </g>
    );
}

function Handles() {
    return (
        <g name="handles" className={cn("stroke-neutral-800 dark:stroke-neutral-200")}>
            <g
                name="handle-hours"
                className={cn(
                    "translate-x-[24px] translate-y-[24px]",
                    "rotate-[var(--angle-hour)]"
                )}
            >
                <line x1={0} x2={4.5} y1={0} y2={0} strokeWidth={0.3} />
                <line x1={4.5} x2={14} y1={0} y2={0} strokeWidth={1.5} />
            </g>
            <g
                name="handle-minutes"
                className={cn(
                    "translate-x-[24px] translate-y-[24px]",
                    "rotate-[var(--angle-minute)]"
                )}
            >
                <line x1={0} x2={4.5} y1={0} y2={0} strokeWidth={0.3} />
                <line x1={4.5} x2={20} y1={0} y2={0} strokeWidth={1.25} />
            </g>
            <g
                name="handle-seconds"
                className={cn(
                    "translate-x-[24px] translate-y-[24px]",
                    "rotate-[var(--angle-second)]",
                    "stroke-amber-400"
                )}
            >
                <line x1={0} x2={23} y1={0} y2={0} strokeWidth={0.3} />
            </g>
        </g>
    );
}

function Frame() {
    return (
        <circle
            strokeWidth={0.3}
            cx={24}
            cy={24}
            r={23.8}
            className={cn(
                "stroke-neutral-800 dark:stroke-neutral-200",
                "fill-neutral-100 dark:fill-neutral-900"
            )}
        />
    );
}

function Pin() {
    return (
        <circle
            strokeWidth={0.3}
            cx={24}
            cy={24}
            r={1.5}
            className={cn("fill-amber-600", "stroke-amber-400")}
        />
    );
}

export default function AnalogClock() {
    const [mounted, setMounted] = useState(false);
    const { seconds, minutes, hours } = useDate();

    const timePresition = useMemo(() => {
        const curHour = hours % 12;
        const angleSecond = seconds * 6;
        const angleMinute = minutes * 6 + seconds / 10;
        const angleHours = curHour * 30 + angleMinute / 60;
        return {
            ["--angle-second"]: `${angleSecond}deg`,
            ["--angle-minute"]: `${angleMinute.toFixed(3)}deg`,
            ["--angle-hour"]: `${angleHours.toFixed(3)}deg`
        } as CSSProperties;
    }, [seconds, minutes, hours]);

    useEffect(() => void setMounted(true), []);

    if (!mounted)
        return (
            <div
                className={cn("aspect-square w-full", "bg-neutral-200 dark:bg-neutral-900", "p-4")}
            >
                <svg
                    viewBox="0 0 48 48"
                    width="100%"
                    height="100%"
                    strokeLinecap="round"
                    className={cn("-rotate-90", "stroke-neutral-100 dark:stroke-neutral-900")}
                >
                    <Frame />
                    <Logo />
                    <Pin />
                    <TickMark />
                    <TickNumber />
                </svg>
            </div>
        );

    return (
        <div
            id="__analog-clock"
            className={cn("aspect-square w-full", "bg-neutral-200 dark:bg-neutral-900", "p-4")}
        >
            <svg
                viewBox="0 0 48 48"
                width="100%"
                height="100%"
                strokeLinecap="round"
                style={timePresition}
                className={cn("-rotate-90", "stroke-neutral-100 dark:stroke-neutral-900")}
            >
                <Frame />
                <Logo />
                <TickMark />
                <TickNumber />
                <Handles />
                <Pin />
            </svg>
        </div>
    );
}
