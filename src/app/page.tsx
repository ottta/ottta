import Typewriter from "@/components/Typewriter";
import { cn } from "@/libs/utils";

export default function Page() {
    return (
        <main className={cn("min-h-screen", "w-full max-w-7xl", "mx-auto px-4")}>
            <div className={cn("text-9xl", "font-bold", "my-24")}>Hi,</div>
            <Typewriter />
        </main>
    );
}
