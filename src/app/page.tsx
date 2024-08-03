"use client"

import { DialogOptionsPost } from "@/components/dialog-options-post"
import { Button } from "@/components/ui/button"
import { 
  Card, CardHeader, CardTitle, CardFooter, CardContent 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shapes } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Home() {

  const pathname = usePathname()
  const url = ""

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="flex flex-col gap-5">
        <CardHeader>
          <CardTitle>
            Wonton Game
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Shapes size={200} />
        </CardContent>
        <CardFooter className="flex gap-4">
          <DialogOptionsPost
            trigger={
              <Button>
                Start Room
              </Button>
            }
          >
            <Label>
              Room Link:
            </Label>
            <Input
              readOnly
              defaultValue={url}
            />
          </DialogOptionsPost>
          <Button>
            Join a Room
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
