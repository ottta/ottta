import type { IToc } from "@/libs/fetcher";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { cn } from "@/libs/utils";
import TOCList from "@/components/Blogs/TOCList";
import BlogTocMobile from "@/components/Blogs/BlogTocMobile";

export type BlogTocProps = {
    items: IToc[];
};

export default function BlogToc(props: BlogTocProps) {
    const { items } = props;

    const headerList = headers();
    const agent = headerList.get("user-agent");
    const pAgent = new UAParser(agent!);
    const isMobile = pAgent.getDevice().type === "mobile";

    return isMobile ? (
        <BlogTocMobile items={items} />
    ) : (
        <div className={cn("max-lg:hidden", "sticky", "top-12", "p-4", "flex flex-col", "gap-y-4")}>
            <div className={cn("font-bold")}>On this page</div>
            <TOCList items={items} />
        </div>
    );
}
