"use client";

import NextLink from "next/link";

import { IProduct } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

type BlogListProps = {
    items: IProduct[];
};

export default function BlogList(props: BlogListProps) {
    const { items } = props;
    const pathname = usePathname();
    return (
        <div className={cn("sticky", "top-12", "p-4", "flex flex-col", "gap-y-4")}>
            <div className={cn("font-bold")}>Posts</div>
            <ul>
                {items.map((item, i) => {
                    const href = `/blog/${item.slug}`;
                    const isActive = pathname === href;
                    return (
                        <li key={i}>
                            <NextLink
                                href={href}
                                className={cn(
                                    "line-clamp-1",
                                    "text-neutral-500",
                                    isActive && "text-neutral-950 dark:text-neutral-200 font-bold"
                                )}
                            >
                                {item.name}
                            </NextLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
