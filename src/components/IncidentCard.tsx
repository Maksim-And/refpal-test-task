import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import WhistleIcon from "../assets/icons/WhistleIcon";
import { cn, setMarkColor } from "../lib/utils";
import Card from "./ui/Card";

type IncidentCardProps = {
  playerName: string;
  count: number;
  description?: string;
  hasBackground?: boolean;
};

const IncidentCard = ({
  playerName,
  count,
  description,
  hasBackground,
}: IncidentCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-2 px-1 py-2 border-b border-gray-400 last:border-b-0",
        hasBackground && "bg-green-300",
      )}
    >
      <ArrowLeftIcon />
      <Card className={cn(setMarkColor(count))} border>
        {count}
      </Card>
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
