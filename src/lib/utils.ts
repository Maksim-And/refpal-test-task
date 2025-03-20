import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCardColor(value: number) {
  const colors: Record<number, string> = {
    0: "bg-white",
    1: "bg-[#d7d5da]",
    2: "bg-gradient-to-r from-[#d7d5da] to-[#c4c234]",
    3: "bg-gradient-to-r from-[#ccc51d] to-[#f6f90e]",
    4: "bg-gradient-to-r from-[#f7f91c] to-[#f8fa17]",
    5: "bg-[#f2610a]",
    6: "bg-[#f81603]",
  };

  return colors[value] || "bg-white";
}

export const setMarkColor = (value: number) => {
  const colors: Record<number, string> = {
    1: "bg-white",
    2: "bg-gradient-to-r from-[#fff] to-[#e56237]",
    3: "bg-gradient-to-r from-[#db4f1b] to-[#e31c0e]",
    4: "bg-[#fc1104]",
  };

  return colors[value] || "bg-white";
};
