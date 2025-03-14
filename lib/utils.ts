import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formateNumberWithDecimals = (num: number): string => {
  const [int,decimal] = num.toString().split(".")
  return decimal ? `${int}.${decimal.slice(0,2)}` : int
}
//PROMT: [chatGTP] create toSlug ts arrow function that convert text to lowercase, remove non-word, non-whitespace, non-hyphen characters, replace whitespace, trim leading hypens and trim trailing hypens

export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/\s+/g, "-")
}
