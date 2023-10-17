import NextLink from "next/link";
import { notFound } from "next/navigation";
import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import BlogToc from "@/app/blog/[slug]/BlogToc";
import BlogList from "@/app/blog/[slug]/BlogList";
import GridContainer from "@/components/GridContainer";
import { Metadata } from "next";

type PageProps = {
    params: {
        [key: string]: string;
    };
    searchParams: any;
};

async function allProducts() {
    const blogs = await getProducts({
        "tags.slug": "article,blog,story",
        sort: "-createdAt",
        limit: 10,
        status: "publish",
        fields: "name,slug"
    });

    return blogs;
}

export async function generateStaticParams() {
    const blogs = await getProducts({
        "tags.slug": "article,blog,story",
        sort: "-createdAt",
        status: "publish",
        fields: "name,slug,content.toc"
    });

    return blogs.data.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const blog = await getProducts({ slug: props.params.slug });
    const data = blog.data[0];
    return {
        title: data.name || "Unknown",
        description: data.description || "Unknown",
        alternates: {
            canonical: `/blog/${data.slug || "unknown"}`
        }
    };
}

export default async function Page(props: PageProps) {
    const blog = await getProducts({ slug: props.params.slug });
    const blogs = await allProducts();

    if (!blog.success || blog.data.length <= 0) notFound();
    const { content, description, name } = blog.data[0];
    return (
        <>
            <GridContainer className={cn("lg:divide-x", "lg:min-h-[66.66vh]")}>
                <div className={cn("col-span-6 lg:col-span-3")}>
                    <div className={cn("p-4", "sticky top-12")}>
                        <NextLink
                            href="/blog"
                            className={cn(
                                "border rounded-full",
                                "bg-neutral-200 dark:bg-neutral-900",
                                "flex items-center justify-center",
                                "w-12 aspect-square"
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="2rem"
                                width="2rem"
                                viewBox="0 -960 960 960"
                            >
                                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                            </svg>
                        </NextLink>
                    </div>
                </div>

                <div className={cn("col-span-6 lg:col-span-3")}></div>

                <div
                    className={cn(
                        "col-span-6",
                        "p-4",
                        "flex flex-col",
                        "justify-between",
                        "gap-y-12"
                    )}
                >
                    <div className={cn("text-7xl font-black")}>{name}</div>
                    <p
                        className={cn("text-5xl", "font-serif italic")}
                        dangerouslySetInnerHTML={{ __html: `<q>${description}</q>` }}
                    />
                </div>
            </GridContainer>

            <GridContainer className={cn("lg:divide-x", "lg:min-h-[66.66vh]")}>
                <div className={cn("col-span-6 lg:col-span-3", "max-lg:order-3")}>
                    <BlogList items={blogs.data} />
                </div>

                <div className={cn("col-span-6 lg:col-span-3")}>
                    <BlogToc items={content.toc} />
                </div>
                <div className={cn("col-span-6", "max-lg:border-y", "overflow-hidden")}>
                    <article
                        id="__article"
                        dangerouslySetInnerHTML={{ __html: content.html }}
                        className={cn("p-4", "max-lg:mx-auto")}
                    />
                </div>
            </GridContainer>
        </>
    );
}
