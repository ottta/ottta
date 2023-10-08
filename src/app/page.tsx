import { cn } from "@/libs/utils";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";

export default function Page() {
    return (
        <main className={cn("min-h-screen", "w-full max-w-6xl", "mx-auto px-8")}>
            <div
                className={cn(
                    "h-screen",
                    "flex flex-col",
                    "justify-between",
                    "pt-8 lg:pt-24 pb-24",
                    "font-serif"
                )}
            >
                <div>
                    <div className={cn("text-9xl", "font-bold")}>Hi,</div>

                    <div className={cn("text-3xl lg:text-5xl", "overflow-hidden", "py-8")}>
                        <Typewriter />
                    </div>
                </div>

                <p
                    className={cn(
                        "text-3xl lg:text-4xl",
                        "w-full max-w-2xl",
                        "italic",
                        "hyphens-auto"
                    )}
                >
                    <q>
                        A Designer turned Software Developer. Now run <strong>Unforma Club</strong>,
                        and develop typography product <strong>Truetype Supply:</strong> for{" "}
                        <strong>Type Designers &amp; Foundries</strong>.
                    </q>
                </p>
            </div>

            <Experience />
        </main>
    );
}
