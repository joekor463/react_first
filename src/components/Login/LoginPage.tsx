import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../Common/FormsControls/FormControls.module.css"
import {AppStateType} from "../../redux/redux-store";


type LoginFormOwnProps = {
    captchaUrl: string | null
}


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ( {handleSubmit, error, captchaUrl}) => {
    // @ts-ignore
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remembe me") }
           {/* <div>
                <Field placeholder={"Email"}  name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>  remember me
            </div>*/}

            {captchaUrl && <img src={captchaUrl} /> }
            {/*{props.captchaUrl &&
                <div>
                    <Field component={Input} name={"captcha"} validate={[required]} type={"captcha"}/>  Symbol from image
                </div>
            }
*/}
            {captchaUrl &&  createField<LoginFormValuesType>("Symbols from Image", "captcha", [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'}) (LoginForm)


export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth){
        return <Navigate replace to={"/profile"}/>
    }

    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
    )
}


