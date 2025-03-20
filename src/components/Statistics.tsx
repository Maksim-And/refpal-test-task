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

type PlayerStatistic = {
  playerName: string;
  countShort: number;
  countDefault: number;
  description: string;
  hasBackground: boolean;
  isShort: boolean;
  isNotAvailable: boolean;
};

type StatisticsProps = {
  playersStatistic: PlayerStatistic[] | undefined | null;
};

const Statistics = ({ playersStatistic }: StatisticsProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [details, setDetails] = useState<"short" | "default">("default");
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
            <div
              onClick={() => setDetails("default")}
              className={cn("p-1", details === "default" && "bg-green-300")}
            >
              <Marks hasMarker marksCount={7} />
              <Checkbox />
              <div className="flex gap-x-1 mt-1">
                <span className="font-bold text-green-450">
                  VAR intervention:
                </span>
                <PlusSquared />
              </div>
            </div>

            <div
              onClick={() => setDetails("short")}
              className={cn(
                "p-1 mt-1 pb-3 relative border-b border-b-transparent",
                details === "short" && "bg-green-300",
                details === "default" && "border-b border-b-green-300",
              )}
            >
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
            <div className="flex gap-x-2 items-center mb-3 mt-2">
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
            {!playersStatistic && (
              <p className="text-red font-bold">No statistics</p>
            )}
            {playersStatistic?.map((player, index) => {
              const commonProps = {
                playerName: player.playerName,
                description: player.description,
                hasBackground: player.hasBackground,
                details: details,
                isNotAvailable: player.isNotAvailable,
              };

              return details === "default" ? (
                <IncidentCard
                  {...commonProps}
                  key={index}
                  countDefault={player.countDefault}
                />
              ) : (
                <IncidentCard
                  {...commonProps}
                  key={index}
                  countShort={player.countShort}
                />
              );
            })}
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
