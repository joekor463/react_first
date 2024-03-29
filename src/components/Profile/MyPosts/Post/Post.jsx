import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94afZQIGT9vTsfYlodOh_jsmujU4YBDCU8Q&usqp=CAU'/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post;