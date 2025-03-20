import { useState } from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusSquared from "../assets/icons/PlusSquared";
import StarIcon from "../assets/icons/StarIcon";
import Triangle from "../assets/icons/TriangleIcon";
import { cn, setMarkColor } from "../lib/utils";
import Button from "./ui/Button";
import Checkbox from "./Checkbox";
import IncidentCard from "./IncidentCard";
import Input from "./ui/Input";
import Marks from "./ui/Marks";
import Filters from "./Filters";
import VideoSection from "./VideoSection";

const Statistics = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <tr className="bg-green-125">
      <td colSpan={12} className="p-1">
        <div className="p-1 bg-green-100 flex flex-col md:gap-x-5 md:flex-row">
          <section className="flex-1">
            <div className="flex items-center gap-x-1">
              <StarIcon color="#e09139" className="border-none" />
              <h2 className="font-bold text-[#e09139] text-sm">
                Official answer:
              </h2>
            </div>
            <Marks hasMarker marksCount={7} />
            <Checkbox />
            <div className="flex gap-x-1 mt-1">
              <span className="font-bold text-green-450">
                VAR intervention:
              </span>
              <PlusSquared />
            </div>
            <div className="bg-green-300 p-1 mt-1 pb-3 relative">
              <div className="flex items-center mt-1 border w-fit">
                {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={num}
                    className={cn(
                      "w-8 h-6 pt-[2px] text-center border-r last:border-r-0",
                      setMarkColor(num),
                    )}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="absolute top-7 left-20">
                <Triangle />
              </div>
              <Checkbox />
            </div>
            <div className="flex gap-x-2 items-center mt-1 mb-1">
              <span className="font-bold text-green-450">
                Similar incident:
              </span>
              <Input hasBorder className="w-7 bg-[#eaf3ed] mr-3" />
              <Input hasBorder className="w-7 bg-[#eaf3ed]" />
            </div>
            <div className="bg-white p-1">
              <p className="leading-3">
                Samasel vlisil olukorda minek on vastase suhtes hoolimatu.
                Teisest kollasest kaardist paastab tosisema kontalti puudumine.
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-x-2 mt-3">
                <Button label="Save" hasIcon />
                <Button label="Save and next" hasIcon />
                <a href="#" className="text-green-700 underline ml-1 mt-1">
                  Recent history
                </a>
              </div>
              <div className="mt-2 bg-[#c6e2cc] px-1">
                <MinusIcon />
              </div>
            </div>
          </section>
          <section className="flex-1">
            <IncidentCard playerName="Alev Ain" count={1} />
            <IncidentCard
              hasBackground
              description="Samasel vlisil olukorda minek on vastase suhtes hoolimatu.
                Teisest kollasest kaardist paastab tosisema kontalti puudumine."
              playerName="Alev Ain"
              count={2}
            />
            <IncidentCard hasBackground playerName="Alev Ain" count={3} />
            <IncidentCard playerName="Alev Ain" count={4} />
            <IncidentCard
              count={1}
              hasBackground
              description="Samasel vlisil olukorda minek on vastase suhtes hoolimatu.
                Teisest kollasest kaardist paastab tosisema kontalti puudumine."
              playerName="Alev Ain"
            />
            <IncidentCard
              count={1}
              description="Samasel vlisil olukorda minek on vastase suhtes hoolimatu.
                Teisest kollasest kaardist paastab tosisema kontalti puudumine."
              playerName="Alev Ain"
            />
          </section>
        </div>
        <section>
          <div className="flex justify-between mt-2">
            <span className="text-green-350 font-bold text-sm">
              Similar incidents
            </span>
            <button
              onClick={handleToggleFilter}
              className="bg-green-350 text-white rounded-t-sm px-2 mr-1"
            >
              filter / sort
            </button>
          </div>
          <Filters isOpen={isFilterOpen} />
          <div className="w-full bg-white p-1">
            <VideoSection />
          </div>
        </section>
      </td>
    </tr>
  );
};

export default Statistics;
