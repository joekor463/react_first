import React from 'react';
import users from "../components/Users/UsersContainer";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    usersId : null,
    email : null,
    login :  null,
    isFetching: false,
    isAuth : false,
    captchaUrl : null // if null, then captcha not required
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :
        case GET_CAPTCHA_URL_SUCCESS :
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type : SET_USER_DATA, payload:
        {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type : GET_CAPTCHA_URL_SUCCESS, payload:
        {captchaUrl}
});


export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(responce => {
            if (responce.data.resultCode == 0) {
                let {id, login, email} = responce.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};



export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const responce = await authAPI.login(email, password, rememberMe, captcha)

            if (responce.data.resultCode == 0) {
                //success, get auth data
                dispatch(getAuthUserData())
            }  else {
                if (responce.data.resultCode == 10) {
                    dispatch(getCaptchaUrl())
                }
                let message = responce.data.messages.length > 0 ? responce.data.messages [0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}));
            }

};

export const getCaptchaUrl = () => async (dispatch) => {
    const responce = await securityAPI.getCaptchaUrl()
    const captchaUrl = responce.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode == 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;