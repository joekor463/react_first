import React from "react";
import s from "./Profile.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../Common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "../Common/FormsControls/FormControls.module.css";
import {ProfileType} from "../../types/types";
import {LoginFormValuesType} from "../Login/LoginPage";


type PropsType ={

    profile: ProfileType

}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return  <form onSubmit={handleSubmit}>
        <div>
            <button> save </button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }

        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name","fullName", [], Input)}
            {/*<Field placeholder={"Full name"}  name={"fullName"}
                   validate={[]}
                   component={Input}/>*/}
        </div>
        <div>
            <b>Looking for a job</b>:  {createField<ProfileTypeKeys>("lookingForAJob", [], Input, {type: "checkbox"} )}
            {/*<Field placeholder={""}  name={"lookingForAJob"}
                   validate={[]}
                   component={Input}
                   type={"checkbox"}*/}
        </div>

        <div>
            <b>My professional skills</b>: {createField<ProfileTypeKeys>("My professional skills","lookingForAJobDescription", [], Textarea)}
            {/*<Field placeholder={"My professional skills"}  name={"lookingForAJobDescription"}
                   validate={[]}
                   component={Textarea}
            />*/}
        </div>
        <div>
            <b>About me</b>:
            {/*{createField("About me", "aboutMe", [], Textarea)}*/}
            <Field placeholder={"About me"} name={"aboutMe"}
                   validate={[]}
                   component={Textarea}

            />
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map( key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contact." + key, [], Input)}
                    {/*<Field placeholder={key} name={"contact." + key}
                           validate={[]}
                           component={Input}*/}

                    />
                </b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType,PropsType> ({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;