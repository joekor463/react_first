import {follow, unfollow} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodeEnum} from "../api/api";
import {actions} from "./user-reducer";

jest.mock("../api/users-api")

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    usersAPI.follow.mockClear()
    usersAPI.unfollow.mockClear()
})

const result: APIResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}



userAPIMock.follow.mockReturnValue(Promise.resolve(result))

test ('success follow thunk', async() => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()



    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toHaveBeenCalledWith(3)
    expect(dispatchMock).toBeCalledTimes(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toBeCalledTimes(2, actions.followSuccess(1))
    expect(dispatchMock).toBeCalledTimes(3, actions.toggleFollowingProgress(false, 1))
})

test ('success unfollow thunk', async() => {
    const thunk = unfollow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()


    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toHaveBeenCalledWith(3)
    expect(dispatchMock).toBeCalledTimes(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toBeCalledTimes(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toBeCalledTimes(3, actions.toggleFollowingProgress(false, 1))
})

