import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement =  state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody =  state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
        //props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        //props.store.dispatch(updateNewMessageBodyCreator(body));
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
                <div>
                    <textarea value={newMessageBody}
                              onChange={ onNewMessageChange }
                              placeholder='Enter your message'>
                    </textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;