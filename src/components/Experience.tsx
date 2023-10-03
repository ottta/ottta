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
        <div className={cn("grid grid-cols-1 lg:grid-cols-9", "text-sm")}>
            <span className={cn("col-span-1", "text-neutral-500")}>{title}</span>
            <span className={cn("col-span-8")}>{value}</span>
        </div>
    );
}

export default function Experience() {
    return (
        <div className={cn("py-12")}>
            <div className={cn("font-bold", "text-4xl", "mb-12")}>Work Experience</div>
            <ul className={cn("flex flex-col", "gap-y-16 lg:gap-y-12")}>
                {works
                    .sort((a, b) => b.date.start.localeCompare(a.date.start))
                    .map((item, i) => {
                        const { date } = item;
                        const { start, end } = date;
                        const dateEnd = end === "now" ? new Date().toISOString() : item.date.end;
                        return (
                            <li key={i} className={cn("grid lg:grid-cols-12", "gap-x-4")}>
                                <div className={cn("col-span-3")}>
                                    <div
                                        className={cn(
                                            "sticky",
                                            "top-4 lg:top-12",
                                            "max-lg:text-xs",
                                            "pb-4"
                                        )}
                                    >
                                        <div className={cn("text-2xl", "font-bold", "lg:mb-4")}>
                                            {calculateDuration(start, dateEnd)}
                                        </div>
                                        <div className={cn("text-sm", "text-neutral-500")}>
                                            <div>{moment(start).format("ll")}</div>
                                            <div className={cn("font-bold")}>
                                                — {end === "now" ? "Now" : moment(end).format("ll")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={cn("col-span-9", "flex flex-col", "gap-y-4")}>
                                    <div className={cn("text-2xl", "font-bold")}>
                                        {item.project}
                                    </div>
                                    <div className={cn("max-lg:gap-y-4", "flex flex-col")}>
                                        <ExperienceKeyValue
                                            title="Principle"
                                            value={item.principle}
                                        />
                                        <ExperienceKeyValue
                                            title="Employer"
                                            value={item.employer}
                                        />
                                        <ExperienceKeyValue
                                            title="Info"
                                            value={`${item.category} — ${item.role} — ${item.scope}`}
                                        />
                                    </div>
                                    <p className={cn("font-serif", "text-lg")}>
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
