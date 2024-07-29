import axios from "axios"
import { getCookie } from "cookies-next"
import { getCredentialUser } from "./login"
import { updateImageAvatar, postUser } from "./users"

const token = getCookie("token")

export const api = axios.create({
    baseURL: "/api",
    headers: {
        Authorization: token
    }
})

export {
    getCredentialUser,
    updateImageAvatar,
    postUser
}