import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



/*const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         dialogsPage={store.getState().dialogPage}/>
            }
        }
    </StoreContext.Consumer>

}
*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);



const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;