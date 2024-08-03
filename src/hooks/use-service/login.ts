import { FormLoginType, loginUserResponse } from "@/@types"
import { AxiosResponse } from "axios"
import { api } from "."

export function loginUser(data: FormLoginType): Promise<AxiosResponse<loginUserResponse>> {

    const url = "/login"

    return api.post(url, data)
}