import './App.css'
import React, {Suspense} from 'react'
import Navbar from './components/Navbar/Navbar'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import {LoginPage} from './components/Login/LoginPage'
import {connect, Provider} from 'react-redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/Common/Preloader/Preloader'
import {compose} from "redux";
import store, {AppStateType} from "./redux/redux-store";
import {UsersPage} from './components/Users/UsersContainer'

// @ts-ignore
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
// import DialogsContainer  from "./components/Dialogs/DialogsContainer";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

// @ts-ignore
const SuspendedDialogs = withSuspense(DialogsContainer)

// @ts-ignore
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured')
  }

  componentDidMount () {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount () {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }

    // @ts-ignore

      return (
            <div className='app-wrapper'>
                <HeaderContainer isAuth={false} login={null} logout={''}/>
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
                        <Route path='/users' element={<UsersPage pageTitle={'Samurai'}/>}/>
                        <Route path='/login' element={<LoginPage />}/>

                        {/*<Route path='*'
                            render={() => <div>404 NOT FOUND</div>}/>*/}
                    </Routes>
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    //withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

//export default connect(mapStateToProps, { initializeApp })(App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp