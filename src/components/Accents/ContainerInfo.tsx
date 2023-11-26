import { cn } from "@/libs/utils";

type ContainerUnit = {
  entity: string;
  values: { value: number; unit: "LB" | "KG" | "CU.FT" | "CU.M" }[];
};

const units: ContainerUnit[] = [
  {
    entity: "Max.Gw",
    values: [
      { unit: "LB", value: 67200 },
      { unit: "KG", value: 30480 }
    ]
  },
  {
    entity: "Tare",
    values: [
      { unit: "LB", value: 8510 },
      { unit: "KG", value: 9860 }
    ]
  },
  {
    entity: "Max.Cw",
    values: [
      { unit: "LB", value: 58690 },
      { unit: "KG", value: 26620 }
    ]
  },
  {
    entity: "CU.FT",
    values: [
      { unit: "CU.FT", value: 2389 },
      { unit: "CU.M", value: 67.7 }
    ]
  }
];

export function ContainerInfo() {
  return (
    <div
      className={cn(
        "p-4",
        "h-1/2",
        "bg-neutral-950 dark:bg-neutral-200",
        "text-neutral-50 dark:text-neutral-950",
        "font-mono uppercase",
        "leading-none",
        "flex items-center"
      )}
    >
      <ul className={cn("w-full")}>
        {units.map((item, i) => (
          <li key={i} className={cn("grid grid-cols-6", "items-center")}>
            <div
              className={cn(
                "col-span-3",
                "text-8xl",
                "overflow-hidden whitespace-nowrap text-ellipsis"
              )}
            >
              {item.entity}
            </div>
            <div className={cn("col-span-3")}>
              {item.values.map((item, i) => (
                <div
                  key={i}
                  className={cn("grid grid-cols-3", "gap-4", "text-4xl")}
                >
                  <div />
                  <div
                    className={cn(
                      "text-right",
                      "overflow-hidden whitespace-nowrap text-ellipsis"
                    )}
                  >
                    {item.value}
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden whitespace-nowrap text-ellipsis"
                    )}
                  >
                    {item.unit}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
