"use client";

import NextLink from "next/link";

import useTableOfContent from "@/hooks/use-table-content";
import { IToc } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

type BlogTocProps = {
    items: IToc[];
};

function ItemToc(
    props: IToc & {
        activeToc: string | null;
    }
) {
    const { level, htmlId, text, activeToc } = props;
    const isActive = activeToc === htmlId;
    return (
        <li className={cn(level === 2 && "pl-4", level === 3 && "pl-8")}>
            <NextLink
                shallow
                href={`#${htmlId}`}
                data-level={level}
                className={cn(
                    "line-clamp-1",
                    "text-neutral-400 dark:text-neutral-700",
                    isActive && "text-neutral-950 dark:text-neutral-300 font-bold",
                    "transition-all duration-300"
                )}
            >
                {text}
            </NextLink>
        </li>
    );
}

export default function BlogToc(props: BlogTocProps) {
    const { items } = props;
    const activeToc = useTableOfContent(items);

    if (items.length <= 0) return <div>No TOCs</div>;
    return (
        <div className={cn("sticky", "top-12", "p-4", "flex flex-col", "gap-y-4")}>
            <div className={cn("font-bold")}>On this page</div>
            <ul className={cn("leading-loose")}>
                {items.map((item, i) => (
                    <ItemToc key={i} activeToc={activeToc} {...item} />
                ))}
            </ul>
        </div>
    );
}
