import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount : '12'},
        {id: 2, message: 'Proba pera',  likesCount : '11'},
        {id: 3, message: 'Where are you?',  likesCount : '5'},
        {id: 4, message: 'Whats going on?',  likesCount : '8'},
        {id: 5, message: 'We in submarine',  likesCount : '3'}
    ]
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Pirates!!!");

    // 2. ction
    let newState = profileReducer(state, action);
    // 3. expecttion
   expect(newState.post.length).toBe(5);

});

it('message of new post should be "Pirates!!!"', () => {
    // 1. test data
    let action = addPostActionCreator("Pirates!!!");

    // 2. ction
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.post[5].message).toBe("Pirates!!!" );
});

it('length of message after deleting should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. ction
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.post.length).toBe(4 );
});

it(` after deleting length should'nt be decremented if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. ction
    let newState = profileReducer(state, action);
    // 3. expecttion

    expect(newState.post.length).toBe(5 );
});