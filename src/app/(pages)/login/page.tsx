import { Metadata } from "next"
import { FormLogin } from "@/components/form-login"

export const metadata: Metadata = {
    title: "wonton | Login",
}

export default function Page() {
    return (
        <div
            className="min-h-screenCalc flex items-center justify-center bg-background"
        >
            <FormLogin />
        </div>
    )
}
