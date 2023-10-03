import { cn } from "@/libs/utils";
import Experience from "@/components/Experience";
import Typewriter from "@/components/Typewriter";

export default function Page() {
    return (
        <main className={cn("min-h-screen", "w-full max-w-6xl", "mx-auto px-8")}>
            <div className={cn("grid lg:grid-cols-12", "gap-4", "pt-24", "items-end")}>
                <div className={cn("col-span-3")}>
                    <div className={cn("text-9xl", "font-bold")}>Hi,</div>
                </div>
            </div>
            <div className={cn("text-5xl", "h-[33.33vh]", "overflow-hidden", "py-12")}>
                <Typewriter />
            </div>

            <p className={cn("text-2xl", "w-full max-w-2xl")}>
                Designer turned Software Developer. Now run Unforma Club, and built Truetype Supply
                a software as a service for Type Designer &amp; Foundry.
            </p>

            <Experience />
        </main>
    );
}
