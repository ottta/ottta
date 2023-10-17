import NextLink from "next/link";
import { notFound } from "next/navigation";
import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";
import BlogToc from "@/app/blog/[slug]/BlogToc";
import BlogList from "@/app/blog/[slug]/BlogList";
import GridContainer from "@/components/GridContainer";
import { Metadata } from "next";
import moment from "moment";

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
    const { content, description, name, createdAt, updatedAt } = blog.data[0];
    return (
        <div className={cn("flex flex-col", "gap-y-12")}>
            <GridContainer className={cn("lg:divide-x", "lg:min-h-[66.66vh]")}>
                <div
                    className={cn(
                        "max-lg:order-2",
                        "col-span-6",
                        "p-4",
                        "flex flex-col",
                        "justify-between",
                        "gap-y-12"
                        // "bg-neutral-200 dark:bg-neutral-900"
                    )}
                >
                    <div className={cn("text-5xl lg:text-7xl font-black")}>{name}</div>
                    <p
                        className={cn("text-3xl lg:text-5xl", "font-serif italic", "hyphens-auto")}
                        dangerouslySetInnerHTML={{ __html: `<q>${description}</q>` }}
                    />
                </div>

                <div
                    className={cn(
                        "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900",
                        "col-span-6 lg:col-span-3",
                        "flex flex-col justify-between"
                    )}
                >
                    <div className={cn("relative", "h-full")}>
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
                                    fill="currentColor"
                                >
                                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                                </svg>
                            </NextLink>
                        </div>
                    </div>
                    <div className={cn("px-4 py-2", "shrink-0")}>
                        <div className={cn("text-8xl", "font-bold", "leading-none")}>H1</div>
                    </div>
                </div>

                <div
                    className={cn(
                        "max-lg:border-b",
                        "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900",
                        "col-span-6 lg:col-span-3",
                        "flex flex-col justify-between"
                    )}
                >
                    <div className={cn("p-4", "sticky top-12")}>
                        <div className={cn("leading-tight")}>
                            <div className={cn("text-neutral-500", "font-bold", "mb-4")}>
                                Update at
                            </div>
                            <div>
                                {moment(updatedAt).format("MMMM Do, YYYY")}
                                <br />
                                {moment(updatedAt).format("hh:ss a")}
                            </div>
                        </div>
                    </div>
                </div>
            </GridContainer>

            <GridContainer className={cn("lg:divide-x", "lg:min-h-[66.66vh]")}>
                <div
                    className={cn(
                        "max-lg:order-2",
                        "col-span-6",
                        "max-lg:border-y",
                        "overflow-hidden"
                        // "bg-neutral-200 dark:bg-neutral-800"
                    )}
                >
                    <article
                        id="__article"
                        dangerouslySetInnerHTML={{ __html: content.html }}
                        className={cn("p-4", "max-lg:mx-auto")}
                    />
                </div>

                <div
                    className={cn(
                        "max-lg:order-1",
                        "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900",
                        "col-span-6 lg:col-span-3"
                        // "bg-neutral-100 dark:bg-neutral-900",
                        // "!border-neutral-950"
                    )}
                >
                    <BlogToc items={content.toc} />
                </div>

                <div
                    className={cn(
                        "max-lg:order-3",
                        "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900",
                        "col-span-6 lg:col-span-3",
                        "flex flex-col justify-between"
                        // "bg-neutral-200 dark:bg-neutral-800"
                    )}
                >
                    <BlogList items={blogs.data} />
                    <div className={cn("p-4 pb-2", "shrink-0")}>
                        <div className={cn("text-8xl", "font-bold", "leading-none")}>A1</div>
                    </div>
                </div>
            </GridContainer>
        </div>
    );
}
