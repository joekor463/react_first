import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return  <div className='content'>
        <div>
            <img src='https://interier-foto.ru/wp-content/uploads/ozero-v-gorax.jpg'/>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            My posts
            <div className='posts'>
                New post
            </div>
            <div>
                <div className={s.item}>
                    Post1
                </div>
                <div className={s.item}>
                    Post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;