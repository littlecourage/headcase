import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id]
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {}
// }

export default connect(mapStateToProps, null)(LandingPage);