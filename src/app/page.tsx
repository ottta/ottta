import { cn } from "@/libs/utils";
import Experience from "@/components/Experience";
import Typewriter from "@/components/Typewriter";

export default function Page() {
    return (
        <main className={cn("min-h-screen", "w-full max-w-6xl", "mx-auto px-4 lg:px-8")}>
            <div
                className={cn(
                    "h-screen",
                    "flex flex-col",
                    "justify-between",
                    "pt-8 lg:pt-24 pb-24"
                )}
            >
                <div>
                    <div className={cn("text-9xl", "font-bold")}>Hi,</div>

                    <div
                        className={cn(
                            "text-3xl lg:text-5xl",
                            "h-[33.33vh]",
                            "overflow-hidden",
                            "py-8"
                        )}
                    >
                        <Typewriter />
                    </div>
                </div>

                <p
                    className={cn(
                        "text-3xl lg:text-4xl",
                        "w-full max-w-2xl",
                        // "mb-12",
                        "font-serif",
                        "italic"
                    )}
                >
                    <q>
                        A Designer turned Software Developer. Now run <strong>Unforma Club</strong>,
                        and develop typography products such a <strong>Truetype Supply</strong>{" "}
                        software as a service for <strong>Type Designer &amp; Type Foundry</strong>.
                    </q>
                </p>
            </div>

            <Experience />
        </main>
    );
}
