import { cn } from "@/libs/utils";

export default function Page() {
    return (
        <div className={cn("px-3 lg:px-12")}>
            <div
                data-layout="fluid"
                className={cn(
                    "border-x",
                    "min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-6rem)]",
                    "p-3 lg:p-4"
                )}
            >
                About
            </div>
        </div>
    );
}
