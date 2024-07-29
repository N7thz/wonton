import { z } from "zod"

export const FormLoginSchema = z.object({
    email: z.string()
        .email({
            message: "Invalid email"
        })
        .max(255, {
            message: "text is much large"
        }),
    password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        })
})

export const FormRegisterSchema = z.object({
    email: z.string()
        .email({
            message: "Invalid email"
        })
        .max(255, {
            message: "text is much large"
        }),
    password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        }),
    confirm_password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        })
})