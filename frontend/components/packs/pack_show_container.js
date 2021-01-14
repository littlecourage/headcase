import { connect } from 'react-redux';
import PackShow from './pack_show_page';
import { receiveCurrentMed, receiveCurrentUp } from '../../actions/player_actions';
import { fetchPack } from '../../actions/packs_actions';
import { fetchAllUserPacks, 
        deleteUserPack, 
        createUserPack } from '../../actions/user_packs_actions';


const mapStateToProps = (state, ownProps) => {
  
  return {
    pack: state.entities.packs[ownProps.match.params.packId],
    userPacks: Object.values(state.entities.userPacks),
    currentUser: state.entities.users[state.session.id]
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPack: (packId) => dispatch(fetchPack(packId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    createUserPack: (userPack) => dispatch(createUserPack(userPack)),
    deleteUserPack: (userPackId) => dispatch(deleteUserPack(userPackId)), 
    receiveCurrentMed: (currentMed) => dispatch(receiveCurrentMed(currentMed)),
    receiveCurrentUp: (currentUp) => dispatch(receiveCurrentUp(currentUp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackShow);