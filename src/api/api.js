import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "02d6f766-8c16-4095-9a09-109c03632d0e"
    }
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            })
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        })
}