import type { IToc } from "@/libs/fetcher";
import NextLink from "next/link";
import { cn } from "@/libs/utils";

type TOCItemProps = IToc & {
    activeToc: string | null;
};

export default function TOCItem(props: TOCItemProps) {
    const { level, htmlId, text, activeToc } = props;
    const isActive = activeToc === htmlId;
    return (
        <li
            className={cn(level === 2 && "pl-3 lg:pl-4", level === 3 && "pl-6 lg:pl-8", "relative")}
        >
            <NextLink
                shallow
                href={`#${htmlId}`}
                data-level={level}
                className={cn(
                    "line-clamp-1",
                    "text-neutral-600 dark:text-neutral-400",
                    isActive && "text-neutral-950 dark:text-neutral-300 font-bold",
                    "transition-all duration-300",
                    "font-text"
                )}
            >
                {text}
            </NextLink>
        </li>
    );
}
