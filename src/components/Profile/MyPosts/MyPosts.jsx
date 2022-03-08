import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '11'},
        {id: 3, message: 'Where are you?',  likesCount : '5'},
        {id: 4, message: 'Whats going on?',  likesCount : '8'},
        {id: 5, message: 'We in submarine',  likesCount : '3'}
    ]

    let postElements = posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

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
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;