import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "02d6f766-8c16-4095-9a09-109c03632d0e"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            })
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        })
}