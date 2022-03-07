import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '27'},
        {id: 3, message: 'Where are you?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'We in submarine'}
    ]

    return (
         <div className={<s className="postBlock"></s>}>
             <h3>My posts </h3>
             <div>
                 <div>
                     <textarea></textarea>
                 </div>
                 <div>
                     <button>Add post</button>
                 </div>
             </div>
            <div className={s.posts}>
                <Post message = {postData[0].message} likesCount = {postData[0].likesCount}/>
                <Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;