import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={"textarea"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

AddNewPostForm = reduxForm ({form:"ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText );
    }

    return (
         <div className={s.postBlock}>
             <h3>My posts </h3>
             <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts