import React from 'react';
import users from "../components/Users/UsersContainer";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    usersId : null,
    email : null,
    login :  null,
    isFetching: false,
    isAuth : false
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :
            
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login) => ({type : SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(responce => {
            if (responce.data.resultCode == 0) {
                let {id, login, email} = responce.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
};

export default authReducer;