import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

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

        let dialogsElement = dialogs.
            map( d => <DialogItem name={d.name} id={d.id}/> );

        let messagesElements = messages.
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