import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>)
}

export default Profile;