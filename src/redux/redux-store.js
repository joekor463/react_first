import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    sidebarPage : sidebarReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer,
    app: appReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default  store;