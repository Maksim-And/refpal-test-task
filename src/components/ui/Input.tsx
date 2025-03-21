import { cn } from "../../lib/utils";

type InputProps = {
  name?: string;
  hasBorder?: boolean;
  label?: string;
  className?: string;
  onChange?: (key: string, value: string) => void;
};

const Input = ({ name, label, hasBorder, className, onChange }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-white mb-[2px]">{label}</label>}
      <input
        onChange={(e) => onChange?.(name ?? "", e.target.value)}
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
