import { cn } from "@/libs/utils";

export default function BarBottom() {
    return (
        <div
            className={cn(
                "h-16 lg:h-12",
                "border-t",
                // "sticky bottom-0",
                "fixed bottom-0 right-0 left-0",
                "bg-neutral-50 dark:bg-neutral-950",
                "z-50",
                "px-3 lg:px-12"
            )}
        >
            <div
                className={cn(
                    "border-x",
                    "w-full max-w-screen-3xl",
                    "h-full",
                    "mx-auto",
                    "flex items-center",
                    "px-4"
                )}
            >
                <div>Instagram</div>
            </div>
        </div>
    );
}
