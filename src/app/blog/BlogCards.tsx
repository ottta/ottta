import BlogCard from "@/app/blog/BlogCard";
import { IProduct } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

type BlogCardsProps = {
    products: IProduct[];
};

export default function BlogCards(props: BlogCardsProps) {
    const { products } = props;
    const finalProducts = products;
    // const finalProducts = products.concat(
    //     products,
    //     products,
    //     products,
    //     products,
    //     products,
    //     products,
    //     products,
    //     products,
    //     products,
    //     products
    // );
    return (
        <ul
            className={cn(
                "col-span-12",
                "grid grid-cols-6 lg:grid-cols-12",
                "grid-flow-dense",
                "gap-1",
                "overflow-hidden",
                "p-1"
            )}
        >
            {finalProducts.map((item, i) => (
                <BlogCard key={i} total={finalProducts.length} index={i} product={item} />
            ))}
        </ul>
    );
}
