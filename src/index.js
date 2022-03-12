import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

/*let dialogs = [
    {id: 1, name: 'Joe'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Sofi'},
    {id: 4, name: 'Kristy'},
    {id: 5, name: 'Anton'}
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Whats up?'},
    {id: 3, message: 'Where are you?'},
    {id: 4, message: 'Whats going on?'},
    {id: 5, message: 'We in submarine'}
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount : '12'},
    {id: 2, message: 'Proba pera',  likesCount : '11'},
    {id: 3, message: 'Where are you?',  likesCount : '5'},
    {id: 4, message: 'Whats going on?',  likesCount : '8'},
    {id: 5, message: 'We in submarine',  likesCount : '3'}
]*/
ReactDOM.render( <App state={state}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
