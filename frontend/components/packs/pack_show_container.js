import { connect } from 'react-redux';
import PackShow from './pack_show_page';
import { fetchPack } from '../../actions/packs_actions';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';

// const isUserPack = (pack={}, userPacks=[]) => {
//   let packIds = userPacks.map((userPack) => userPack.packId)
//   return packIds.includes(pack.id)
// }


const mapStateToProps = (state, ownProps) => {
  
  return {
    pack: state.entities.packs[ownProps.match.params.packId],
    userPacks: Object.values(state.entities.userPacks),
    // isUserPack: isUserPack(pack, userPacks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPack: (packId) => dispatch(fetchPack(packId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackShow);