import { cn } from "@/libs/utils";

type Word = {
    word: string;
    direction: "vertical" | "horizontal";
    start: {
        x: number;
        y: number;
    };
};

const cell = 9;
const words: Word[] = [
    { word: "teologic", direction: "vertical", start: { x: 3, y: 1 } },
    { word: "font", direction: "horizontal", start: { x: 2, y: 5 } },
    { word: "scripting", direction: "horizontal", start: { x: 2, y: 8 } },
    { word: "next", direction: "vertical", start: { x: 6, y: 1 } },
    { word: "react", direction: "vertical", start: { x: 7, y: 4 } },
    { word: "true", direction: "horizontal", start: { x: 6, y: 4 } },
    { word: "design", direction: "vertical", start: { x: 9, y: 3 } },
    { word: "sudo", direction: "horizontal", start: { x: 9, y: 5 } },
    { word: "python", direction: "vertical", start: { x: 12, y: 1 } },
    { word: "type", direction: "horizontal", start: { x: 10, y: 1 } },
    { word: "percent", direction: "horizontal", start: { x: 2, y: 2 } },
    { word: "unreal", direction: "horizontal", start: { x: 11, y: 6 } },
    { word: "italic", direction: "horizontal", start: { x: 11, y: 3 } },
    { word: "lady", direction: "vertical", start: { x: 15, y: 5 } },
    { word: "bouyancy", direction: "horizontal", start: { x: 12, y: 8 } },
    { word: "coil", direction: "vertical", start: { x: 16, y: 3 } },
    { word: "infinity", direction: "vertical", start: { x: 19, y: 1 } },
    { word: "linen", direction: "horizontal", start: { x: 15, y: 5 } },
    { word: "mini", direction: "horizontal", start: { x: 16, y: 1 } }
];

export default function CrossWord() {
    return (
        <svg
            viewBox="0 0 171 72"
            className={cn(
                "h-full",
                "fill-neutral-50 dark:fill-neutral-950",
                "relative",
                "-mt-px -ml-px",
                "max-lg:hidden"
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
                <rect x="9" width="9" height="9" />
                <rect x="9" y="18" width="9" height="9" />
                <rect x="9" y="27" width="9" height="9" />
                <rect x="9" y="45" width="9" height="9" />
                <rect x="9" y="54" width="9" height="9" />
                <rect width="9" height="9" />
                <rect y="9" width="9" height="9" />
                <rect y="18" width="9" height="9" />
                <rect y="27" width="9" height="9" />
                <rect y="36" width="9" height="9" />
                <rect y="45" width="9" height="9" />
                <rect y="54" width="9" height="9" />
                <rect y="63" width="9" height="9" />
                <rect x="171" width="9" height="9" />
                <rect x="171" y="9" width="9" height="9" />
                <rect x="171" y="18" width="9" height="9" />
                <rect x="171" y="27" width="9" height="9" />
                <rect x="171" y="36" width="9" height="9" />
                <rect x="171" y="45" width="9" height="9" />
                <rect x="171" y="54" width="9" height="9" />
                <rect x="171" y="63" width="9" height="9" />
                <rect x="90" y="63" width="9" height="9" />
                <rect x="27" y="54" width="9" height="9" />
                <rect x="36" y="54" width="9" height="9" />
                <rect x="45" y="54" width="9" height="9" />
                <rect x="63" y="54" width="9" height="9" />
                <rect x="81" y="54" width="9" height="9" />
                <rect x="90" y="54" width="9" height="9" />
                <rect x="99" y="54" width="9" height="9" />
                <rect x="108" y="54" width="9" height="9" />
                <rect x="117" y="54" width="9" height="9" />
                <rect x="135" y="54" width="9" height="9" />
                <rect x="144" y="54" width="9" height="9" />
                <rect x="153" y="54" width="9" height="9" />
                <rect x="27" y="45" width="9" height="9" />
                <rect x="36" y="45" width="9" height="9" />
                <rect x="45" y="45" width="9" height="9" />
                <rect x="63" y="45" width="9" height="9" />
                <rect x="81" y="45" width="9" height="9" />
                <rect x="144" y="45" width="9" height="9" />
                <rect x="153" y="45" width="9" height="9" />
                <rect x="45" y="36" width="9" height="9" />
                <rect x="63" y="36" width="9" height="9" />
                <rect x="108" y="36" width="9" height="9" />
                <rect x="117" y="36" width="9" height="9" />
                <rect x="27" y="27" width="9" height="9" />
                <rect x="36" y="27" width="9" height="9" />
                <rect x="81" y="27" width="9" height="9" />
                <rect x="90" y="27" width="9" height="9" />
                <rect x="108" y="27" width="9" height="9" />
                <rect x="117" y="27" width="9" height="9" />
                <rect x="126" y="27" width="9" height="9" />
                <rect x="144" y="27" width="9" height="9" />
                <rect x="153" y="27" width="9" height="9" />
                <rect x="27" y="18" width="9" height="9" />
                <rect x="36" y="18" width="9" height="9" />
                <rect x="54" y="18" width="9" height="9" />
                <rect x="63" y="18" width="9" height="9" />
                <rect x="81" y="18" width="9" height="9" />
                <rect x="144" y="18" width="9" height="9" />
                <rect x="153" y="18" width="9" height="9" />
                <rect x="27" width="9" height="9" />
                <rect x="36" width="9" height="9" />
                <rect x="54" width="9" height="9" />
                <rect x="63" width="9" height="9" />
                <rect x="72" width="9" height="9" />
                <rect x="72" y="9" width="9" height="9" />
                <rect x="81" y="9" width="9" height="9" />
                <rect x="90" y="9" width="9" height="9" />
                <rect x="108" y="9" width="9" height="9" />
                <rect x="117" y="9" width="9" height="9" />
                <rect x="126" y="9" width="9" height="9" />
                <rect x="135" y="9" width="9" height="9" />
                <rect x="144" y="9" width="9" height="9" />
                <rect x="153" y="9" width="9" height="9" />
                <rect x="117" width="9" height="9" />
                <rect x="126" width="9" height="9" />
            </g>

            {words.map((item, i) => (
                <g key={i} name={item.word}>
                    {item.word.split("").map((w, index) => {
                        const x = item.start.x - 1;
                        const y = item.start.y - 1;
                        const coordinate = {
                            x: item.direction === "horizontal" ? (index + x) * cell : x * cell,
                            y: item.direction === "vertical" ? (index + y) * cell : y * cell
                        };
                        return (
                            <g
                                key={index}
                                data-content={w.toUpperCase()}
                                strokeWidth={0.1}
                                className={cn("stroke-neutral-300 dark:stroke-neutral-800")}
                            >
                                <rect
                                    width={cell}
                                    height={cell}
                                    x={coordinate.x}
                                    y={coordinate.y}
                                    fill="none"
                                />
                                <text
                                    width={cell}
                                    height={cell}
                                    x={coordinate.x}
                                    y={coordinate.y}
                                    dx={cell / 2}
                                    dy={cell / 2}
                                    style={{ fontSize: "0.3rem" }}
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    stroke="none"
                                    fill="currentColor"
                                    className={cn("uppercase", "font-light")}
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
                            item.direction === "horizontal" ? "fill-green-600" : "fill-red-600"
                        )}
                    >
                        {i + 1} {item.direction === "horizontal" ? <>&rarr;</> : <>&darr;</>}
                    </text>
                </g>
            ))}
        </svg>
    );
}
