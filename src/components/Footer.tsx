import { cn } from "@/libs/utils";

export default function Footer() {
    return (
        <footer className={cn("px-3 lg:px-12")}>
            <div
                data-layout="fluid"
                className={cn("p-2 px-3 lg:p-4", "border-x", "min-h-[33.33vh]")}
            >
                Footer
            </div>
        </footer>
    );
}
