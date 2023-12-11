import NextLink, { LinkProps } from "next/link";

import { cn } from "@/libs/utils";

import BadgeLinkedIn from "@/components/Utils/BadgeLinkedIn";

type CustomLink = {
  label: string;
  link: LinkProps;
};
const socialMedia: CustomLink[] = [
  { label: "GitHub", link: { href: "https://github.com/ottta" } },
  { label: "Behance", link: { href: "https://behance.net/taufik-oktama" } },
  { label: "Instagram", link: { href: "https://www.instagram.com/ottta__" } },
  {
    label: "Linkedin",
    link: { href: "https://linkedin.com/in/taufik-oktama" }
  },
  { label: "Email", link: { href: "mailto:ot@unforma.club" } }
];

const mainMenu: CustomLink[] = [
  { label: "Index", link: { href: "/" } },
  { label: "Blog", link: { href: "/blog" } },
  { label: "Work", link: { href: "/work" } }
];

export default function Footer() {
  return (
    <footer
      className={cn(
        "px-3 lg:px-12",
        "border-y",
        // "-mt-px",
        // "bg-rose-100 dark:bg-emerald-900"
        "bg-emerald-500 dark:bg-emerald-200"
      )}
    >
      <div
        className={cn(
          "border-x",
          "grid grid-cols-6 lg:grid-cols-12",
          "max-lg:divide-y lg:divide-x"
        )}
      >
        <div className={cn("col-span-6 lg:col-span-3", "p-3 lg:p-4")}>
          <BadgeLinkedIn />
        </div>
        <ul className={cn("col-span-6 lg:col-span-3", "p-3 lg:p-4")}>
          {mainMenu.map((item, i) => (
            <li key={i}>
              <NextLink {...item.link}>{item.label}</NextLink>
            </li>
          ))}
        </ul>
        <div className={cn("col-span-6 lg:col-span-3", "p-3 lg:p-4")} />
        <ul className={cn("col-span-6 lg:col-span-3", "p-3 lg:p-4")}>
          {socialMedia.map((item, i) => (
            <li key={i}>
              <NextLink
                {...item.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
