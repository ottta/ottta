import works from "@/database/works.json";
import { cn } from "@/libs/utils";
import moment from "moment";

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
            <ul className={cn("flex flex-col", "gap-y-12")}>
                {works
                    .sort((a, b) => b.date.start.localeCompare(a.date.start))
                    .map((item, i) => (
                        <li key={i} className={cn("grid lg:grid-cols-12", "gap-x-4")}>
                            <div className={cn("col-span-3")}>
                                <div
                                    className={cn(
                                        "sticky",
                                        "top-4 lg:top-12",
                                        "max-lg:text-xs",
                                        "leading-tight"
                                    )}
                                >
                                    <div>{moment(item.date.start).format("LL")}</div>
                                    <div className={cn("font-bold")}>
                                        —{" "}
                                        {item.date.end !== "now"
                                            ? moment(item.date.end).format("LL")
                                            : "Now"}
                                    </div>
                                </div>
                            </div>
                            <div className={cn("col-span-9", "flex flex-col", "gap-y-4")}>
                                <div className={cn("text-2xl", "font-bold")}>{item.project}</div>
                                <div className={cn("max-lg:gap-y-4", "flex flex-col")}>
                                    <ExperienceKeyValue title="Principle" value={item.principle} />
                                    <ExperienceKeyValue title="Employer" value={item.employer} />
                                    <ExperienceKeyValue
                                        title="Info"
                                        value={`${item.category} — ${item.role} — ${item.scope}`}
                                    />
                                </div>
                                <p className={cn("font-serif", "text-lg")}>{item.description}</p>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
