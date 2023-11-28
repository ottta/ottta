import { cn } from "@/libs/utils";

import GridContainer from "@/components/Utils/GridContainer";

type Word = {
  word: string;
  direction: "vertical" | "horizontal";
  start: {
    x: number;
    y: number;
  };
};

const words: Word[] = [
  { word: "more", direction: "vertical", start: { x: 2, y: 1 } },
  { word: "truetype", direction: "horizontal", start: { x: 1, y: 3 } },
  { word: "supply", direction: "vertical", start: { x: 3, y: 2 } },
  { word: "mystic", direction: "vertical", start: { x: 6, y: 2 } },
  { word: "dream", direction: "vertical", start: { x: 8, y: 1 } },
  { word: "pant", direction: "horizontal", start: { x: 3, y: 5 } },
  { word: "by", direction: "horizontal", start: { x: 2, y: 7 } },
  { word: "icon", direction: "horizontal", start: { x: 5, y: 7 } },
  { word: "billing", direction: "vertical", start: { x: 2, y: 7 } },
  { word: "ion", direction: "vertical", start: { x: 5, y: 7 } },
  { word: "opinion", direction: "vertical", start: { x: 7, y: 7 } },
  { word: "illinois", direction: "horizontal", start: { x: 1, y: 9 } },
  { word: "idealist", direction: "vertical", start: { x: 4, y: 9 } },
  { word: "sine", direction: "horizontal", start: { x: 1, y: 11 } },
  { word: "on", direction: "horizontal", start: { x: 7, y: 12 } },
  { word: "lean", direction: "horizontal", start: { x: 4, y: 13 } },
  { word: "boston", direction: "horizontal", start: { x: 2, y: 15 } },
  { word: "band", direction: "vertical", start: { x: 2, y: 15 } },
  { word: "anonym", direction: "vertical", start: { x: 6, y: 13 } },
  { word: "an", direction: "horizontal", start: { x: 1, y: 17 } },
  { word: "byte", direction: "horizontal", start: { x: 5, y: 17 } },
  { word: "bits", direction: "vertical", start: { x: 5, y: 17 } },
  { word: "denim", direction: "horizontal", start: { x: 2, y: 18 } },
  { word: "enigma", direction: "vertical", start: { x: 8, y: 17 } },
  { word: "emit", direction: "vertical", start: { x: 3, y: 18 } },
  { word: "missing", direction: "horizontal", start: { x: 2, y: 20 } },
  { word: "mit", direction: "vertical", start: { x: 2, y: 20 } },
  { word: "lit", direction: "horizontal", start: { x: 1, y: 21 } },
  { word: "comma", direction: "horizontal", start: { x: 4, y: 22 } }
];

export default function CrossWordMobile() {
  const cell = 9;
  return (
    <div className={cn("lg:hidden")}>
      <GridContainer className={cn("overflow-hidden")}>
        <div className={cn("col-span-12")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 198"
            transform="translate(-0.325, 0) scale(0.999, 1.001)"
            className={cn(
              "w-[calc(100%+2px)]",
              // "-mr-px",
              // "-mx-px",
              // "mx-1",
              // "w-[calc(100%+3px)]",
              "fill-neutral-50 dark:fill-neutral-950",
              "relative"
              // "-my-px -ml-px"
            )}
          >
            <g
              strokeWidth={0.1}
              className={cn(
                // Comment this out to see negative space
                // "fill-neutral-950 dark:fill-neutral-50",
                "stroke-neutral-300 dark:stroke-neutral-800"
              )}
            >
              <rect width="9" height="9" />
              <rect y="9" width="9" height="9" />
              <rect y="27" width="9" height="9" />
              <rect x="27" y="27" width="9" height="9" />
              <rect x="36" y="27" width="9" height="9" />
              <rect x="54" y="27" width="9" height="9" />
              <rect x="54" y="36" width="9" height="9" />
              <rect x="54" y="45" width="9" height="9" />
              <rect x="63" y="45" width="9" height="9" />
              <rect y="36" width="9" height="9" />
              <rect y="45" width="9" height="9" />
              <rect x="9" y="36" width="9" height="9" />
              <rect x="9" y="45" width="9" height="9" />
              <rect x="27" y="45" width="9" height="9" />
              <rect x="27" y="54" width="9" height="9" />
              <rect x="36" y="45" width="9" height="9" />
              <rect y="54" width="9" height="9" />
              <rect y="63" width="9" height="9" />
              <rect y="81" width="9" height="9" />
              <rect x="18" y="81" width="9" height="9" />
              <rect x="36" y="81" width="9" height="9" />
              <rect x="45" y="81" width="9" height="9" />
              <rect x="63" y="81" width="9" height="9" />
              <rect x="63" y="90" width="9" height="9" />
              <rect y="99" width="9" height="9" />
              <rect y="108" width="9" height="9" />
              <rect y="117" width="9" height="9" />
              <rect y="126" width="9" height="9" />
              <rect y="135" width="9" height="9" />
              <rect y="153" width="9" height="9" />
              <rect y="162" width="9" height="9" />
              <rect x="9" y="162" width="9" height="9" />
              <rect x="27" y="162" width="9" height="9" />
              <rect y="171" width="9" height="9" />
              <rect x="9" y="117" width="9" height="9" />
              <rect x="18" y="117" width="9" height="9" />
              <rect x="36" y="117" width="9" height="9" />
              <rect x="54" y="117" width="9" height="9" />
              <rect x="63" y="117" width="9" height="9" />
              <rect x="63" y="126" width="9" height="9" />
              <rect x="63" y="135" width="9" height="9" />
              <rect x="54" y="135" width="9" height="9" />
              <rect x="54" y="153" width="9" height="9" />
              <rect x="54" y="162" width="9" height="9" />
              <rect x="54" y="180" width="9" height="9" />
              <rect x="45" y="180" width="9" height="9" />
              <rect x="36" y="180" width="9" height="9" />
              <rect x="27" y="180" width="9" height="9" />
              <rect y="189" width="9" height="9" />
              <rect x="18" y="189" width="9" height="9" />
              <rect x="45" y="162" width="9" height="9" />
              <rect x="36" y="135" width="9" height="9" />
              <rect x="18" y="135" width="9" height="9" />
              <rect x="18" y="144" width="9" height="9" />
              <rect x="27" y="144" width="9" height="9" />
              <rect x="18" y="108" width="9" height="9" />
              <rect x="63" y="108" width="9" height="9" />
              <rect x="18" y="99" width="9" height="9" />
              <rect x="36" y="90" width="9" height="9" />
              <rect x="45" y="90" width="9" height="9" />
              <rect x="36" y="99" width="9" height="9" />
              <rect x="45" y="99" width="9" height="9" />
              <rect x="18" y="63" width="9" height="9" />
              <rect x="27" y="63" width="9" height="9" />
              <rect x="45" y="63" width="9" height="9" />
              <rect x="63" y="63" width="9" height="9" />
              <rect x="27" y="9" width="9" height="9" />
              <rect x="36" y="9" width="9" height="9" />
              <rect x="54" y="9" width="9" height="9" />
              <rect x="18" width="9" height="9" />
              <rect x="27" width="9" height="9" />
              <rect x="36" width="9" height="9" />
              <rect x="45" width="9" height="9" />
              <rect x="54" width="9" height="9" />
              <rect x="63" width="9" height="9" />
            </g>

            {words.map((item, i) => (
              <g key={i} name={item.word}>
                {item.word.split("").map((w, index) => {
                  const x = item.start.x - 1;
                  const y = item.start.y - 1;
                  const coordinate = {
                    x:
                      item.direction === "horizontal"
                        ? (index + x) * cell
                        : x * cell,
                    y:
                      item.direction === "vertical"
                        ? (index + y) * cell
                        : y * cell
                  };
                  return (
                    <g
                      key={index}
                      data-content={w.toUpperCase()}
                      strokeWidth={0.1}
                      className={cn(
                        "stroke-neutral-300 dark:stroke-neutral-800"
                      )}
                    >
                      <rect
                        width={cell}
                        height={cell}
                        x={coordinate.x}
                        y={coordinate.y}
                        className={cn("fill-neutral-200 dark:fill-neutral-900")}
                      />
                      <text
                        width={cell}
                        height={cell}
                        x={coordinate.x}
                        y={coordinate.y}
                        dx={cell / 2}
                        dy={cell / 2}
                        style={{ fontSize: "0.2rem" }}
                        alignmentBaseline="central"
                        textAnchor="middle"
                        stroke="none"
                        fill="currentColor"
                        className={cn("uppercase", "font-bold")}
                      >
                        {w}
                      </text>
                    </g>
                  );
                })}

                <text
                  width={cell}
                  height={cell}
                  x={(item.start.x - 1) * cell + 1}
                  y={(item.start.y - 1) * cell + 1}
                  alignmentBaseline="hanging"
                  style={{ fontSize: "0.1rem" }}
                  className={cn(
                    item.direction === "horizontal"
                      ? "fill-green-600"
                      : "fill-red-600"
                  )}
                >
                  {i + 1}{" "}
                  {item.direction === "horizontal" ? <>&rarr;</> : <>&darr;</>}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </GridContainer>
    </div>
  );
}
