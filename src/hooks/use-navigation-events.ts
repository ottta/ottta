"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type UseNavigationEventsProps = {
    action: () => void;
};

export default function useNavigationEvents(props: UseNavigationEventsProps) {
    const { action } = props;
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const oldUrl = useRef(`${pathname}?${searchParams}`);
    const oldHash = useRef<string | null>(null);

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        if (url !== oldUrl.current || oldHash.current !== window.location.hash) {
            oldUrl.current = url;
            oldHash.current = window.location.hash;
            action();
        }
    }, [pathname, searchParams, action, oldUrl, oldHash]);

    return null;
}
