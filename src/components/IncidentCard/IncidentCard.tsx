import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import WhistleIcon from "../../assets/icons/WhistleIcon";
import { cn, setCardColor, setMarkColor } from "../../lib/utils";
import Card from "../ui/Card/Card";

interface IncidentCardProps {
  playerName: string;
  details: "short" | "default";
  countShort?: number;
  countDefault?: number;
  description?: string;
  hasBackground?: boolean;
  isNotAvailable?: boolean;
}

const IncidentCard = ({
  playerName,
  countShort,
  countDefault,
  details,
  description,
  hasBackground,
  isNotAvailable,
}: IncidentCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-2 px-1 py-2 border-b border-gray-400 last:border-b-0",
        hasBackground && "bg-green-300",
      )}
    >
      <ArrowLeftIcon />
      <Card
        className={cn(
          details === "short"
            ? setMarkColor(countShort)
            : setCardColor(countDefault),
        )}
        border
      >
        {details === "short" ? countShort : countDefault}
      </Card>
      {details === "default" && (
        <div className="w-5 mt-[2px]">
          {isNotAvailable && (
            <Card border className="h-[16px] text-[10px]">
              NO
            </Card>
          )}
        </div>
      )}
      <span className="font-bold">{playerName}</span>
      <div className="ml-auto">
        <WhistleIcon />
      </div>
      {description && (
        <span className="w-full mt-1 leading-3">{description}</span>
      )}
    </div>
  );
};

export default IncidentCard;
