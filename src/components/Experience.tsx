"use client";

import { useMemo } from "react";
import moment from "moment";
import works from "@/database/works.json";
import { calculateDuration, cn } from "@/libs/utils";

function nthDate(date: string) {
    const isValid = date !== "now";
    return isValid ? moment(date).format("MMM Do, YYYY") : "Now";
    // .replace(/(\d)(st|nd|rd|th)/g, "$1<sup>$2</sup>");
}

type Work = (typeof works)[0];

type InfoProps = {
    label: string;
    value: string;
};
function Info(props: InfoProps) {
    return (
        <div
            className={cn(
                "font-sans",
                "grid grid-cols-4 lg:grid-cols-5",
                "col-span-5",
                "gap-x-4",
                "text-neutral-500",
                "max-lg:text-sm"
            )}
        >
            <div className={cn("col-span-1", "flex justify-between")}>
                <span>{props.label}</span>
                <span>:</span>
            </div>
            <div
                className={cn("col-span-3 lg:col-span-4")}
                dangerouslySetInnerHTML={{ __html: props.value }}
            />
        </div>
    );
}

function Detail(props: Work) {
    const { project, description, date, principle, employer, category, role, scope, link } = props;
    const isPresent = date.end === "now";

    return (
        <li className={cn("p-2 px-3 py-6 lg:p-4")}>
            <div className={cn("mb-8", "flex flex-col", "gap-y-8")}>
                <div>
                    <div className={cn("text-xl lg:text-4xl", "font-bold", "leading-none")}>
                        {category}
                    </div>
                    <div className={cn("text-4xl lg:text-6xl", "font-bold", "leading-none")}>
                        {project}
                    </div>
                </div>

                <div className={cn("grid lg:grid-cols-10", "lg:gap-x-4")}>
                    <Info label="Start" value={nthDate(date.start)} />
                    <Info label="End" value={nthDate(date.end)} />
                    <Info
                        label="Total"
                        value={calculateDuration(date.start, !isPresent ? date.end : undefined)}
                    />
                    <Info
                        label="Link"
                        value={
                            link
                                ? `<a href="${link}" target="_blank" rel="nofollow noopener noreferrer">${link}</a>`
                                : "-"
                        }
                    />
                    <Info label="Principle" value={principle} />
                    <Info label="Employer" value={principle === employer ? "-" : employer} />
                    <Info label="Role" value={role} />
                    <Info label="Scope" value={scope} />
                </div>
            </div>

            <article
                dangerouslySetInnerHTML={{ __html: description }}
                style={{ columnGap: "1rem" }}
                className={cn(
                    "font-serif",
                    "prose",
                    "prose-neutral dark:prose-invert",
                    "prose-lg lg:prose-xl",
                    "w-full max-w-full",
                    "hyphens-auto",
                    "lg:columns-2"
                )}
            />
        </li>
    );
}

export default function Experience() {
    const groupByYears = useMemo(() => {
        const reduces = works
            .sort((a, b) => b.date.start.localeCompare(a.date.start))
            .reduce((items: { [key: string]: Work[] }, item) => {
                const isPresent = item.date.end === "now";
                const year = isPresent ? "Now" : moment(item.date.start).format("YYYY");

                if (!items[year]) {
                    items[year] = [];
                }
                items[year].push(item);
                return items;
            }, {});

        return reduces;
    }, []);

    const years = Object.keys(groupByYears);

    return (
        <>
            <div
                className={cn(
                    "sticky",
                    "top-[calc(4rem-1px)] lg:top-[calc(3rem-1px)]",
                    "z-10",
                    "bg-amber-100/90 dark:bg-neutral-950/90",
                    "border-y",
                    "px-3 lg:px-12",
                    "-mb-px"
                )}
            >
                <div className={cn("fluid", "border-x")}>
                    <div
                        className={cn(
                            "h-12",
                            "overflow-hidden",
                            "-mb-px",
                            "grid grid-cols-6 lg:grid-cols-12",
                            "items-center",
                            "font-bold"
                        )}
                    >
                        <div className={cn("col-span-1 lg:col-span-2", "px-3 lg:px-4")}>
                            <div>Year</div>
                        </div>
                        <div
                            className={cn(
                                "flex items-center justify-between",
                                "col-span-5 lg:col-span-10",
                                "px-3 lg:px-4"
                            )}
                        >
                            <div>Experience</div>
                            <div>Sorter</div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className={cn("flex flex-col", "gap-y-3 lg:gap-y-2")}>
                {years.reverse().map((year, i) => (
                    <li key={i} className={cn("border-y", "px-3 lg:px-12")}>
                        <div
                            className={cn(
                                "fluid",
                                "grid grid-cols-6 lg:grid-cols-12",
                                "mx-auto",
                                "border-x",
                                "divide-x",
                                "bg-neutral-100 dark:bg-neutral-900"
                            )}
                        >
                            <div className={cn("col-span-1 lg:col-span-2")}>
                                <div
                                    style={{ writingMode: "vertical-lr" }}
                                    className={cn(
                                        "text-4xl",
                                        "font-bold",
                                        "sticky top-28 lg:top-24",
                                        "leading-none",
                                        "p-2 py-6 lg:py-4"
                                    )}
                                >
                                    {year}
                                </div>
                            </div>

                            <ul
                                className={cn(
                                    "col-span-5 lg:col-span-8",
                                    "flex flex-col",
                                    "divide-y"
                                )}
                            >
                                {groupByYears[year].map((work, i) => (
                                    <Detail key={i} {...work} />
                                ))}
                            </ul>

                            <div className={cn("col-span-6 lg:col-span-2", "max-lg:hidden")} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
