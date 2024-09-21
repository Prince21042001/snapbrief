import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getCoinsFromAmount = (amount: number): number => {
  console.log(amount);
  switch (amount) {
    case 5:
      return 100;
    case 10:
      return 210;
    case 20:
      return 520;
    default:
      return 0;
  }
};