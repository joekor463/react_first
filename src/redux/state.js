import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage : {
            posts : [
                {id: 1, message: 'Hi, how are you?', likesCount : '12'},
                {id: 2, message: 'Proba pera',  likesCount : '11'},
                {id: 3, message: 'Where are you?',  likesCount : '5'},
                {id: 4, message: 'Whats going on?',  likesCount : '8'},
                {id: 5, message: 'We in submarine',  likesCount : '3'}
            ],
            newPostText: 'Marak'
        },
        dialogPage : {
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
        },
        sidebar : {}
    },
    _callSubscriber  () {
        console.log('state changed');},
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){// {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
export default store;

window.store = store;