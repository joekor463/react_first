let rerenderEntireTree = () => {
    console.log('state is changed');
}


let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id : 5,
        message : state.profilePage.newPostText,
        likesCount : 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    //state.profilePage.newPostText = '';
    //(state);
}

    export let updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
        };

    export const subscribe = (observer) => {
    
    }


export default state;