import React from "react";
import {connect, Formik} from 'formik';

import loginFormSchema from "./LoginFormSchema";
import {login} from "../../redux/auth-reducer";



const Login = (props) => (
    <div>
        <h1>
            Login
        </h1>

        <Formik
            initialValues = {{ name: "", password: "", rememberMe:true}}
            validateOnBlur
            onSubmit={(values) => { console.log(values) }}
            validationSchema={loginFormSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div>
                    <p>
                        <label htmlFor={'name'}> Имя </label> <br/>
                        <input
                            type={'text'}
                            name={'name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}

                        />
                    </p>
                    {touched.name && errors.name && <p>{errors.name}</p>}

                    <p>
                        <label htmlFor={'password'}> Пароль </label> <br/>
                        <input
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}

                        />
                    </p>
                    {touched.password && errors.password && <p>{errors.password}</p>}

                    <p>
                        <input
                            type={'checkbox'}
                            name={'rememberMe'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.rememberMe}

                        /><label htmlFor={'rememberMe'}> remember me </label>
                    </p>


                    <button disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}>Send</button>
                </div>
            )}

        </Formik>


    </div>
);


export default connect (mapStateToProps, {login}) (Login);