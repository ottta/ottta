import CrossWord from "@/components/CrossWord";
import { cn } from "@/libs/utils";

export default function Header() {
    return (
        <header
            className={cn(
                "h-16 lg:h-12",
                "border-y",
                "sticky top-0",
                "z-50",
                "px-3 lg:px-12",
                "bg-neutral-50/90 dark:bg-neutral-950/90"
            )}
        >
            <div
                className={cn(
                    "fluid",
                    "h-full",
                    "flex items-center justify-between",
                    "border-x",
                    "px-3 lg:px-4"
                )}
            >
                <CrossWord sentence="+62 Studio" className="font-bold" />
                <div>EN&nbsp;—&nbsp;ID</div>
            </div>
        </header>
    );
}
