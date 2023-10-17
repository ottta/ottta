import NextLink from "next/link";
import HorizontalScroll from "@/app/about/HorizontalScroll";
import CrossWordMobile from "@/components/CrossWordMobile";
import Hero from "@/components/Hero";
import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import moment from "moment";
import works from "@/database/works.json";
import slugify from "slugify";
import GridContainer from "@/components/GridContainer";

type HCard = {
    href: string;
    name: string;
    tags: string[];
    description: string;
    date?: string;
};

type HCards = {
    basePath: string;
    title: string;
    items: HCard[];
};

function HighlightCard(props: HCard) {
    const { href, name, tags, description, date } = props;
    return (
        <li className={cn("col-span-6 lg:col-span-3", "lg:aspect-square")}>
            <NextLink
                href={href}
                className={cn(
                    "flex flex-col justify-between",
                    "gap-y-2",
                    "h-full",
                    "p-4",
                    "overflow-hidden",
                    "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                )}
            >
                <div>
                    <ul className={cn("flex items-center gap-x-1", "mb-2")}>
                        {tags.map((item, i) => (
                            <li key={i} className={cn("border", "rounded-full", "px-2", "text-xs")}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className={cn("text-4xl", "leading-none")}>{name}</div>
                </div>
                <div className={cn("text-neutral-500")}>
                    <div className={cn("text-xs", "mb-1")}>{moment(date).format("LL")}</div>
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                        className={cn("line-clamp-2", "font-serif", "hyphens-auto")}
                    ></div>
                </div>
            </NextLink>
        </li>
    );
}

function HighlightCards(props: HCards) {
    const { basePath, items, title } = props;
    return (
        <div className={cn("my-12")}>
            <GridContainer>
                <div className={cn("px-4", "h-12", "flex items-center")}>
                    <div className={cn("text-2xl font-bold")}>{title}</div>
                </div>
            </GridContainer>

            <GridContainer>
                <ul
                    className={cn(
                        "col-span-6 lg:col-span-12",
                        "w-full",
                        "grid grid-cols-6 lg:grid-cols-12",
                        "max-lg:divide-y lg:divide-x"
                    )}
                >
                    {items.map((item, i) => (
                        <HighlightCard key={i} {...item} />
                    ))}

                    <li className={cn("col-span-6 lg:col-span-3", "lg:aspect-square")}>
                        <NextLink
                            href={basePath}
                            className={cn(
                                "flex items-center justify-center",
                                "text-4xl",
                                "h-full",
                                "p-4",
                                "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                            )}
                        >
                            Show All
                        </NextLink>
                    </li>
                </ul>
            </GridContainer>
        </div>
    );
}

export default async function Page() {
    const products = await getProducts({
        "tags.slug": "blog",
        sort: "-createdAt",
        limit: 3,
        page: 1,
        status: "publish",
        fields: "id,name,slug,description,createdAt,tags"
    });
    return (
        <>
            <HorizontalScroll />
            <CrossWordMobile />
            <Hero />

            {products.success && products.data.length >= 1 && (
                <HighlightCards
                    title="Posts"
                    basePath="/blog"
                    items={products.data.map((item) => ({
                        href: `/blog/${item.slug}`,
                        name: item.name,
                        description: item.description,
                        tags: item.tags.map((t) => t.name),
                        date: item.createdAt
                    }))}
                />
            )}

            <HighlightCards
                title="Works"
                basePath="/work"
                items={works
                    .sort((a, b) => b.date.start.localeCompare(a.date.start))
                    .slice(0, 3)
                    .map((item) => ({
                        href: `/work#${slugify(item.project, {
                            lower: true,
                            remove: /[*+~.()'"!:@]/g
                        })}`,
                        name: item.project,
                        description: item.description,
                        tags: [item.category],
                        date: item.date.end === "now" ? new Date().toISOString() : item.date.end
                    }))}
            />
        </>
    );
}
