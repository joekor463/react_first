
import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {



    return  (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs  state={props.state.dialogPage} />}/>
                        <Route path='/profile' element={<Profile  state={props.state.profilePage}/>}/>
                    </Routes>
                <Friends />
                </div>
            </div>
        </BrowserRouter> )
}


export default App;
