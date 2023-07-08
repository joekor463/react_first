import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import AddMessageForm from "./AddMessageForm";
import {InitialStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props ) => {

    let state = props.dialogsPage;

    let dialogsElement =  state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);



    let addNewMessage = (values: {newMessageBody: string}) => {
        props.sendMessage(values.newMessageBody);
    }




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