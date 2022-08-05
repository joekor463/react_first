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
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type : SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, login, email} = responce.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;