import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return  (
        <div>
            <div className={s.postBlock}>
                <h3>My posts </h3>
                <div className={s.posts}>
                    {postElements}
                </div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
        </div>
    )
}
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form : "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;