import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {updateNewPostText} from "./redux/state";


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

 subscribe(rerenderEntireTree());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
