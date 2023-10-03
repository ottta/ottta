import moment from "moment";
import works from "@/database/works.json";
import { cn } from "@/libs/utils";

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
        <div className={cn("grid grid-cols-1 lg:grid-cols-9")}>
            <span
                className={cn("col-span-2", "text-neutral-500", "max-xl:text-sm", "leading-tight")}
            >
                {title}
            </span>
            <span className={cn("col-span-7", "font-bold", "leading-tight")}>{value}</span>
        </div>
    );
}

export default function Experience() {
    return (
        <div className={cn("py-12")}>
            <div
                className={cn(
                    // "mb-4",
                    "mb-24",
                    "sticky",
                    "top-0",
                    "h-16",
                    "flex items-center",
                    "z-10",
                    "bg-neutral-50 dark:bg-neutral-950",
                    "overflow-hidden"
                )}
            >
                <div
                    className={cn(
                        "font-bold",
                        "text-5xl",
                        "whitespace-nowrap",
                        "overflow-hidden",
                        "text-ellipsis"
                    )}
                >
                    Work Experience
                </div>
            </div>
            <ul className={cn("flex flex-col", "gap-y-24 lg:gap-y-16")}>
                {works
                    .sort((a, b) => b.date.start.localeCompare(a.date.start))
                    .map((item, i) => {
                        const { date } = item;
                        const { start, end } = date;
                        const dateEnd = end === "now" ? new Date().toISOString() : item.date.end;
                        return (
                            <li key={i} className={cn("lg:grid lg:grid-cols-12", "gap-x-4")}>
                                <div className={cn("col-span-2")}>
                                    <div
                                        className={cn(
                                            "sticky",
                                            "top-4 lg:top-20",
                                            "pb-4",
                                            "max-lg:grid max-lg:grid-cols-2",
                                            "gap-x-4"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "text-sm lg:text-2xl",
                                                "font-bold",
                                                "lg:mb-4"
                                            )}
                                        >
                                            {calculateDuration(start, dateEnd)}
                                        </div>
                                        <div
                                            className={cn(
                                                "leading-tight",
                                                "lg:text-neutral-500",
                                                "max-lg:text-sm",
                                                "flex lg:flex-col gap-y-2"
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
                                    </div>
                                </div>

                                <div className={cn("col-span-10", "flex flex-col", "gap-y-4")}>
                                    <div className={cn("text-4xl lg:text-2xl", "font-bold")}>
                                        {item.project}
                                    </div>
                                    <div
                                        className={cn(
                                            "gap-y-2",
                                            "flex flex-col",
                                            "grid grid-cols-2",
                                            "gap-x-4",
                                            "items-start"
                                        )}
                                    >
                                        <ExperienceKeyValue
                                            title="Principle"
                                            value={item.principle}
                                        />
                                        <ExperienceKeyValue
                                            title="Employer"
                                            value={item.employer}
                                        />
                                        <ExperienceKeyValue
                                            title="Category"
                                            value={item.category}
                                        />
                                        <ExperienceKeyValue title="Role" value={item.role} />
                                        <ExperienceKeyValue title="Scope" value={item.scope} />
                                    </div>
                                    <div className={cn("grid grid-cols-9", "my-8")}>
                                        <div className={cn("max-lg:hidden col-span-1")} />
                                        <p
                                            className={cn(
                                                "font-serif",
                                                "text-xl",
                                                "col-span-9 lg:col-span-8"
                                                // "text-justify"
                                            )}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
