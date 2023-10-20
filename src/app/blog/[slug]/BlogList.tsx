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

    const finalItems = items.concat();
    return (
        <div className={cn("sticky", "top-12", "p-3 lg:p-4", "flex flex-col", "gap-y-4")}>
            <div className={cn("font-bold")}>Posts</div>
            <ul
                className={cn(
                    "leading-loose",
                    "divide-y",
                    "border-y",
                    "-my-px",
                    "max-lg:divide-amber-500 max-lg:border-amber-500",
                    "dark:max-lg:divide-neutral-800 dark:max-lg:border-neutral-800"
                )}
            >
                {finalItems.map((item, i) => {
                    const href = `/blog/${item.slug}`;
                    const isActive = pathname === href;
                    const index = i < 9 ? `0${i + 1}` : (i + 1).toString();
                    return (
                        <li
                            key={i}
                            className={cn(
                                "flex",
                                "gap-x-4",
                                "text-neutral-600 dark:text-neutral-400",
                                isActive && "text-neutral-950 dark:text-neutral-200 font-bold",
                                "font-text"
                            )}
                        >
                            <div
                                style={{ fontFeatureSettings: `"tnum", "onum"` }}
                                className={cn("text-right", "w-5 aspect-square", "shrink-0")}
                            >
                                {index}.
                            </div>
                            <NextLink href={href} className={cn("line-clamp-1")}>
                                {item.name}
                            </NextLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
