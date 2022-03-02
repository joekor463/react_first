import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        Joe
                    </div>
                    <div className={s.dialog + ' ' + s.active }>
                        An
                    </div>
                    <div className={s.dialog}>
                       Sofi
                    </div>
                    <div className={s.dialog}>
                        Kristy
                    </div>
                    <div className={s.dialog}>
                        Unknow
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>What's up?</div>
                    <div className={s.message}>Where are you?</div>
                    <div className={s.message}>What's going on?</div>
                    <div className={s.message} >We in submarine</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;