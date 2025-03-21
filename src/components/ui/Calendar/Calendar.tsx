import { useRef } from "react";
import CalendarIcon from "../../../assets/icons/CalendarIcon";

interface CalendarProps {
  name: string;
  onChange: (name: string, value: string) => void;
}

const Calendar = ({ name, onChange }: CalendarProps) => {
  const dateRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center">
      <input
        onChange={(e) => onChange(name, e.target.value)}
        ref={dateRef}
        type="date"
        className="h-[22px] rounded-[2px] px-1 bg-white appearance-none focus:outline-none w-17 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
      />
      <button
        className="ml-1"
        type="button"
        onClick={() => dateRef.current?.showPicker()}
      >
        <CalendarIcon />
      </button>
    </div>
  );
};

export default Calendar;
