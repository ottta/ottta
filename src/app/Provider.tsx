"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider as ProviderTheme } from "next-themes";
import ProviderGrid from "@/components/_context/ContextGrid";

export default function Provider(props: PropsWithChildren) {
    const { children } = props;

    return (
        <ProviderTheme
            enableSystem
            disableTransitionOnChange
            defaultTheme="system"
            themes={["dark", "light"]}
        >
            <ProviderGrid>{children}</ProviderGrid>
        </ProviderTheme>
    );
}
