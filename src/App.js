import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer  from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {updateNewPostText} from "./redux/store";


const App = (props) => {

    return  (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer  store={props.store}  />}/>
                        <Route path='/profile' element={<Profile store={props.store}
                        />}/>
                    </Routes>
                 <Friends/>
                </div>
            </div>
        </BrowserRouter> )
}


export default App;
