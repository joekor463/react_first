

const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs : [
        {id: 1, name: 'Joe'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Sofi'},
        {id: 4, name: 'Kristy'},
        {id: 5, name: 'Anton'}
    ] as Array<DialogType>,
    messages : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up?'},
        {id: 3, message: 'Where are you?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'We in submarine'}
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SEND_MESSAGE : {
            let body = action.newMessageBody;
            return {
                ...state,
                messages : [...state.messages, {id: 6, message: body}]
            };

        }
        default :
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string) => ({type : SEND_MESSAGE, newMessageBody})


export default dialogsReducer;