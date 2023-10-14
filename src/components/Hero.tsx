import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import AnalogClock from "@/components/AnalogClock";

export default function Hero() {
    return (
        <div className={cn("px-3 lg:px-12", "border-t", "-mt-px")}>
            <div
                className={cn(
                    "fluid",
                    "mx-auto",
                    "lg:grid grid-cols-6 lg:grid-cols-12",
                    "border-x",
                    "grid-flow-dense",
                    // "max-lg:min-h-[calc(100vh-8rem)] overflow-hidden",
                    "max-lg:divide-y lg:divide-x"
                )}
            >
                <div
                    className={cn(
                        "col-span-6",
                        "grid auto-rows-fr",
                        "divide-y",
                        "justify-between",
                        "max-lg:min-h-[calc(50vh-4rem)]"
                    )}
                >
                    <div className={cn("grid grid-cols-6", "lg:divide-x")}>
                        <div className={cn("col-span-2 lg:col-span-3", "p-4", "flex items-center")}>
                            <div
                                className={cn(
                                    "aspect-square w-full",
                                    "border",
                                    "rounded-full",
                                    "bg-red-100",
                                    "overflow-hidden"
                                    // "grayscale"
                                )}
                            >
                                {/* <NextImage alt="Taufik Oktama" src={profilePhoto} /> */}
                            </div>
                        </div>
                        <div
                            className={cn(
                                "col-span-4 lg:col-span-3",
                                "p-3 lg:p-4",
                                "flex items-center"
                            )}
                        >
                            <p
                                className={cn(
                                    "text-md lg:text-3xl",
                                    "w-full",
                                    "italic",
                                    "hyphens-auto",
                                    "font-serif"
                                )}
                            >
                                <q>
                                    A Designer turned Software Developer. Now run{" "}
                                    <strong>Unforma Club</strong>, and develop typography product{" "}
                                    <strong>Truetype Supply:</strong> for{" "}
                                    <strong>Type Designers &amp; Foundries</strong>.
                                </q>
                            </p>
                        </div>
                    </div>

                    <div className={cn("p-4")}>
                        <div
                            className={cn(
                                "text-3xl lg:text-7xl"
                                // "aspect-square lg:aspect-[2/1]"
                            )}
                        >
                            <Typewriter />
                        </div>
                    </div>
                </div>

                <div
                    style={{ fontFeatureSettings: `"pnum"` }}
                    className={cn(
                        "col-span-6",
                        "flex items-center justify-center",
                        "lg:min-h-[calc(100vh-6rem)]",
                        "p-12"
                    )}
                >
                    <AnalogClock />
                </div>
            </div>
        </div>
    );
}

// const variants = {
//     start: {
//         d: "M16 46, H32, V32, H46, V16, H32, V2, H16, V16, H2, V32, H16, Z"
//     },
//     end: {
//         d: "M16 46, H46, V46, H46, V2, H46, V2, H2, V2, H2, V32, H16, Z"
//     }
// };

// return (
//     <div className={cn("px-3 lg:px-12")}>
//         <div
//             data-layout="fluid"
//             className={cn(
//                 "h-[calc(100vh-6rem+1px)]",
//                 "border-b border-x",
//                 "flex items-center justify-start"
//             )}
//         >
//             <motion.svg
//                 viewBox="0 0 48 48"
//                 width={480}
//                 height={480}
//                 // className={cn("border")}
//                 stroke="black"
//                 fill="transparent"
//                 strokeWidth={0.3}
//                 initial="start"
//                 whileHover="end"
//             >
//                 <motion.path variants={variants} />
//             </motion.svg>
//         </div>
//     </div>
// );
