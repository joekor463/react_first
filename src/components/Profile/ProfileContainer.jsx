import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer.ts";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
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
class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if(!userId) {userId=this.props.autorizedUserId
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        //debugger;
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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

let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        profile : state.profilePage.profile,
        status : state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth


    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



