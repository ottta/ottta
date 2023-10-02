"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider as ProviderTheme } from "next-themes";

export default function Provider(props: PropsWithChildren) {
    const { children } = props;

    return (
        <ProviderTheme
            enableSystem
            disableTransitionOnChange
            defaultTheme="system"
            themes={["dark", "light"]}
        >
            {children}
        </ProviderTheme>
    );
}
