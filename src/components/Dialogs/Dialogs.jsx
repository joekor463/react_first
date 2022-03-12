import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

/*
        let dialogs = [
            {id: 1, name: 'Joe'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Sofi'},
            {id: 4, name: 'Kristy'},
            {id: 5, name: 'Anton'}
        ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up?'},
        {id: 3, message: 'Where are you?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'We in submarine'}
    ]
*/

        let dialogsElement = props.state.dialogs.
            map( d => <DialogItem name={d.name} id={d.id}/> );

        let messagesElements = props.state.messages.
            map( m => <Message message = {m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

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