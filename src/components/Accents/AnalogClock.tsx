"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/libs/utils";

import useDate from "@/hooks/use-date";

const tickMarks = Array(60).fill("");
const tickNumbers = Array(12).fill("");

function Logo() {
  return (
    <g className={cn("font-text")}>
      <text
        alignmentBaseline="hanging"
        textAnchor="middle"
        x={24}
        y={-34}
        strokeWidth={0}
        className={cn(
          "rotate-90",
          "text-[0.15rem]",
          "fill-amber-400",
          "font-black",
          "uppercase"
        )}
      >
        {/* Truetype */}
        otta
      </text>
      <text
        alignmentBaseline="hanging"
        textAnchor="middle"
        x={24}
        y={-31.5}
        strokeWidth={0}
        className={cn("rotate-90", "text-[0.05rem]", "fill-current")}
      >
        Truetype Supply
      </text>
    </g>
  );
}

function TickMark() {
  return (
    <g
      name="tick-marks"
      className={cn("translate-x-[24px]", "translate-y-[24px]")}
    >
      {tickMarks.map((_i, i) => {
        const isMainTick = (i + 1) % 5 === 0;
        return (
          <line
            key={i}
            x1={23}
            x2={isMainTick ? 21.5 : 21.75}
            y1={0}
            y2={0}
            strokeWidth={0.25}
            style={{ rotate: `${(i + 1) * 6}deg` }}
            className={cn(
              isMainTick
                ? "stroke-current"
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
        "fill-current",
        "translate-x-[24px]",
        "translate-y-[24px]",
        "rotate-90",
        "font-black",
        "font-text",
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
    <g name="handles" className={cn("stroke-current")}>
      <g
        name="handle-hours"
        className={cn(
          "translate-x-[24px] translate-y-[24px]",
          "rotate-[var(--angle-hour)]"
        )}
      >
        <line x1={0} x2={4.5} y1={0} y2={0} strokeWidth={0.3} />
        <rect
          width={12}
          height={2}
          x={4.5}
          y={-1}
          rx={1}
          ry={1}
          strokeWidth={0.3}
          fill="transparent"
        />
      </g>
      <g
        name="handle-minutes"
        className={cn(
          "translate-x-[24px] translate-y-[24px]",
          "rotate-[var(--angle-minute)]"
        )}
      >
        <line x1={0} x2={4.7} y1={0} y2={0} strokeWidth={0.3} />
        <rect
          width={16.7}
          height={1.7}
          x={4.7}
          y={-0.85}
          rx={0.85}
          ry={0.85}
          strokeWidth={0.3}
          fill="transparent"
        />
        <circle
          strokeWidth={0.3}
          cx={0}
          cy={0}
          r={1.3}
          className={cn("fill-current")}
        />
      </g>
      <g
        name="handle-seconds"
        className={cn(
          "translate-x-[24px] translate-y-[24px]",
          "rotate-[var(--angle-second)]",
          "stroke-amber-400"
        )}
      >
        <line x1={-3} x2={23} y1={0} y2={0} strokeWidth={0.3} />
        <circle strokeWidth={0.3} cx={0} cy={0} r={0.75} />
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
        "stroke-neutral-300 dark:stroke-neutral-800",
        "fill-neutral-50 dark:fill-neutral-950"
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
      r={1.25}
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
    const angleHours = curHour * 30 + angleMinute / 12;
    return {
      ["--angle-second"]: `${angleSecond}deg`,
      ["--angle-minute"]: `${angleMinute.toFixed(3)}deg`,
      ["--angle-hour"]: `${angleHours.toFixed(3)}deg`
    } as CSSProperties;
  }, [seconds, minutes, hours]);

  useEffect(() => void setMounted(true), []);

  if (!mounted)
    return (
      <div className={cn("aspect-square w-full", "p-4")}>
        <svg
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          // strokeLinecap="round"
          className={cn("-rotate-90", "stroke-current")}
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
    <div id="__analog-clock" className={cn("aspect-square w-full", "p-4")}>
      <svg
        viewBox="0 0 48 48"
        width="100%"
        height="100%"
        // strokeLinecap="round"
        style={timePresition}
        className={cn("-rotate-90", "stroke-curent")}
      >
        <Frame />
        <Logo />
        <TickMark />
        <TickNumber />
        <Handles />
      </svg>
    </div>
  );
}
