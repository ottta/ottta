import slugify from "slugify";

import moment from "moment";
import NextLink from "next/link";

import works from "@/database/works.json";

import { getProducts } from "@/libs/fetcher";
import { cn } from "@/libs/utils";

import GridContainer from "@/components/GridContainer";
import Hero from "@/components/Hero";
import HeroIndex from "@/components/HeroIndex";
import Separator from "@/components/Utils/Separator";

type HCard = {
  href: string;
  name: string;
  tags: string[];
  description: string;
  date?: string;
};

type HCards = {
  basePath: string;
  title: string;
  items: HCard[];
};

function HighlightCard(props: HCard) {
  const { href, name, tags, description, date } = props;
  return (
    <li className={cn("col-span-6 lg:col-span-3", "lg:aspect-square", "group")}>
      <NextLink
        href={href}
        className={cn(
          "flex flex-col justify-between",
          "gap-y-2",
          "h-full",
          "py-4 lg:p-4",
          "overflow-hidden",
          "lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-800"
        )}
      >
        <div className={cn("max-lg:mb-6")}>
          <ul className={cn("flex items-center gap-x-1", "mb-2")}>
            {tags.map((item, i) => (
              <li
                key={i}
                className={cn("border", "rounded-full", "px-2", "text-xs")}
              >
                {item}
              </li>
            ))}
          </ul>
          <div
            dangerouslySetInnerHTML={{ __html: name }}
            className={cn(
              "text-2xl lg:text-4xl",
              "leading-none",
              "line-clamp-1 lg:line-clamp-2"
            )}
          />
        </div>
        <div className={cn("text-neutral-500")}>
          <div className={cn("text-xs", "mb-1", "font-text")}>
            {moment(date).format("LL")}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className={cn("line-clamp-2", "font-text", "hyphens-auto")}
          />
        </div>
      </NextLink>
    </li>
  );
}

function HighlightCards(props: HCards) {
  const { basePath, items, title } = props;
  return (
    <div className={cn("bg-neutral-100 dark:bg-neutral-900")}>
      <GridContainer>
        <div
          className={cn(
            "col-span-6 lg:col-span-12",
            "px-4",
            "h-16 lg:h-12",
            "flex items-center",
            "-mb-px"
          )}
        >
          <div className={cn("text-2xl font-bold")}>{title}</div>
        </div>
      </GridContainer>

      <GridContainer>
        <ul
          className={cn(
            "col-span-6 lg:col-span-12",
            "w-full",
            "grid grid-cols-6 lg:grid-cols-12",
            "max-lg:divide-y lg:divide-x",
            "max-lg:px-4",
            "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900"
          )}
        >
          {items.map((item, i) => (
            <HighlightCard key={i} {...item} />
          ))}

          <li className={cn("col-span-6 lg:col-span-3", "lg:aspect-square")}>
            <NextLink
              href={basePath}
              className={cn(
                "flex items-center lg:justify-center",
                "text-xl",
                "h-16 lg:h-full",
                "lg:p-4",
                "hover:bg-neutral-200 dark:hover:bg-neutral-800"
              )}
            >
              Show All
            </NextLink>
          </li>
        </ul>
      </GridContainer>
    </div>
  );
}

export default async function Page() {
  const products = await getProducts({
    "tags.slug": "blog",
    sort: "-createdAt",
    limit: 3,
    page: 1,
    status: "publish",
    fields: "id,name,slug,description,createdAt,tags"
  });
  return (
    <>
      <HeroIndex />
      <Separator />
      <Hero />
      <Separator />

      {products.success && products.data.length >= 1 && (
        <HighlightCards
          title="Posts"
          basePath="/blog"
          items={products.data.map((item) => ({
            href: `/blog/${item.slug}`,
            name: item.name,
            description: item.description,
            tags: item.tags.map((t) => t.name),
            date: item.createdAt
          }))}
        />
      )}

      <Separator />

      <HighlightCards
        title="Works"
        basePath="/work"
        items={works
          .sort((a, b) => b.date.start.localeCompare(a.date.start))
          .slice(0, 3)
          .map((item) => ({
            href: `/work#${slugify(item.project, {
              lower: true,
              remove: /[*+~.()'"!:@]/g
            })}`,
            name: `<strong>${item.principle}</strong> — ${item.project}`,
            description: item.description,
            tags: [item.category],
            date:
              item.date.end === "now" ? new Date().toISOString() : item.date.end
          }))}
      />

      <Separator />
    </>
  );
}
