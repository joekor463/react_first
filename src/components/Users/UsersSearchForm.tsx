import * as React from 'react';
import {Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {Field} from "redux-form";
import {useSelector} from "react-redux";
import {getUserFilter} from "../../redux/users-selectors";

type UsersSearchFormObjectType = {
    values: string
}

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FriendFormType = 'true' | 'false' | 'null';

type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUserFilter)
    // @ts-ignore
    const submit = (values: FormType, {setSubmitting}: { setSubmiting: (isSubmitting: boolean) => void }) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null: values.friend === "true" ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            enableReinitialize={true}
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}
                </Form>
            )}
        </Formik>
    </div>
})