import React from 'react'
import reportWebVitals from './reportWebVitals'

import ReactDOM from 'react-dom'
import './index.css'
/* import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' */
import SamuraiJSApp from './App'

/* ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')); */

ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
