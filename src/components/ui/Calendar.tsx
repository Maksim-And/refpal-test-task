import { useRef } from "react";
import CalendarIcon from "../../assets/icons/CalendarIcon";

const Calendar = () => {
  const dateRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center">
      <input
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
