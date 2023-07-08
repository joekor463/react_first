import {GetItemType, instance} from "./api";



export const  usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<GetItemType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend) === null ? '': `&friend=${friend}`)
            .then(responce => {
                return responce.data;
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }

}