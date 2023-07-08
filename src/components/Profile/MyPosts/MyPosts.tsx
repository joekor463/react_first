import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import AddPostForm from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";


export type AddPostFormValuesType = {
    newPostText: string
}

export type MapPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

export type DispatchPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    console.log("Render")
    let postElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My posts </h3>
                <AddPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts);






export default MyPostsMemorized