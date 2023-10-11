import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
// import ContainerFluid from "@/components/Containers/ContainerFluid";
import AnalogClock from "@/components/AnalogClock";

export default function Page() {
    return (
        <main className={cn("min-h-screen")}>
            <div className={cn("h-6", "border-b", "-mb-px")} />
            <div
                className={cn(
                    "w-full max-w-7xl",
                    "mx-auto",
                    "px-6 lg:px-12",
                    "grid grid-cols-6 lg:grid-cols-12",
                    "-my-px"
                )}
            >
                <div
                    className={cn(
                        "col-span-6 row-start-1",
                        "border",
                        "-mb-px",
                        "p-4",
                        "lg:aspect-[2/1]"
                    )}
                >
                    {/* <div className={cn("text-9xl", "font-bold")}>Hi,</div> */}
                    <div className={cn("text-3xl lg:text-5xl")}>
                        <Typewriter />
                    </div>
                </div>

                <div
                    style={{ fontFeatureSettings: `"pnum"` }}
                    className={cn(
                        "col-span-6",
                        "overflow-hidden",
                        "p-4",
                        "border",
                        "row-start-2 lg:row-start-1 row-span-2",
                        "lg:aspect-square",
                        "max-lg:-mb-px",
                        "lg:-ml-px"
                    )}
                >
                    <AnalogClock />
                </div>

                <div
                    className={cn(
                        "border",
                        "col-span-6",
                        "lg:row-start-2",
                        "p-4",
                        "lg:aspect-[2/1]"
                    )}
                >
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

            {/* <div className={cn("h-6", "border-y")} /> */}

            <Experience />
        </main>
    );
}
