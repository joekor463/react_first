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
            ]
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id : 5,
                message : this._state.profilePage.newPostText,
                likesCount : 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store = store;