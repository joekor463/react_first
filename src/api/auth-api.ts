import {instance, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

type ResponseType<D = {}, RC = ResultCodeEnum > = {
    data: D
    messages: Array<string>
    resultCode: RC
}

type MePesponseDataType = {
    data: {
        id: number
        email: string
        login: string
    }
}

type LoginResponseDataType = {
    data: {
        userId: number

    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<ResponseType<MePesponseDataType>>('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseDataType, ResultCodeEnum |  ResultCodeForCaptcha>>('auth/login', {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}