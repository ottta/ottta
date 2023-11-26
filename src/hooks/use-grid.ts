import { useContext } from "react";

import { ContextGrid } from "@/components/_context/ContextGrid";

export default function useGrid() {
  const grid = useContext(ContextGrid);

  if (!grid) throw Error("Must be inside <ProviderGrid />");
  return grid;
}
