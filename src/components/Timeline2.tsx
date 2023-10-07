"use client";

import moment from "moment";
import works from "@/database/works.json";
import { cn } from "@/libs/utils";
import { useMemo } from "react";

function nthDate(date: string) {
    return moment(date).format("MMM Do, YYYY");
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
                "grid grid-cols-4 lg:grid-cols-5",
                "col-span-5",
                "gap-x-2",
                "max-xl:text-sm"
            )}
        >
            <div className={cn("col-span-1", "flex justify-between", "text-neutral-500")}>
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
        <li>
            <div className={cn("mb-6", "flex flex-col", "gap-y-6")}>
                <div>
                    <div
                        className={cn(
                            "text-2xl lg:text-4xl",
                            "font-serif font-bold",
                            "leading-none"
                        )}
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: nthDate(date.start)
                            }}
                        />
                        <span>&nbsp;</span>
                        <span>—</span>
                        <span>&nbsp;</span>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: isPresent ? "Now" : nthDate(date.end)
                            }}
                        />
                    </div>
                    <div
                        className={cn(
                            "text-4xl lg:text-6xl",
                            "font-serif font-bold",
                            "leading-none"
                        )}
                    >
                        {project}
                    </div>
                </div>

                <div className={cn("grid lg:grid-cols-10", "lg:gap-x-6")}>
                    <Info label="Principle" value={principle} />
                    <Info label="Employer" value={employer} />
                    <Info label="Category" value={category} />
                    <Info label="Role" value={role} />
                    <Info label="Scope" value={scope} />
                    {link && (
                        <Info
                            label="Link"
                            value={`<a href="${link}" target="_blank" rel="nofollow noopener noreferrer" class="text-cyan-500 hover:underline">${link}</a>`}
                        />
                    )}
                </div>
            </div>

            <p
                dangerouslySetInnerHTML={{ __html: description }}
                className={cn(
                    "font-serif",
                    "text-xl",
                    "col-span-10 lg:col-span-8",
                    "lg:columns-2",
                    "dark:text-neutral-300"
                )}
            />
        </li>
    );
}

export default function Timeline2() {
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
                    "top-0",
                    "h-16",
                    "z-10",
                    "bg-neutral-50/90 dark:bg-neutral-950/90",
                    "overflow-hidden",
                    "border-b",
                    "-mb-px",
                    "grid grid-cols-6 lg:grid-cols-12",
                    "gap-x-2",
                    "items-center",
                    "text-sm lg:text-2xl",
                    "font-bold"
                )}
            >
                <div className={cn("col-span-1 lg:col-span-2")}>Year</div>
                <div
                    className={cn("flex items-center justify-between", "col-span-5 lg:col-span-10")}
                >
                    <div>Experience</div>
                    <div>Sorter</div>
                </div>
            </div>

            <ul className={cn("py-8 lg:py-16", "flex flex-col", "gap-y-16")}>
                {years.reverse().map((year, i) => (
                    <li key={i} className={cn("grid grid-cols-6 lg:grid-cols-12", "gap-x-2")}>
                        <div
                            className={cn("col-span-1 lg:col-span-2")}
                            style={{ fontFeatureSettings: `"tnum"` }}
                        >
                            <div
                                className={cn(
                                    "text-2xl lg:text-4xl",
                                    "font-serif font-bold",
                                    "sticky top-20",
                                    "leading-none"
                                )}
                            >
                                {year}
                            </div>
                        </div>

                        <ul
                            className={cn("col-span-5 lg:col-span-10", "flex flex-col", "gap-y-16")}
                        >
                            {groupByYears[year].map((work, i) => (
                                <Detail key={i} {...work} />
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
