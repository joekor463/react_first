import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import handleSubmit, {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement =  state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody =  state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArldmHJgfTrDAVzIHFUMMM4uOuWzGPhi2_Q&usqp=CAU'/>
                     {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;