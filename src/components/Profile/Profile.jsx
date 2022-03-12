import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {



    return  (
        <div>
            <div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts posts={props.state.posts}/>
        </div>)
}

export default Profile;