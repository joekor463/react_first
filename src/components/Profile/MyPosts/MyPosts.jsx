import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
                <form onSubmit={<props className="handleSubmit"></props>}>
                    <div>
                        <Field name="newPostText" component={TextArea} placeholder={"Post message"}
                               validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            </form>;
}

let AddNewPostFormRedux = reduxForm({
        form: 'ProfileAddNewPostForm'
    })(AddNewPostForm);

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText );
    }

    return (
         <div className={s.postBlock}>
             <h3>My posts </h3>
             <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts