import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <div
            className="w-full h-14 flex items-center justify-end pr-3"
        >
            <ModeToggle />
        </div>
    )
}
