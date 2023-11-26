import { getProducts } from "@/libs/fetcher";

import BlogCards from "@/app/blog/BlogCards";

import GridContainer from "@/components/GridContainer";

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
    <GridContainer>
      {products.success && products.data.length !== 0 && (
        <BlogCards products={products.data} />
      )}
    </GridContainer>
  );
}
