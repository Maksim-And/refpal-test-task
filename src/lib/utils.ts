import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCardColor(value: number) {
  switch (value) {
    case 0:
      return "bg-[#fff]";
    case 1:
      return "bg-[#d7d5da]";
    case 2:
      return "bg-gradient-to-r from-[#d7d5da] to-[#c4c234]";
    case 3:
      return "bg-gradient-to-r from-[#ccc51d] to-[#f6f90e]";
    case 4:
      return "bg-gradient-to-r from-[#f7f91c] to-[#f8fa17]";
    case 5:
      return "bg-[#f2610a]";
    case 6:
      return "bg-[#f81603]";
    default:
      return "bg-[#fff]";
  }
}
