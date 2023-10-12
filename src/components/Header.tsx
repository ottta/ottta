import { cn } from "@/libs/utils";

export default function Header() {
    return (
        <header
            className={cn(
                "h-16 lg:h-12",
                "border-b",
                "sticky top-0",
                "z-50",
                "px-3 lg:px-12",
                "bg-neutral-50 dark:bg-neutral-950"
            )}
        >
            <div
                className={cn(
                    "h-full",
                    "flex items-center justify-between",
                    "border-x",
                    "w-full max-w-screen-3xl",
                    "mx-auto",
                    "px-4"
                )}
            >
                <div className={cn("font-bold")}>Taufik Oktama</div>
                <div>EN — ID</div>
            </div>
        </header>
    );
}
