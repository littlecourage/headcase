import { connect } from 'react-redux';
import React from 'react';
import UserDash from './user_dash';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const getPacks = (userPacks=[]) => {
  return userPacks.map((userPack) => {
    return userPack.pack
  })
}

const mapStateToProps = (state) => {
  let userPacks = Object.values(state.entities.userPacks);
  return {
    currentUser: state.entities.users[state.session.id],
    packs: getPacks(userPacks),
    currentMedId: state.entities.users[state.session.id].currentMeditation.id
    // userPacks: Object.value(state.entities.userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
