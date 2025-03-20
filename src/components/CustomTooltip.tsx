import * as Tooltip from "@radix-ui/react-tooltip";
import Marks from "./ui/Marks";
import Card from "./ui/Card";

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
            <p className="font-bold">Evaluations: 54</p>
            <Marks marksCount={7} />
            <div className="flex font-bold justify-end">
              {[2, 42, 9, 1].map((count, i) => (
                <span key={i} className="text-center w-8 h-6">
                  {count}
                </span>
              ))}
            </div>
            <span className="text-[10px]">
              10% lowest & highest marks excluded
            </span>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
