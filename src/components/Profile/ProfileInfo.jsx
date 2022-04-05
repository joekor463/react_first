import s from "./Profile.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://interier-foto.ru/wp-content/uploads/2014/11/chuja6369.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
        </div>

    )
}

export default ProfileInfo;
