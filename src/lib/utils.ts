import { SquareProps } from "@/@types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const squaresObject: SquareProps[] = [
  {
    id: "1",
    isX: false,
    isO: false
  },
  {
    id: "2",
    isX: false,
    isO: false
  },
  {
    id: "3",
    isX: false,
    isO: false
  },
  {
    id: "4",
    isX: false,
    isO: false
  },
  {
    id: "5",
    isX: false,
    isO: false
  },
  {
    id: "6",
    isX: false,
    isO: false
  },
  {
    id: "7",
    isX: false,
    isO: false
  },
  {
    id: "8",
    isX: false,
    isO: false
  },
  {
    id: "9",
    isX: false,
    isO: false
  }
]
