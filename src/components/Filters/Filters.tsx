import { ChangeEvent } from "react";
import {
  SCALE_OPTIONS,
  SUBTOPIC_OPTIONS,
  TOPIC_OPTIONS,
} from "../../constants";
import { FilterValues } from "../../types";
import Button from "../ui/Button/Button";
import Calendar from "../ui/Calendar/Calendar";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";

interface FiltersProps {
  isOpen: boolean;
  onFilterChange: (key: string, value: string) => void;
  applyFilters: () => void;
}

const Filters = ({ isOpen, applyFilters, onFilterChange }: FiltersProps) => {
  const onSortByDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(FilterValues.ByDate, e.target.value);
    onFilterChange(FilterValues.SortBy, FilterValues.Desc);
  };

  const onSortDecrisingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(FilterValues.Decreasing, e.target.value);
    onFilterChange(FilterValues.SortBy, FilterValues.Asc);
  };

  return (
    isOpen && (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-green-350 pb-1">
        <div className="p-3">
          <Input
            name={FilterValues.Season}
            label="Season:"
            onChange={onFilterChange}
          />
          <Select
            name={FilterValues.Topic}
            label="Topic:"
            options={TOPIC_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3">
          <span className="text-white mb-[2px] block">From dates:</span>
          <div className="flex items-center justify-between">
            <Calendar name={FilterValues.FromDate} onChange={onFilterChange} />{" "}
            <div className="text-white">-</div>{" "}
            <Calendar name={FilterValues.ToDate} onChange={onFilterChange} />
          </div>
          <Select
            name={FilterValues.Subtopic}
            label="Subtopic:"
            options={SUBTOPIC_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3 ">
          <Input
            name={FilterValues.Team}
            label="Team:"
            onChange={onFilterChange}
          />
          <Select
            name={FilterValues.Scale}
            isScale
            label="Scale:"
            options={SCALE_OPTIONS}
            onChange={onFilterChange}
          />
        </div>
        <div className="p-3 flex flex-col gap-y-[18px]">
          <Input
            name={FilterValues.Referee}
            label="Referee:"
            onChange={onFilterChange}
          />
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
