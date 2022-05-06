import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    sidebarPage : sidebarReducer
});

let store = createStore(redusers);

window.store = store;

export default  store;