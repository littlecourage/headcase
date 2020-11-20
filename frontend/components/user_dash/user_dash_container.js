import { connect } from 'react-redux';
import UserDash from './user_dash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    // userPacks: Object.value(state.entities.userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchPacks: () => dispatch(fetchPacks()),
    // fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
