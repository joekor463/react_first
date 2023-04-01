import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount : 12},
        {id: 2, message: 'Proba pera',  likesCount : 11},
        {id: 3, message: 'Where are you?',  likesCount : 5},
        {id: 4, message: 'Whats going on?',  likesCount : 8},
        {id: 5, message: 'We in submarine',  likesCount : 3}
    ] as Array<PostType>,
    profile : null as ProfileType | null,
    status : "",
    newPostText : ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return {...state,  profile: {...state.profile, photos: action.photos} as ProfileType}
        }

        default:
            return state;
    }

}
type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type : ADD_POST, newPostText})
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type : SET_USER_PROFILE, profile})
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:  string) => ({type : SET_STATUS, status})
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost= (postId: number): DeletePostActionType=> ({type : DELETE_POST, postId})
type SavePhotoSoccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess= (photos: PhotosType) => ({type : SAVE_PHOTO_SUCCESS, photos})




export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));

}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {

        try {
            let response = await profileAPI.updateStatus(status)
            if  (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch(error){

        }

}

export const savePhoto = (file: any) => async (dispatch: any) => {
        let response = await profileAPI.savePhoto(file)

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export const saveProfile = (profile: ProfileType) => async(dispatch: any, getState: any) => {
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