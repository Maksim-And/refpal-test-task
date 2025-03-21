import Triangle from "../../../assets/icons/TriangleIcon";
import { cn, setCardColor } from "../../../lib/utils";

interface MarksProps {
  hasMarker?: boolean;
  marksCount: number;
}

const Marks = ({ hasMarker, marksCount }: MarksProps) => {
  return (
    <div className="relative">
      <div className="flex items-center mt-1 border w-fit">
        {Array.from({ length: marksCount }, (_, i) => i).map((num) => (
          <div
            key={num}
            className={cn(
              "w-8 h-6 pt-[2px] text-center border-r last:border-r-0",
              setCardColor(num),
            )}
          >
            {num}
          </div>
        ))}
      </div>
      {hasMarker && (
        <div className="absolute -bottom-1 left-35">
          <Triangle />
        </div>
      )}
    </div>
  );
};

export default Marks;
