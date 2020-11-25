import { connect } from 'react-redux';
import React from 'react';
import UserDash from './user_dash';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { FaPlay } from 'react-icons/fa';

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
    //currentMeditation
    // userPacks: Object.value(state.entities.userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    showModal: (
      <button onClick={() => dispatch(openModal('playPage'))}>
        <FaPlay />&emsp;BEGIN
      </button>
    ), 
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
