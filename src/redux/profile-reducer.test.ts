import profileReducer, {actions} from "./profile-reducer";
//import {ProfileType} from "../types/types";

let state = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '11'},
        {id: 3, message: 'Where are you?',  likesCount : '5'},
        {id: 4, message: 'Whats going on?',  likesCount : '8'},
        {id: 5, message: 'We in submarine',  likesCount : '3'}
    ],
    profile : null,
    status : "",
    newPostText: ""
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("Pirates!!!");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expecttion
   expect(newState.posts.length).toBe(5);

});

it('message of new post should be "Pirates!!!"', () => {
    // 1. test data
    let action = actions.addPostActionCreator("Pirates!!!");

    // 2. ction
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.posts[5].message).toBe("Pirates!!!" );
});

it('length of message after deleting should be decremented', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.posts.length).toBe(4 );
});

it(` after deleting length should'nt be decremented if id is incorrect`, () => {
    // 1. test data
    let action = actions.   deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.posts.length).toBe(5  );
});