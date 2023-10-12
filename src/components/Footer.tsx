import { cn } from "@/libs/utils";

export default function Footer() {
    return (
        <footer className={cn("px-3 lg:px-12")}>
            <div
                className={cn(
                    "w-full max-w-screen-3xl",
                    "mx-auto",
                    "p-4",
                    "border-x",
                    "min-h-[33.33vh]"
                )}
            >
                Footer
            </div>
        </footer>
    );
}
