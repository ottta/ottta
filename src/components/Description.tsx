import GridContainer from "./Utils/GridContainer";

import { LIPSUM, cn } from "@/libs/utils";

const DESCRIPTION = [
  `<p class="indent-12">A designer who has seamlessly transitioned into the world of software development, motivated by a deep interest in the intersection of <em>interactive media, fonts, and technology</em>. My journey has been a dynamic fusion of aesthetic sensibility and coding prowess, in which I use my design background to create software solutions that are both visually appealing and technically precise. With a keen eye for detail and an insatiable curiosity, I navigate the ever-changing landscape of interactive media, fonts, and technology, constantly adding to the synthesis of artistry and innovation.</p>`,
  `<p class="indent-12">Taufik Oktama is a versatile tech professional with a background in visual communication design and a strong interest in UI/UX and cutting-edge technologies. He began his journey in the font world with a computer-centric mindset, creating an innovative automation program that can effectively analyze font capabilities and present them on a user-friendly website. Taufik's expertise is in creating "production-ready fonts" and related products and software. His experience includes dealing with complex technical font challenges and utilizing fonts in innovative ways.</p>`
];
// const DESCRIPTION = [
//   // `<h2>Taufik Oktama</h2>`,
//   `<p>A designer turned software developer with a keen interest in interactive media and technology. I am a self-taught computer programmer, that specializes in web development, who would like to join a team of like-minded developers.</p>`,
//   `<p>I have 7 years of professional web development experience, and I am capable of all aspects of web development that have worked in the development of a Javascript library and their framework.</p>`,
//   `<p>Right now, I'm looking for a suitable position as a focused Javascript developer with a company that values exceptional performance and where I can work on a complex long-term project.</p>`
// ];

export default function Description() {
  return (
    <GridContainer className={cn("lg:divide-x")}>
      <div className={cn("col-span-8 lg:col-span-3", "py-4")}>
        <div
          style={{ fontStretch: "condensed" }}
          className={cn(
            "text-4xl",
            "font-black",
            "leading-none",
            "sticky",
            "top-16",
            "z-10",
            "bg-neutral-50 dark:bg-neutral-950",
            "flex",
            "items-center",
            "px-4"
          )}
        >
          Prologue
        </div>
      </div>
      <div className={cn("col-span-3")} />
      <div className={cn("col-span-8 lg:col-span-6", "p-4")}>
        <article
          dangerouslySetInnerHTML={{ __html: DESCRIPTION.join("") }}
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
