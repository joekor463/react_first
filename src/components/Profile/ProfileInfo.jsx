import s from "./Profile.module.css";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
    if(!profile){
        return <Preloader />
    }

    const onMyPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
                    {/*<div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                { isOwner && <input type={"file"} onChange={onMyPhotoSelected}/> }
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>

    )
}

export default ProfileInfo