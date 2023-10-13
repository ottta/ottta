import { cn } from "@/libs/utils";

type CrossWordProps = {
    sentence: string;
    className?: string;
};

export default function CrossWord(props: CrossWordProps) {
    const { sentence, className } = props;
    return (
        <ul className={cn("inline-flex items-center", "divide-x", "overflow-hidden", "border-x")}>
            {sentence.split("").map((item, i) => (
                <li
                    key={i}
                    className={cn(
                        "relative",
                        "border-y",
                        "text-lg lg:text-xs",
                        "w-8 lg:w-8",
                        "aspect-square",
                        "inline-flex items-center justify-center",
                        "overflow-hidden",
                        "uppercase",
                        item !== " " && "bg-neutral-100 dark:bg-neutral-900",
                        className
                    )}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
