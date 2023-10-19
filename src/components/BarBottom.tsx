"use client";

import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import useAgent from "@/hooks/use-agent";

type CustomLink = {
    label: string;
    icon: ReactNode;
    link: LinkProps;
};

const links: CustomLink[] = [
    {
        label: "Home",
        link: { href: "/" },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className={cn("w-6 aspect-square")}
            >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
        )
    },
    {
        label: "Blog",
        link: { href: "/blog" },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className={cn("w-6 aspect-square")}
            >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z" />
            </svg>
        )
    },
    {
        label: "History",
        link: { href: "/work" },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className={cn("w-6 aspect-square")}
            >
                <path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
            </svg>
        )
    },
    {
        label: "Profile",
        link: { href: "/about" },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className={cn("w-6 aspect-square")}
            >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
        )
    }
];

function BarLink(item: CustomLink) {
    const pathname = usePathname();

    const isActive =
        item.link.href.toString() === "/"
            ? pathname === item.link.href.toString()
            : pathname.startsWith(item.link.href.toString());

    return (
        <li className={cn("col-span-2")}>
            <NextLink
                {...item.link}
                data-active={isActive}
                className={cn(
                    "flex flex-col items-center justify-center",
                    "h-full",
                    isActive ? "text-current" : "text-neutral-400 dark:text-neutral-700"
                )}
            >
                {item.icon}
                <div className={cn("text-xs")}>{item.label}</div>
            </NextLink>
        </li>
    );
}

export default function BarBottom() {
    const { isMobile, isSafari } = useAgent();

    return (
        <div
            className={cn(
                "h-16 lg:h-12",
                "border-t",
                isSafari && "lg:border-b",
                "fixed bottom-0 right-0 left-0",
                "bg-neutral-50/90 dark:bg-neutral-950/90",
                "z-50",
                "px-3 lg:px-12",
                "backdrop-blur-sm"
            )}
        >
            {isMobile ? (
                <ul
                    className={cn(
                        "lg:hidden",
                        "grid grid-flow-col auto-cols-fr",
                        "h-full",
                        "divide-x",
                        "border-x"
                    )}
                >
                    {links.map((item, i) => (
                        <BarLink key={i} {...item} />
                    ))}
                </ul>
            ) : (
                <div
                    className={cn(
                        "fluid",
                        "border-x",
                        "h-full",
                        "flex items-center justify-between",
                        "px-3 lg:px-4",
                        "max-lg:hidden"
                    )}
                >
                    <div
                        className={cn(
                            "rounded-full",
                            "border",
                            "flex items-center",
                            "gap-x-1",
                            "pr-2 pl-1",
                            "bg-neutral-200 dark:bg-neutral-800"
                        )}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            height="1rem"
                            width="1rem"
                            fill="currentColor"
                        >
                            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                        </svg>
                        <div>Leeds, UK</div>
                    </div>

                    <ul className={cn("flex items-center", "gap-1")}>
                        {links.map((item, i) => (
                            <li key={i}>
                                <NextLink
                                    {...item.link}
                                    className={cn(
                                        "rounded-full",
                                        "border",
                                        "flex items-center",
                                        "px-2",
                                        "bg-neutral-200 dark:bg-neutral-800"
                                    )}
                                >
                                    {item.label}
                                </NextLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
