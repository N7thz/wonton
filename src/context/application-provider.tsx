"use client"

import { api } from "@/hooks/use-service"
import { User } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, createContext, useContext } from "react"

interface ApplicationContextProps {
    user?: User
}

const ApplicationContext = createContext({} as ApplicationContextProps)

export function ApplicationProvider({ children }: { children: ReactNode }) {

    const { data: user } = useQuery({
        queryKey: ["get-authorization"],
        queryFn: async () => {

            const url = "/get-authorization"

            const response: User = await api
                .get(url)
                .then(res => res.data)
                .catch(err => console.log(err))

            return response
        }
    })

    const value: ApplicationContextProps = { user }

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const useApplication = () => useContext(ApplicationContext)