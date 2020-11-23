import { connect } from 'react-redux';
import UserDash from './user_dash';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';

const getPacks = (userPacks=[]) => {
   
  return userPacks.map((userPack) => {
    return userPack.pack
  })
}

const mapStateToProps = (state) => {
  let userPacks = Object.values(state.entities.userPacks)
   console.log(state);
  return {
    currentUser: state.entities.users[state.session.id],
    packs: getPacks(userPacks)
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
