import { Metadata } from "next"
import { FormRegister } from "@/components/form-register"

export const metadata: Metadata = {
    title: "wonton | Register",
}

export default function Page() {
    return (
        <div
            className="min-h-screenCalc flex items-center justify-center bg-background"
        >
            <FormRegister />
        </div>
    )
}
