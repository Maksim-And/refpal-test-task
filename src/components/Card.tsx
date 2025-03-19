import ArrowDownIcon from "../assets/icons/ArrowDown";
import { cn } from "../lib/utils";

type CardProps = {
  children: React.ReactNode;
  iconPosition?: "bottom";
  className?: string;
  border?: boolean;
};
const Card = ({ children, iconPosition, className, border }: CardProps) => {
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
    </div>
  );
};

export default Card;
