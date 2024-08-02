"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Circle, X } from "lucide-react"
import { SquareProps } from "@/@types"
import { squaresObject } from "@/lib/utils"

export const GameRoom = () => {

    const [activePlayer, setActivePlayer] = useState<"X" | "O">("X")
    const [squares, setSquares] = useState<SquareProps[]>(squaresObject)

    console.log(squares)

    function changeStateSquare(square: SquareProps, i: number) {

        if (activePlayer === "X") {
            square.isX = true
            setActivePlayer("O")
        } else {
            square.isO = true
            setActivePlayer("X")
        }

        const newSquares = [...squares]

        newSquares[i] = square

        setSquares(newSquares)
    }

    return (
        <div
            className="h-screenCalc flex items-center justify-center bg-background"
        >
            <Card
                className="bg-foreground border-none w-1/2 h-2/3 grid grid-cols-3 grid-rows-3 gap-2"
            >
                {
                    squares.map((square, index) => {

                        const { id, isO, isX } = square

                        return (
                            <div
                                key={id}
                                className="size-full bg-background flex justify-center items-center cursor-pointer"
                                onClick={() => changeStateSquare(square, index)}
                            >
                                {isX && <X className="size-10/12" />}
                                {isO && <Circle className="size-10/12" />}
                            </div>
                        )
                    })
                }
            </Card>
        </div>
    )
}
