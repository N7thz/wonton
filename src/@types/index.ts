import {
    ComponentProps,
    Dispatch,
    ReactNode,
    SetStateAction
} from "react"
import { FormLoginSchema, FormRegisterSchema } from "@/schemas"
import { User } from "@prisma/client"
import { z } from "zod"

export type FormLoginType = z.infer<typeof FormLoginSchema>
export type FormRegisterType = z.infer<typeof FormRegisterSchema>

export interface getCredentialUserResponse {
    token: string
    email: string
}

export interface ToasterProps extends ComponentProps<"div"> {
    toaster_title: string
    toaster_message: string
    variant: "default" | "destructive" | undefined
}


export interface DialogOptionsPostProps extends ComponentProps<"div"> {
    trigger: ReactNode
    title: string
    description?: string
}

export interface ContextProps {
    params: {
        id: string
    }
}

export interface SquareProps {
    id: string,
    isX: boolean
    isO: boolean
}