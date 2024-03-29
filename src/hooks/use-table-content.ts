"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { IToc } from "@/libs/fetcher";

const isInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default function useTableOfContent(tocs: IToc[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = tocs.map((item) =>
        document.getElementById(item.htmlId)
      );
      const visibleHeadings = headingElements.filter((item) =>
        item ? isInViewport(item) : []
      );

      if (visibleHeadings.length > 0) {
        setActive(visibleHeadings[0] ? visibleHeadings[0].id : null);
      }
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [tocs]);

  useLayoutEffect(() => {
    if (!active) return;
    const el = document.getElementById(active);
    if (!el) return;

    if (active === el.id) {
      el.setAttribute("data-intersect", "true");
    }

    return () => {
      el.setAttribute("data-intersect", "false");
    };
  }, [active]);

  return active;
}
