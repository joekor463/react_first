import s from "./Profile.module.css";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader />
    }

    return (
        <div>
                    {/*<div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />

               <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>

    )
}

export default ProfileInfo;
