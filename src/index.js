import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store) }/>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
