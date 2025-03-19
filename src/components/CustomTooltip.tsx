import * as Tooltip from "@radix-ui/react-tooltip";
import Card from "./Card";
import { cn, setCardColor } from "../lib/utils";

export const CustomTooltip = ({ mark }: { mark: number }) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <td className="p-1 text-center cursor-default">
            <Card border>{mark}</Card>
          </td>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-white shadow-lg p-1 border"
            side="top"
            align="center"
          >
            <div className="font-bold">Evaluations: 54</div>
            <div className="flex items-center mt-1 border">
              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className={cn(
                    "w-7 h-6 text-center border-r last:border-r-0",
                    setCardColor(num),
                  )}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="flex font-bold justify-end">
              {[2, 42, 9, 1].map((count, i) => (
                <span key={i} className="text-center w-7 h-6">
                  {count}
                </span>
              ))}
            </div>
            <div className="text-[10px]">
              10% lowest & highest marks excluded
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
