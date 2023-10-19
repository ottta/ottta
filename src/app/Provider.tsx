"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider as ProviderTheme } from "next-themes";
import ProviderGrid from "@/components/_context/ContextGrid";
import ProviderAgent from "@/components/_context/ContextAgent";

type ProviderProps = PropsWithChildren & { agent: string | null };

export default function Provider(props: ProviderProps) {
    const { children, agent } = props;
    return (
        <ProviderTheme
            enableSystem
            disableTransitionOnChange
            defaultTheme="system"
            themes={["dark", "light"]}
        >
            <ProviderAgent agent={agent}>
                <ProviderGrid>{children}</ProviderGrid>
            </ProviderAgent>
        </ProviderTheme>
    );
}
