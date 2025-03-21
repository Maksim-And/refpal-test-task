import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import MessageIcon from "../../../assets/icons/MessageIcon";
import { cn } from "../../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  iconPosition?: "bottom";
  className?: string;
  border?: boolean;
  hasMessage?: boolean;
}
const Card = ({
  children,
  iconPosition,
  className,
  border,
  hasMessage,
}: CardProps) => {
  return (
    <div className="relative flex flex-col items-center gap-y-1">
      <span
        className={cn(
          "block bg-white w-[28px] px-[2px] text-center font-bold",
          className,
          border && "border border-black",
        )}
      >
        {children}
      </span>

      {iconPosition === "bottom" && <ArrowDownIcon className="" />}
      {hasMessage && (
        <div className="absolute right-[1px] -top-1">
          <MessageIcon />
        </div>
      )}
    </div>
  );
};

export default Card;
