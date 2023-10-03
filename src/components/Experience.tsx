"use client";

import moment from "moment";
import works from "@/database/works.json";
import { cn } from "@/libs/utils";
import { useMemo, useState } from "react";

function calculateDuration(start: string, end: string): string {
    const dateStart = moment(start);
    const dateEnd = moment(end);
    const diff = dateEnd.diff(dateStart, "second", true);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = month * 12;

    if (diff < day) {
        return Math.floor(diff / hour) + " hours";
    } else if (diff < day * 2) {
        return "yesterday";
    } else if (diff < week) {
        return week + " days";
    } else if (diff < month) {
        return Math.floor(diff / week) + " weeks";
    } else if (diff < year) {
        return Math.floor(diff / month) + " months";
    } else {
        return Math.floor(diff / year) + " years";
    }
}

interface ExperienceKeyValueProps {
    title: string;
    value: string;
}
function ExperienceKeyValue(props: ExperienceKeyValueProps) {
    const { title, value } = props;
    return (
        <div
            className={cn(
                "grid grid-cols-1 lg:grid-cols-10",
                "col-span-5",
                "items-baseline",
                "gap-x-2"
            )}
        >
            <div
                className={cn(
                    "col-span-2",
                    "text-neutral-500",
                    "leading-tight",
                    "font-serif",
                    "flex justify-between",
                    "w-full"
                )}
            >
                <span>{title}</span>
                <span className={cn("max-lg:hidden")}>:</span>
            </div>
            <span className={cn("col-span-8", "leading-tight", "font-sans")}>{value}</span>
        </div>
    );
}

type SortAttr = {
    date: "asc" | "desc";
};

export default function Experience() {
    const [sort, setSort] = useState<SortAttr>({ date: "asc" });
    const newWorks = useMemo(() => {
        if (sort.date === "desc") {
            return works.sort((a, b) => a.date.start.localeCompare(b.date.start));
            // .sort((a, b) => ((a.date.end || b.date.end) === "now" ? -1 : 0));
        }
        return works.sort((a, b) => b.date.start.localeCompare(a.date.start));
        // .sort((a, b) => ((a.date.end || b.date.end) === "now" ? -1 : 0));
    }, [sort]);
    return (
        <div className={cn("mt-24")}>
            <div
                className={cn(
                    // "mb-4 lg:mb-12",
                    "sticky",
                    "top-0",
                    "h-16",
                    "flex items-center justify-between",
                    "gap-2",
                    "z-10",
                    "bg-neutral-50/90 dark:bg-neutral-950/90",
                    "overflow-hidden",
                    "border-b",
                    "-mb-px"
                )}
            >
                <div
                    className={cn(
                        "font-bold",
                        "text-2xl lg:text-4xl",
                        "whitespace-nowrap",
                        "overflow-hidden",
                        "text-ellipsis"
                    )}
                >
                    {/* Work Experience */}
                    Timeline
                </div>
                <select
                    value={sort.date}
                    onChange={(e) => setSort((prev) => ({ ...prev, date: e.target.value as any }))}
                >
                    <option value="asc">Newest to Latest</option>
                    <option value="desc">Latest to Newest</option>
                </select>
            </div>
            <ul>
                {newWorks.map((item, i) => {
                    const { date } = item;
                    const { start, end } = date;
                    const dateEnd = end === "now" ? new Date().toISOString() : item.date.end;
                    return (
                        <li
                            key={i}
                            className={cn(
                                "lg:grid lg:grid-cols-12",
                                "gap-x-4",
                                "border-y",
                                "py-20 lg:py-16",
                                "-mb-px"
                            )}
                        >
                            <div className={cn("col-span-2")}>
                                <div
                                    className={cn(
                                        "sticky",
                                        "top-4 lg:top-20",
                                        "max-lg:grid max-lg:grid-cols-2",
                                        "gap-x-4",
                                        "font-serif",
                                        "items-baseline"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "text-lg lg:text-2xl",
                                            "font-bold",
                                            "lg:mb-4",
                                            "font-sans"
                                        )}
                                    >
                                        {moment(item.date.start).fromNow()}
                                    </div>

                                    <div
                                        className={cn(
                                            "leading-tight",
                                            "lg:text-neutral-500",
                                            "max-lg:text-lg",
                                            "flex lg:flex-col gap-y-2",
                                            "lg:mb-2",
                                            "order-3"
                                        )}
                                    >
                                        <span className={cn("max-lg:font-bold")}>
                                            {moment(start).format("ll")}
                                        </span>
                                        <span className={cn("lg:hidden")}>&nbsp;</span>
                                        <span className={cn("font-bold")}>
                                            — {end === "now" ? "Now" : moment(end).format("ll")}
                                        </span>
                                    </div>

                                    <div
                                        className={cn(
                                            "max-lg:text-lg",
                                            "max-lg:font-sans",
                                            "max-lg:font-bold",
                                            "text-neutral-500"
                                        )}
                                        style={{ fontFeatureSettings: `"lnum"` }}
                                    >
                                        {calculateDuration(start, dateEnd)} in total
                                    </div>
                                </div>
                            </div>

                            <div className={cn("col-span-10", "flex flex-col", "gap-y-4")}>
                                <div
                                    className={cn(
                                        "text-4xl lg:text-2xl",
                                        "font-bold",
                                        "max-lg:my-6"
                                        // "font-serif"
                                    )}
                                >
                                    {item.project}
                                </div>

                                <div
                                    className={cn(
                                        "gap-y-2",
                                        "grid grid-cols-10",
                                        "gap-x-4",
                                        "items-start"
                                    )}
                                >
                                    <ExperienceKeyValue title="Principle" value={item.principle} />
                                    <ExperienceKeyValue title="Employer" value={item.employer} />
                                    <ExperienceKeyValue title="Category" value={item.category} />
                                    <ExperienceKeyValue title="Role" value={item.role} />
                                    <ExperienceKeyValue title="Scope" value={item.scope} />
                                </div>

                                <div className={cn("grid grid-cols-10", "mt-8")}>
                                    <div className={cn("max-lg:hidden col-span-1")} />
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                        className={cn(
                                            "font-serif",
                                            "text-xl",
                                            "col-span-10 lg:col-span-8",
                                            "lg:columns-2",
                                            "dark:text-neutral-300"
                                        )}
                                    ></p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
