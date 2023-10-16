import BlogCard from "@/app/blog/BlogCard";
import { IProduct } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

type BlogCardsProps = {
    products: IProduct[];
};

export default function BlogCards(props: BlogCardsProps) {
    const { products } = props;
    const finalProducts = products.concat(
        products,
        products,
        products,
        products,
        products,
        products,
        products,
        products,
        products,
        products
    );
    return (
        <ul
            data-layout="fluid"
            className={cn(
                "max-lg:flex max-lg:flex-col",
                "lg:grid lg:grid-cols-12 overflow-hidden",
                "border-r border-b",
                "-my-px"
            )}
        >
            {finalProducts.map((item, i) => (
                <BlogCard key={i} index={i} product={item} />
            ))}
        </ul>
    );
}
