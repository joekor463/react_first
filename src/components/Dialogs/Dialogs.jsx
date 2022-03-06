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
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Joe" id="1"/>
                    <DialogItem name="Anton" id="2"/>
                    <DialogItem name="Sofi" id="3"/>
                    <DialogItem name="Kristy" id="4"/>
                    <DialogItem name="Unknow" id="5"/>

                </div>
                <div className={s.messages}>
                    <Message message = "Hello"/>
                    <Message message = "What's up?"/>
                    <Message message = "Where are you?"/>
                    <Message message = "What's going on?"/>
                    <Message message = "We in submarine"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;