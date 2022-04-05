import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>)
}

export default Profile;