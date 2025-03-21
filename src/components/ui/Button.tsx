import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import { cn } from "../../lib/utils";

type ButtonProps = {
  label: string;
  hasIcon?: boolean;
  className?: string;
  onClick?: () => void;
};
const Button = ({ label, hasIcon, className, onClick }: ButtonProps) => {
  return (
    <div
      className={cn(
        "flex gap-x-2 items-center bg-green-700 px-2 py-1 w-fit text-white rounded-md cursor-pointer",
        className,
      )}
    >
      <button onClick={onClick} className="cursor-pointer mb-[1px]">
        {label}
      </button>
      {hasIcon && <ArrowRightIcon />}
    </div>
  );
};

export default Button;
