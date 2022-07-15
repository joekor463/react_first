import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>)
}

export default Profile;