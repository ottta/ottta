import { cn } from "@/libs/utils";

import GridContainer from "@/components/Utils/GridContainer";

export default function NotFound() {
  return (
    <GridContainer className={cn("min-h-[calc(100vh-6rem)]")}>
      Not Found
    </GridContainer>
  );
}
