import { cn } from "../../../lib/utils";

interface TeamCardProps {
  image: string;
  teamName: string;
  textPosition: "left" | "right";
  className?: string;
}

const TeamCard = ({
  textPosition,
  image,
  teamName,
  className,
}: TeamCardProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {textPosition === "left" && (
        <p className={cn("text-white font-bold", className)}>{teamName}</p>
      )}

      <img src={image} alt="club image" className="w-6 h-6" />
      {textPosition === "right" && (
        <p className={cn("text-white font-bold", className)}>{teamName}</p>
      )}
    </div>
  );
};

export default TeamCard;
