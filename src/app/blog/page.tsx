import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import BlogCards from "@/app/blog/BlogCards";

export default async function Page() {
    const products = await getProducts({
        "tags.slug": "blog",
        sort: "-createdAt",
        limit: 8,
        page: 1,
        status: "publish",
        fields: "id,name,slug,description,createdAt,content.readTime"
    });
    return (
        <div className={cn("px-3 lg:px-12", "border-y", "-my-px")}>
            {products.success && products.data.length !== 0 && (
                <BlogCards products={products.data} />
            )}
        </div>
    );
}
