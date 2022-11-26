import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://www.nicepng.com/png/detail/976-9761880_v-for-vendetta-clipart-anonymous-v-for-vendetta.png'/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>
                        {props.login}  - <button onClick={props.logout}>Log out</button>
                      </div>
                    : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>)
}

export default Header;