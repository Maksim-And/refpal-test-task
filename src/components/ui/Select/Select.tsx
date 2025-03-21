import { ChangeEvent, useState } from "react";
import { cn, setCardColor } from "../../../lib/utils";
import Card from "../Card/Card";

interface SelectProps {
  name: string;
  options: string[];
  label: string;
  isScale?: boolean;
  onChange?: (key: string, value: string) => void;
}

const Select = ({ name, options, label, isScale, onChange }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleClear = () => {
    onChange?.(name, "");
    setSelectedOption("");
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(name, e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-white mb-1">{label}</label>

      <div className="relative w-full">
        {selectedOption ? (
          <div className="bg-white h-[22px] flex items-center p-[px]">
            <div className="flex w-fit h-[20px] rounded-[2px] items-center bg-green-125 text-black px-2 ml-[2px]">
              {isScale ? (
                <Card
                  className={cn(
                    "w-[26px] h-[18px] text-[10px]",
                    setCardColor(Number(selectedOption)),
                  )}
                  border
                >
                  {selectedOption}
                </Card>
              ) : (
                selectedOption
              )}
              <div className="bg-black w-[1px] h-[50%] ml-1" />
              <button
                onClick={handleClear}
                className="ml-1 text-black text-[10px] font-semibold"
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <select
            onChange={handleChange}
            className="w-full h-[22px] bg-white text-black rounded-[2px] px-1 focus:outline-none appearance-none"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Select;
