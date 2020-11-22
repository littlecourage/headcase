import { connect } from 'react-redux';
import UserDash from './user_dash';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    userPacks: Object.values(state.entities.userPacks),
    packs: Object.values(state.entities.packs)
    // userPacks: Object.value(state.entities.userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    // fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
