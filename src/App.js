import './App.css';
import React, {Suspense} from 'react';

import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";
import {Route, Routes} from "react-router-dom";
//import {Redirect, Route, Routes} from "react-router-dom";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer.ts";
import Preloader from "./components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//import DialogsContainer  from "./components/Dialogs/DialogsContainer";

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/dialogs' element={
                            <Suspense fallback={<div><Preloader/></div>}>
                                <DialogsContainer/>
                            </Suspense>
                        }/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile/' element={
                            <Suspense fallback={<div><Preloader/></div>}>
                                <ProfileContainer/>
                            </Suspense>
                        }/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>

                        <Route path='*'
                            render={()=><div>404 NOT FOUND</div>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect (mapStateToProps, {initializeApp})(App);