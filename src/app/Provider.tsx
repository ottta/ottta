"use client";

import { ThemeProvider as ProviderTheme } from "next-themes";
import type { PropsWithChildren } from "react";

import ProviderAgent from "@/components/_context/ContextAgent";
import ProviderGrid from "@/components/_context/ContextGrid";

type ProviderProps = PropsWithChildren & { agent: string | null };

export default function Provider(props: ProviderProps) {
  const { children, agent } = props;
  return (
    <ProviderTheme
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
      themes={["dark", "light"]}
      // forcedTheme="dark"
    >
      <ProviderAgent agent={agent}>
        <ProviderGrid>{children}</ProviderGrid>
      </ProviderAgent>
    </ProviderTheme>
  );
}
