import { cn } from "@/libs/utils";

export default function BarBottom() {
    return (
        <div
            className={cn(
                "h-16 lg:h-12",
                "border-t",
                "fixed bottom-0 right-0 left-0",
                "bg-neutral-50/90 dark:bg-neutral-950/90",
                "z-50",
                "px-3 lg:px-12"
            )}
        >
            <div className={cn("fluid", "border-x", "h-full", "flex items-center", "px-3 lg:px-4")}>
                <div>Instagram</div>
            </div>
        </div>
    );
}
