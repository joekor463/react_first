import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

        let dialogsElement = props.state.dialogs.
            map( d => <DialogItem name={d.name} id={d.id} /> );

        let messagesElements = props.state.messages.
            map( m => <Message message = {m.message}/>)

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
            </div>
        </div>
    )
}

export default Dialogs;