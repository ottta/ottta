import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import AnalogClock from "@/components/AnalogClock";

export default function Hero() {
    return (
        <div className={cn("px-3 lg:px-12", "border-y", "-mt-px")}>
            <div
                className={cn(
                    "fluid",
                    "mx-auto",
                    "lg:grid grid-cols-6 lg:grid-cols-12",
                    "border-x",
                    "grid-flow-dense",
                    "max-lg:divide-y lg:divide-x"
                )}
            >
                <div
                    className={cn(
                        "col-span-6",
                        "grid lg:auto-rows-fr",
                        "lg:divide-y",
                        "max-lg:bg-neutral-200 max-lg:dark:bg-neutral-900"
                    )}
                >
                    <div
                        className={cn(
                            "p-4",
                            "text-5xl lg:text-6xl",
                            "max-lg:aspect-[3/1]",
                            "max-lg:text-center"
                            // "max-lg:bg-rose-500 max-lg:dark:bg-rose-600"
                        )}
                    >
                        <Typewriter />
                    </div>
                    <div className={cn("grid grid-cols-6", "lg:divide-x")}>
                        <div
                            className={cn(
                                "max-lg:hidden",
                                "col-span-3",
                                "p-4",
                                "flex items-center"
                            )}
                        >
                            <div
                                className={cn(
                                    "text-rose-500 dark:text-rose-600",
                                    "bg-rose-300 dark:bg-rose-800",
                                    "aspect-square w-full",
                                    "border border-current",
                                    "rounded-full",
                                    "overflow-hidden"
                                )}
                            />
                        </div>
                        <div
                            className={cn(
                                "col-span-6 lg:col-span-3",
                                "p-3 lg:p-4",
                                "flex items-center"
                            )}
                        >
                            <p
                                className={cn(
                                    "text-2xl lg:text-3xl",
                                    "w-full",
                                    "italic",
                                    "hyphens-auto",
                                    "font-serif",
                                    "max-lg:text-center"
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

                <div
                    style={{ fontFeatureSettings: `"pnum"` }}
                    className={cn(
                        "col-span-6",
                        "flex items-center justify-center",
                        "lg:min-h-[calc(100vh-6rem)]",
                        "lg:p-12"
                    )}
                >
                    <AnalogClock />
                </div>
            </div>
        </div>
    );
}
