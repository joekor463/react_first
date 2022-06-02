import s from "./Profile.module.css";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                avatar + description
            </div>
        </div>

    )
}

export default ProfileInfo;
