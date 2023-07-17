// @ts-ignore
import {profileAPI, usersAPI} from "../api/api";
// @ts-ignore
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type PostType = {
    id: number
    message: string
    likesCount: string
}

type ProfileType = {
    id: number
    message: string
    likesCount: string
}



let initialState = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '11'},
        {id: 3, message: 'Where are you?',  likesCount : '5'},
        {id: 4, message: 'Whats going on?',  likesCount : '8'},
        {id: 5, message: 'We in submarine',  likesCount : '3'}
    ] as Array<PostType>,
    profile : null as ProfileType | null,
    status : ""
};

const profileReducer = (state = initialState, action: any) => {
    switch(action.type){
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ''
            };
        }

        case SET_STATUS : {
            return {
                ...state,
                status : action.status
            };
        }
        case SET_USER_PROFILE : {
            return {...state, profile : action.profile}
        }
        case DELETE_POST : {
            // @ts-ignore
            return {...state, posts: state.posts.filtered(p=>p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS : {
            // @ts-ignore
            return {...state,  profile: {...state.profile, photos: action.photos}}
        }

        default:
            return state;
    }

}
export const addPostActionCreator = (newPostText: any) => ({type : ADD_POST, newPostText})
export const setUserProfile = (profile: any) => ({type : SET_USER_PROFILE, profile})
export const setStatus = (status: any) => ({type : SET_STATUS, status})
export const deletePost= (postId: any) => ({type : DELETE_POST, postId})
export const savePhotoSuccess= (photos: any) => ({type : SAVE_PHOTO_SUCCESS, photos})




export const getUserProfile = (userId: any) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: any) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }

export const updateStatus = (status: any) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if  (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {

    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response  = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const responce = await profileAPI.saveProfile(profile);
    //debugger;
        if (responce.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: responce.data.messages[0]}));
            return Promise.reject(responce.data.messages[0]);
        }
}

export default profileReducer;