const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '11'},
        {id: 3, message: 'Where are you?',  likesCount : '5'},
        {id: 4, message: 'Whats going on?',  likesCount : '8'},
        {id: 5, message: 'We in submarine',  likesCount : '3'}
    ],
    newPostText: 'Marak'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST :
            let newPost = {
                id : 5,
                message : state.newPostText,
                likesCount : 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type : ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({  type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;