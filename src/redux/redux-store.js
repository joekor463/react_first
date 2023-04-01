import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import sidebarReducer from "./sidebar-reducer.ts";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer.ts";

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    sidebarPage : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

/*
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;
*/

export default  store;