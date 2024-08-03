"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Eye, EyeOff, XCircle } from "lucide-react"
import { FormRegisterType } from "@/@types"
import { FormRegisterSchema } from "@/schemas"
import { useRouter } from "next/navigation"
import { Toaster } from "./toaster"
import { postUser } from "@/hooks/use-service"
import { twMerge } from "tailwind-merge"

export const FormRegister = () => {

    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    const { push } = useRouter()

    const Icon = isVisible ? Eye : EyeOff

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormRegisterType>({
        resolver: zodResolver(FormRegisterSchema)
    })

    const password = watch("password")
    const confirm_password = watch("confirm_password")

    const isNotSamePasswords = password !== confirm_password
    const isPasswordsExist = password && confirm_password

    function registerUser(data: FormRegisterType) {

        const { email, password } = data

        if (isNotSamePasswords) return

        postUser({ email, password })
            .then(res => {
                const { status } = res

                if (status === 200) {
                    push("/login")
                }
            })
            .catch(() => {
                setIsError(true)
                setTimeout(() => setIsError(false), 2000)
            })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(registerUser)}
                className="w-1/3"
            >
                <Card className="drop-shadow-2xl ">
                    <CardHeader>
                        <CardTitle>
                            Register
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label className="mb-2">Email</Label>
                            <Input {...register("email")} />
                            {
                                errors.email &&
                                <span className="mt-2 text-destructive">
                                    {errors.email.message}
                                </span>
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="mb-2">Password</Label>
                            <div className="relative">
                                <Input
                                    type={isVisible ? "password" : "text"}
                                    className={twMerge(
                                        (!isNotSamePasswords && isPasswordsExist) &&
                                        "border border-green-500"
                                    )}
                                    {...register("password")}
                                />
                                <Icon
                                    className="absolute top-[34%] right-2 size-4"
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            </div>
                            {
                                errors.password &&
                                <span className="mt-2 text-destructive">
                                    {errors.password.message}
                                </span>
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="mb-2">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    type={isVisible ? "password" : "text"}
                                    className={twMerge(
                                        (!isNotSamePasswords && isPasswordsExist) &&
                                        "border border-green-500"
                                    )}
                                    {...register("confirm_password")}
                                />
                                <Icon
                                    className="absolute top-[34%] right-2 size-4"
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            </div>
                            {
                                errors.confirm_password &&
                                <span className="mt-2 text-destructive">
                                    {errors.confirm_password.message}
                                </span>
                            }
                        </div>
                        {
                            isNotSamePasswords &&
                            <span className="m-2 text-destructive">
                                {"Passwords are not the same"}
                            </span>
                        }
                        <div className="w-full flex justify-end">
                            <Button
                                type="submit"
                                disabled={isNotSamePasswords}
                                className={twMerge(
                                    "hover:bg-violet-600",
                                    "disabled:cursor-not-allowed"
                                )}
                            >
                                Confirm
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
            {
                isError &&
                <Toaster
                    variant="destructive"
                    toaster_title="Error"
                    toaster_message="Admin already exist"
                    className="absolute bottom-4 right-4"
                >
                    <XCircle />
                </Toaster>
            }
        </>
    )
}
