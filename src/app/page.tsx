"use client"

import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import { useState } from "react"

export default function Home() {

  const [itemSelected, setItemSelected] = useState<number | null>(null)

  const squares = Array.from({ length: 9 })

  function teste(index: number) {
    setItemSelected(index)
  }

  return (
    <div
      className="h-screenCalc flex items-center justify-center bg-background"
    >
      <Card
        className="bg-foreground border-none w-1/2 h-2/3 grid grid-cols-3 grid-rows-3 gap-2"
      >
        {
          squares.map((_, index) =>
            <div
              key={index}
              className="size-full bg-background flex justify-center items-center"
              onClick={() => teste(index)}
            >
              {
                (index === itemSelected) &&
                <X className="size-10/12" />
              }
            </div>
          )
        }
      </Card>
    </div>
  )
}
