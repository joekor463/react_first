import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  (
        <div>
            <div>
                <img src='https://interier-foto.ru/wp-content/uploads/ozero-v-gorax.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>)
}

export default Profile;