import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Textarea} from '../Common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../utils/validators/validators'
import React from "react";
import {NewMessageFormType} from "./Dialogs";

const maxLength50 = maxLengthCreator(50)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>
type PropsType = {}

const AddMessageForm : React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType>
    = (props) => {
  return (

        <form onSubmit={props.handleSubmit}>
            <div>
                {createField < NewMessageFormValuesKeysType > ('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
  )
}

export default reduxForm<NewMessageFormValuesType>({ form: 'dialog-add-message-form' })(AddMessageForm)
