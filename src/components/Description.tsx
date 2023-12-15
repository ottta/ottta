import GridContainer from "./Utils/GridContainer";

import { LIPSUM, cn } from "@/libs/utils";

const DESCRIPTION = [
  // `<h2>Taufik Oktama</h2>`,
  `<p>A designer turned software developer with a keen interest in interactive media and technology. I am a self-taught computer programmer, that specializes in web development, who would like to join a team of like-minded developers.</p>`,
  `<p>I have 7 years of professional web development experience, and I am capable of all aspects of web development that have worked in the development of a Javascript library and their framework.</p>`,
  `<p>Right now, I'm looking for a suitable position as a focused Javascript developer with a company that values exceptional performance and where I can work on a complex long-term project.</p>`
];

export default function Description() {
  return (
    <GridContainer className={cn("lg:divide-x")}>
      <div className={cn("col-span-8 lg:col-span-3")}>
        <div
          style={{ fontStretch: "condensed" }}
          className={cn(
            "text-8xl",
            "font-black",
            "leading-none",
            "sticky",
            "top-12",
            "z-10",
            "bg-neutral-50 dark:bg-neutral-950",
            // "h-16",
            "flex",
            "items-center",
            "px-4",
            "bg-red-500"
          )}
        >
          Prologue
        </div>
      </div>
      <div className={cn("col-span-3")} />
      <div className={cn("col-span-8 lg:col-span-6", "p-4")}>
        <article
          dangerouslySetInnerHTML={{ __html: LIPSUM.join("") }}
          className={cn(
            "prose",
            "prose-neutral dark:prose-invert",
            "prose-lg lg:prose-xl",
            "max-w-none",
            "hyphens-auto"
          )}
        />
      </div>
    </GridContainer>
  );
}
