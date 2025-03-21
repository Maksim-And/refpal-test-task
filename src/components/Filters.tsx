import { ChangeEvent } from "react";
import Button from "./ui/Button";
import Calendar from "./ui/Calendar";
import Input from "./ui/Input";
import Select from "./ui/Select";

const TOPIC_OPTIONS = [
  "Select a topic",
  "Severity",
  "Priority",
  "Category",
  "Status",
];

const SUBTOPIC_OPTIONS = ["Select a subtopic", "Studs directed high"];

const SCALE_OPTIONS = ["Select a scale", "0", "1", "2", "3", "4", "5", "6"];

type FiltersProps = {
  isOpen: boolean;
  onFilterChange: (key: string, value: string) => void;
  applyFilters: () => void;
};

const Filters = ({ isOpen, applyFilters, onFilterChange }: FiltersProps) => {
  const onSortByDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("byDate", e.target.value);
    onFilterChange("sortBy", "desc");
  };

  const onSortDecrisingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("decreasing", e.target.value);
    onFilterChange("sortBy", "asc");
  };

  return (
    isOpen && (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-green-350 pb-1">
        <div className="p-3">
          <Input name="season" label="Season:" onChange={onFilterChange} />
          <Select
            name="topic"
            label="Topic:"
            options={TOPIC_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3">
          <span className="text-white mb-[2px] block">From dates:</span>
          <div className="flex items-center justify-between">
            <Calendar name="fromDate" onChange={onFilterChange} />{" "}
            <div className="text-white">-</div>{" "}
            <Calendar name="toDate" onChange={onFilterChange} />
          </div>
          <Select
            name="subtopic"
            label="Subtopic:"
            options={SUBTOPIC_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3 ">
          <Input name="team" label="Team:" onChange={onFilterChange} />
          <Select
            name="scale"
            isScale
            label="Scale:"
            options={SCALE_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3 flex flex-col gap-y-[18px]">
          <Input name="referee" label="Referee:" onChange={onFilterChange} />
          <Button onClick={applyFilters} label="Search" hasIcon />
        </div>
        <div className="pt-3 px-3 pb-1 flex flex-col relative">
          <div className="absolute inset-y-0 left-0 w-[1px] h-[90%] lg:bg-white top-1/2 transform -translate-y-1/2"></div>
          <span className="text-white mb-[2px] block">Sort:</span>
          <select
            onChange={onSortByDateChange}
            className="bg-white h-[22px] rounded-[2px] focus:outline-none mb-[6px]"
          >
            <option value="">Default</option>
            <option value="byDate">By date</option>
          </select>
          <select
            onChange={onSortDecrisingChange}
            className="bg-white h-[22px] rounded-[2px] focus:outline-none"
          >
            <option value="">Default</option>
            <option value="decreasing">Decreasing</option>
          </select>
          <Button
            onClick={applyFilters}
            label="Sort"
            hasIcon
            className="ml-auto mt-1"
          />
        </div>
      </div>
    )
  );
};

export default Filters;
