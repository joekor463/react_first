import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {



    return  (
        <div>
            <div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>
            <div>
                avatar + description
            </div>

            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost = {props.addPost}
            />
        </div>)
}

export default Profile;