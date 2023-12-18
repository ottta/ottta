import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

import BlogCards from "@/components/Blogs/BlogCards";
import GridContainer from "@/components/Utils/GridContainer";
import Separator from "@/components/Utils/Separator";

export default async function Page() {
  const products = await getProducts({
    "tags.slug": "blog",
    sort: "-createdAt",
    limit: 8,
    page: 1,
    status: "publish",
    fields: "id,name,slug,description,createdAt,tags,content.readTime"
  });
  return (
    <>
      <Separator className={cn("!h-40 lg:!h-12")} />
      <GridContainer>
        {products.success && products.data.length !== 0 && (
          <BlogCards products={products.data} />
        )}
      </GridContainer>

      <Separator />
    </>
  );
}
