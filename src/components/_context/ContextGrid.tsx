"use client";

import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";

type ContextGridAttr = {
    grid: boolean;
    toggleGrid: () => void;
};

type ProviderGridProps = PropsWithChildren<{}>;

export const ContextGrid = createContext<ContextGridAttr>(undefined!);

export const ConsumerGrid = ContextGrid.Consumer;
export default function ProviderGrid(props: ProviderGridProps) {
    const { children } = props;
    const [grid, setGrid] = useState(false);

    const toggleGrid = () => setGrid((prev) => !prev);

    const handler = useCallback(
        (e: globalThis.KeyboardEvent) => {
            if (e.altKey && e.metaKey && e.code === "KeyG") {
                setGrid((prev) => !prev);
                console.log("Grid: ", grid);
            }
        },
        [grid]
    );

    useEffect(() => {
        document.body.addEventListener("keydown", handler);
        return () => document.body.removeEventListener("keydown", handler);
    }, [handler]);

    return <ContextGrid.Provider value={{ grid, toggleGrid }}>{children}</ContextGrid.Provider>;
}
