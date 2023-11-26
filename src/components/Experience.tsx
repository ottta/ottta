"use client";

import slugify from "slugify";

import moment from "moment";
import { useMemo } from "react";

import works from "@/database/works.json";

import { calculateDuration, cn } from "@/libs/utils";

import useTableOfContent from "@/hooks/use-table-content";

function toSlug(name: string) {
  return slugify(name, { lower: true, remove: /[+~.,()'"!:@]/g });
}

function nthDate(date: string) {
  const isValid = date !== "now";
  return isValid ? moment(date).format("MMM Do, YYYY") : "Now";
  // .replace(/(\d)(st|nd|rd|th)/g, "$1<sup>$2</sup>");
}

type Work = (typeof works)[0];

type InfoProps = {
  label: string;
  value: string;
};
function Info(props: InfoProps) {
  return (
    <div
      className={cn(
        "font-text",
        "grid grid-cols-5 lg:grid-cols-3",
        "items-baseline",
        "col-span-5",
        "text-neutral-500",
        "max-lg:text-sm",
        "!leading-tight"
      )}
    >
      <div
        className={cn(
          "col-span-2 lg:col-span-1",
          "flex justify-between",
          "px-2 lg:px-4 lg:pr-0"
        )}
      >
        <span>{props.label}</span>
        <span>:</span>
      </div>
      <div
        className={cn("col-span-3 lg:col-span-2", "px-2 lg:px-4")}
        dangerouslySetInnerHTML={{ __html: props.value }}
      />
    </div>
  );
}

function Detail(props: Work) {
  const {
    project,
    description,
    date,
    principle,
    employer,
    category,
    role,
    scope,
    link
  } = props;
  const isPresent = date.end === "now";

  return (
    <li
      id={toSlug(project)}
      className={cn("py-6 lg:py-4", "scroll-mt-[calc(6rem-1px)]")}
    >
      <div className={cn("mb-8", "flex flex-col", "gap-y-8")}>
        <div className={cn("px-2 lg:px-4")}>
          <ul className={cn("flex gap-x-2", "mb-2")}>
            {[...category.split(":"), role].map((item, i) => (
              <li
                key={i}
                className={cn(
                  // "text-lg lg:text-sm",
                  // "font-bold",
                  "leading-none",
                  "bg-rose-200 dark:bg-rose-800",
                  "border-rose-500 dark:border-rose-600",
                  "inline-block",
                  "rounded-full",
                  "border",
                  "px-2 lg:px-2 py-1",
                  // "shadow-[0_0_1rem_-0.25rem] shadow-cyan-700 dark:shadow-cyan-300",
                  "overflow-hidden",
                  "whitespace-nowrap",
                  "text-ellipsis",
                  i === 0 && "shrink-0"
                )}
              >
                {item}
              </li>
            ))}
          </ul>
          <div
            className={cn("text-4xl lg:text-6xl", "font-bold", "leading-none")}
          >
            {project}
          </div>
        </div>

        <div className={cn("grid lg:grid-cols-10", "lg:gap-x-0 gap-y-2")}>
          <Info label="Start" value={nthDate(date.start)} />
          <Info label="End" value={nthDate(date.end)} />
          <Info
            label="Total"
            value={calculateDuration(
              date.start,
              !isPresent ? date.end : undefined
            )}
          />
          <Info
            label="Live URL"
            value={
              link
                ? `<a href="${link}" target="_blank" rel="nofollow noopener noreferrer" class="line-clamp-1">${link}</a>`
                : "-"
            }
          />
          <Info label="Principle" value={principle} />
          <Info
            label="Employer"
            value={principle === employer ? "-" : employer}
          />
          <Info label="Role" value={role} />
          <Info label="Scope" value={scope} />
        </div>
      </div>

      <article
        dangerouslySetInnerHTML={{ __html: description }}
        style={{ columnGap: "2rem" }}
        className={cn(
          "font-text",
          "prose",
          "prose-neutral dark:prose-invert",
          "prose-base lg:prose-lg",
          "w-full max-w-full",
          "hyphens-auto",
          // "lg:columns-2",
          "px-2 lg:px-4"
        )}
      />
    </li>
  );
}

export default function Experience() {
  const groupByYears = useMemo(() => {
    const reduces = works
      .sort((a, b) => b.date.start.localeCompare(a.date.start))
      .reduce((items: { [key: string]: Work[] }, item) => {
        const isPresent = item.date.end === "now";
        const year = isPresent ? "Now" : moment(item.date.start).format("YYYY");

        if (!items[year]) {
          items[year] = [];
        }
        items[year].push(item);
        return items;
      }, {});

    return reduces;
  }, []);

  const years = Object.keys(groupByYears);

  useTableOfContent(
    works.map((item) => ({
      level: 1,
      text: item.project,
      htmlId: toSlug(item.project)
    }))
  );

  return (
    <>
      <div
        className={cn(
          "sticky",
          "top-[calc(4rem-1px)] lg:top-[calc(3rem-1px)]",
          "z-10",
          "bg-neutral-50/90 dark:bg-neutral-950/90",
          "backdrop-blur-sm",
          "border-y",
          "px-3 lg:px-12",
          "-mb-px -mt-px"
        )}
      >
        <div className={cn("fluid", "border-x")}>
          <div
            className={cn(
              "h-12 lg:h-10",
              "overflow-hidden",
              "-mb-px",
              "grid grid-cols-6 lg:grid-cols-12",
              "items-center",
              "font-bold"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-between",
                "col-span-5 lg:col-span-6",
                "px-3 lg:px-4"
              )}
            >
              <div>Experience</div>
              {/* <div>Sorter</div> */}
            </div>
            <div
              className={cn(
                "col-span-1 lg:col-span-6",
                "px-3 lg:px-4",
                "max-lg:flex max-lg:items-center max-lg:justify-center"
              )}
            >
              <div>Year</div>
            </div>
          </div>
        </div>
      </div>

      <ul
        id="__list-experience"
        className={cn("flex flex-col", "gap-y-3 lg:gap-y-4", "-mb-px")}
      >
        {years.reverse().map((year, i) => (
          <li key={i} className={cn("border-y", "px-3 lg:px-12")}>
            <div
              className={cn(
                "fluid",
                "grid grid-cols-6 lg:grid-cols-12",
                "border-x",
                "divide-x"
                // "bg-neutral-100 dark:bg-neutral-900"
              )}
            >
              <ul
                className={cn(
                  "col-span-5 lg:col-span-6",
                  "flex flex-col",
                  "divide-y"
                )}
              >
                {groupByYears[year].map((work, i) => (
                  <Detail key={i} {...work} />
                ))}
              </ul>

              <div
                className={cn(
                  "col-span-1 lg:col-span-3",
                  "lg:bg-neutral-100 lg:dark:bg-neutral-900",
                  "max-lg:inline-flex max-lg:items-start max-lg:justify-center"
                )}
              >
                <div
                  style={{ writingMode: "vertical-lr" }}
                  className={cn(
                    "text-4xl lg:text-6xl",
                    "font-bold",
                    "sticky top-28 lg:top-24",
                    "leading-none",
                    "p-2 py-6 lg:py-4"
                  )}
                >
                  {year}
                </div>
              </div>

              <div
                style={{ backgroundImage: "var(--bg-dotted)" }}
                className={cn(
                  "col-span-6 lg:col-span-3",
                  "max-lg:hidden",
                  "bg-neutral-100 dark:bg-neutral-900"
                )}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
