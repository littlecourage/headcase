import { connect } from 'react-redux';
import React from 'react';
import UserDash from './user_dash';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';
import { fetchMeditation } from '../../actions/meditations_actions';
import { showUser } from '../../actions/session_actions';


const getPacks = (userPacks=[]) => {
  return userPacks.map((userPack) => {
    return userPack.pack
  })
}

const mapStateToProps = (state) => {
  let userPacks = Object.values(state.entities.userPacks);
  // let uPacks = Object.values(state.entities.userPacks);
  // let currentMed = state.entities.users[state.session.id].currentMeditation;
  // if (userPacks.length > 0){
  //   currentUp = userPacks.find(up => up.currentMeditation.id === currentMed.id);
  // }
  return {
    currentUser: state.entities.users[state.session.id],
    packs: getPacks(userPacks),
    currentMed: state.entities.users[state.session.id].currentMeditation,
    userPacks: userPacks,
    currentUp: state.entities.users[state.session.id].currentUserPack,
    currentPack: state.entities.users[state.session.id].currentPack,
    medCompletions: Object.values(state.entities.meditationCompletions)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    showUser: (userId) => dispatch(showUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
