import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
import AnalogClock from "@/components/AnalogClock";

export default function Page() {
    return (
        <main className={cn("min-h-screen")}>
            {/* <div className={cn("h-6 lg:h-12", "border-b", "-mb-px")} /> */}
            <div className={cn("px-3 lg:px-12")}>
                <div
                    className={cn(
                        "w-full max-w-screen-3xl",
                        "mx-auto",
                        "grid grid-cols-6 lg:grid-cols-12",
                        "border-x",
                        "grid-flow-dense"
                    )}
                >
                    <div className={cn("col-span-6 row-start-1", "-mb-px", "p-4", "border-b")}>
                        <div
                            className={cn("text-3xl lg:text-5xl", "aspect-[2/0.5] lg:aspect-[2/1]")}
                        >
                            <Typewriter />
                        </div>
                    </div>

                    <div
                        style={{ fontFeatureSettings: `"pnum"` }}
                        className={cn(
                            "col-span-6",
                            "row-start-3 lg:row-start-1",
                            "row-span-1 lg:row-span-2",
                            "lg:border-l",
                            "lg:-ml-px",
                            // "flex items-center lg:items-start justify-center",
                            "lg:h-[calc(100vh-6rem+1px)]",
                            "bg-neutral-200 dark:bg-neutral-900",
                            "max-lg:border-t"
                        )}
                    >
                        <AnalogClock />
                    </div>

                    <div className={cn("col-span-6", "lg:row-start-2", "p-4")}>
                        <p
                            className={cn(
                                "text-3xl lg:text-2xl",
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
            </div>
            <Experience />
        </main>
    );
}
