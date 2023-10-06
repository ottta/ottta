"use client";

import moment from "moment";
import works from "@/database/works.json";
import { cn } from "@/libs/utils";
import { useMemo, useState } from "react";

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
            <div className={cn("col-span-3 lg:col-span-4")}>{props.value}</div>
        </div>
    );
}

function Detail(props: Work) {
    const { project, description, date, principle, employer, category, role, scope } = props;
    const newEnd = date.end === "now" ? new Date().toISOString() : date.end;

    return (
        <li className={cn("mb-24")}>
            <div className={cn("mb-12", "flex flex-col", "gap-y-6")}>
                <div>
                    <div
                        className={cn(
                            "text-2xl lg:text-4xl",
                            "font-serif font-bold",
                            "leading-none"
                        )}
                    >
                        {project}
                    </div>
                    <div className={cn("text-sm lg:text-2xl", "text-neutral-500")}>
                        {moment(date.start).format("ll")} — {moment(newEnd).format("ll")}
                    </div>
                </div>

                <div className={cn("grid lg:grid-cols-10", "lg:gap-x-6")}>
                    <Info label="Principle" value={principle} />
                    <Info label="Employer" value={employer} />
                    <Info label="Category" value={category} />
                    <Info label="Role" value={role} />
                    <Info label="Scope" value={scope} />
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
                const year = moment(item.date.start).format("YYYY");
                if (!items[year]) {
                    items[year] = [];
                }
                items[year].push(item);
                return items;
            }, {});

        return reduces;
    }, [works]);

    const years = Object.keys(groupByYears);

    return (
        <>
            <ul>
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
                                    "pb-24",
                                    "sticky top-12",
                                    "leading-none"
                                )}
                            >
                                {year}
                            </div>
                        </div>

                        <ul className={cn("col-span-5 lg:col-span-10")}>
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
