"use client";

import { cn } from "@/libs/utils";
import useTableOfContent from "@/hooks/use-table-content";
import { BlogTocProps } from "@/components/Blogs/BlogToc";
import TOCItem from "@/components/Blogs/TOCItem";

export default function TOCList(props: BlogTocProps) {
    const { items } = props;
    const activeToc = useTableOfContent(items);

    if (items.length <= 0) return <div>No TOCs</div>;
    return (
        <ul className={cn("leading-loose", "divide-y", "border-y", "-my-px")}>
            {items.map((item, i) => (
                <TOCItem key={i} activeToc={activeToc} {...item} />
            ))}
        </ul>
    );
}
