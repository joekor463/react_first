//import {InferActionsType} from "./redux-store";




import {InferActionsTypes} from "./redux-store";

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




const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'SN/DIALOGS/SEND-MESSAGE' : {
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


export const actions =  {
    sendMessage : (newMessageBody: string) => ({type : 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

