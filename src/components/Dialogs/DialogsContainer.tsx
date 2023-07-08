
import { actions } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogPage
  }
}



export default compose(
  connect(mapStateToProps, {...actions }),
  withAuthRedirect
)(Dialogs)
