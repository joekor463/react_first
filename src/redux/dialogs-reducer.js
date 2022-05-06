
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'Joe'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Sofi'},
        {id: 4, name: 'Kristy'},
        {id: 5, name: 'Anton'}
    ],
    messages : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up?'},
        {id: 3, message: 'Where are you?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'We in submarine'}
    ],
    newMessageBody : ""
};


const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY : {
            return {
                ...state,
                newMessageBody : action.body
            };

        }
        case SEND_MESSAGE : {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages : [...state.messages, {id: 6, message: body}]
            };

        }
        default :
            return state;
    }
}
export const sendMessageCreator = () => ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({  type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;