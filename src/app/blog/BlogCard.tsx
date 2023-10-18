import NextLink from "next/link";
import { IProduct } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import moment from "moment";
// import dummyMontain from "../../../public/images/dummy-mountain.jpg";
// import dummyPortrait from "../../../public/images/dummy-portrait.jpg";
// import NextImage from "next/image";

type BlogCardProps = {
    total: number;
    index: number;
    product: IProduct;
    className?: string;
};

export default function BlogCard(props: BlogCardProps) {
    const { total, index, product, className } = props;
    const { name, slug, createdAt, content, description, tags } = product;
    const { readTime } = content;
    const { minutes } = readTime;

    const lessThenFour = total < 4;

    const isEven = index % 2 === 0;
    const isFirst = index === 0;
    const isSecond = index === 1;
    const isThird = index === 2;
    const isFourth = index === 3;
    const isSixth = index === 5;

    return (
        <li
            className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                "col-span-3",
                // "-mr-px -mb-px",
                "max-lg:aspect-square",
                isFirst && "row-span-2 col-span-6 max-lg:aspect-square",
                (isSecond || isThird) &&
                    lessThenFour &&
                    "col-span-3 lg:col-span-6 max-lg:aspect-[1/2] lg:aspect-[2/1]",
                "overflow-hidden"
                // isSixth && "col-span-3 col-start-7 row-span-2",
                // (isSecond || isThird || isFourth) && "col-span-6"
            )}
        >
            <NextLink
                href={`/blog/${slug}`}
                className={cn(
                    "group",
                    "relative",
                    // "border",
                    "border",
                    "flex flex-col justify-between",
                    "gap-y-4",
                    "w-full h-full transition-all duration-300 ease-out overflow-hidden",
                    "lg:aspect-square",
                    isFirst && "lg:aspect-[2/1]",
                    // (isSecond || isThird || isFourth) && "aspect-[2/1]"
                    "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                )}
            >
                {/* <div className={cn("absolute inset-0")}>
                    <NextImage
                        alt="Test"
                        src={dummyMontain}
                        fill
                        className={cn(
                            "object-cover",
                            "object-center",
                            "grayscale group-hover:grayscale-0"
                        )}
                        // style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div> */}
                <div
                    className={cn(
                        "p-2 lg:p-3",
                        "h-full",
                        "flex flex-col",
                        "justify-between",
                        "gap-y-4",
                        "relative"
                    )}
                >
                    <div>
                        <ul className={cn("flex", "gap-x-1", "mb-4")}>
                            {tags?.map((item, i) => (
                                <li
                                    key={i}
                                    className={cn(
                                        "border rounded-full",
                                        "px-2",
                                        // "leading-tight",
                                        "text-sm"
                                    )}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                        <div
                            className={cn(
                                "text-xl lg:text-4xl",
                                isFirst && "max-lg:text-2xl",
                                "max-lg:font-bold",
                                "leading-none",
                                "max-lg:line-clamp-2",
                                "hyphens-auto"
                            )}
                        >
                            {name}
                        </div>
                    </div>
                    <div className={cn("text-neutral-500")}>
                        <div
                            className={cn(
                                "flex items-center justify-between",
                                "gap-x-4",
                                "text-xs",
                                "mb-2"
                            )}
                        >
                            <div>{moment(createdAt).format("LL")}</div>
                            <div>
                                {minutes} {minutes <= 1 ? "minute" : "minutes"} read
                            </div>
                        </div>
                        <p
                            className={cn(
                                "hyphens-auto",
                                "line-clamp-2",
                                "max-lg:text-xs",
                                isFirst && "!text-2xl"
                            )}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </NextLink>
        </li>
    );
}
