import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
import AnalogClock from "@/components/AnalogClock";

export default function Page() {
    return (
        <main className={cn("min-h-screen")}>
            <div className={cn("px-3 lg:px-12")}>
                <div
                    className={cn(
                        "fluid",
                        "mx-auto",
                        "lg:grid grid-cols-6 lg:grid-cols-12",
                        "border-x",
                        "grid-flow-dense",
                        "bg-neutral-100 dark:bg-neutral-900"
                    )}
                >
                    <div
                        className={cn(
                            "col-span-6",
                            "row-start-1 row-span-3",
                            "-mb-px",
                            "p-4",
                            "border-b",
                            "z-10"
                        )}
                    >
                        <div
                            className={cn("text-3xl lg:text-7xl", "aspect-[2/0.5] lg:aspect-[2/1]")}
                        >
                            <Typewriter />
                        </div>
                    </div>

                    <div
                        style={{ fontFeatureSettings: `"pnum"` }}
                        className={cn(
                            "col-span-6",
                            "row-start-1 lg:row-start-1",
                            "row-span-4 lg:row-span-4",
                            "lg:border-l",
                            "flex items-center justify-center",
                            "lg:h-[calc(100vh-6rem)]",
                            "max-lg:border-t",
                            "p-12"
                        )}
                    >
                        <AnalogClock />
                    </div>

                    <div
                        className={cn(
                            "col-span-6",
                            "row-start-4 row-span-1",
                            "grid grid-cols-6",
                            "lg:divide-x"
                        )}
                    >
                        <div
                            className={cn(
                                "col-span-2",
                                "p-4",
                                "max-lg:hidden",
                                "flex items-center"
                            )}
                        >
                            <div
                                className={cn(
                                    "aspect-square w-full",
                                    "border",
                                    "rounded-full",
                                    "bg-red-100"
                                )}
                            />
                        </div>
                        <div
                            className={cn(
                                "col-span-6 lg:col-span-4",
                                "p-3 lg:p-4",
                                "flex items-center"
                            )}
                        >
                            <p
                                className={cn(
                                    "text-xl lg:text-3xl",
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
            </div>
            <Experience />
        </main>
    );
}
