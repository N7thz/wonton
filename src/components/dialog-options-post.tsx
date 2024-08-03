import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { twMerge } from "tailwind-merge"
import { DialogProps } from "@/@types"

export const DialogOptionsPost = ({
    trigger, className, children, title, description
}: DialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className={twMerge(
                "sm:max-w-[425px]",
                className
            )}>
                {
                    (title || description) &&
                    <DialogHeader>
                        {
                            title &&
                            <DialogTitle>{title}</DialogTitle>
                        }
                        {
                            description &&
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        }
                    </DialogHeader>
                }
                {children}
            </DialogContent>
        </Dialog>
    )
}