import React, {FC, useEffect} from 'react';

import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {Form, Formik} from 'formik';
import {Field} from "redux-form";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUserFilter,
    getUsers
} from "../../redux/users-selectors";
import {useHistory} from 'react-router-dom'
import * as queryString from "querystring";

type PropsType = {

}


export const Users: FC<PropsType> = (props) => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUserFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()



    useEffect(()=>{
        const parsed  = queryString.parse(history.location.search.substr(1)) as {term: string; page: string; friend: string}

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter  = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break
        }

        useEffect(()=>{
            history.push({
                pathname: '/users',
                search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
            })
        }, [filter, currentPage])


        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    return <div>

        <UsersSearchForm onFilterChanged = {onFilterChanged()}/>

         <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}
                    />
                )
            }
        </div>

    </div>
}

const usersSearchFormValidate = (values) = {
    const errors = {};
    return errors;
}

        return <div>
        <Formik
            initialValues={{term: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>


