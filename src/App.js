
import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {updateNewPostText} from "./redux/state";


const App = (props) => {



    return  (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs  state={props.state.dialogPage} />}/>
                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                    </Routes>
                <Friends />
                </div>
            </div>
        </BrowserRouter> )
}


export default App;
