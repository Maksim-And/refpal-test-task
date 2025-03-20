import { cn } from "../../lib/utils";

type InputProps = {
  hasBorder?: boolean;
  label?: string;
  className?: string;
};

const Input = ({ label, hasBorder, className }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-white mb-[2px]">{label}</label>}
      <input
        type="text"
        className={cn(
          "bg-white rounded-[2px] focus:outline-none h-[22px]",
          hasBorder && "border-2 border-[#a8b4ab]",
          className,
        )}
      />
    </div>
  );
};

export default Input;
