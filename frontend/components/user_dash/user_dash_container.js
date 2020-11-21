import { connect } from 'react-redux';
import UserDash from './user_dash';
import { fetchAllPacks } from '../../actions/packs_actions';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    packs: Object.values(state.entities.packs)
    // userPacks: Object.value(state.entities.userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPacks: () => dispatch(fetchAllPacks()),
    // fetchMeditation: meditationId => dispatch(fetchMeditation(meditationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
