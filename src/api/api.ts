import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "02d6f766-8c16-4095-9a09-109c03632d0e"
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}