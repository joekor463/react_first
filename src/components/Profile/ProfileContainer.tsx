import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamType = {
    iserId: string
}



// @ts-ignore
type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamType>

class ProfileContainer extends React.Component<PropsType>{

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if(!userId) {userId=this.props.autorizedUserId
            if(!userId) {
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error("ID should exist")
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }

    }

    componentDidMount() {
        //debugger;
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        //debugger;
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
        //this.refreshProfile()
    }



    render() {
        //if (!this.props.isAuth ) return <Navigate to='/login' />;
        //console.log('render PROFILE')
        return (
                <Profile {...this.props}
                         isOwner={!this.props.router.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                />
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        profile : state.profilePage.profile,
        status : state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth


    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



