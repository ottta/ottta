import NextLink from "next/link";
import { IProduct } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import moment from "moment";

type BlogCardProps = {
    index: number;
    product: IProduct;
    className?: string;
};

export default function BlogCard(props: BlogCardProps) {
    const { index, product, className } = props;
    const { name, slug, createdAt, content, description } = product;
    const { readTime } = content;
    const { minutes } = readTime;

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
                "-mr-px -mb-px",
                "col-span-3",
                isFirst && "row-start-1 row-span-2"
                // isSixth && "col-span-3 col-start-7 row-span-2",
                // (isSecond || isThird || isFourth) && "col-span-6"
            )}
        >
            <NextLink
                href={`/blog/${slug}`}
                className={cn(
                    "group",
                    "relative",
                    "border",
                    "flex flex-col justify-between w-full h-full transition-all duration-300 ease-out overflow-hidden",
                    "aspect-square",
                    isFirst && "lg:aspect-[2/1]"
                    // (isSecond || isThird || isFourth) && "aspect-[2/1]"
                )}
            >
                <div className={cn("p-4")}>
                    <div className={cn("text-4xl")}>{name}</div>
                    <div>{moment(createdAt).format("LL")}</div>
                    <div>
                        {minutes} {minutes <= 1 ? "minute" : "minutes"} read
                    </div>
                    <p>{description}</p>
                </div>
            </NextLink>
        </li>
    );
}
