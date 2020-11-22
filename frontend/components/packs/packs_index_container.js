// import { connect } from 'react-redux';
// import PackIndex from './packs_list';
// import { fetchAllPacks } from '../../actions/packs_actions';
// import { fetchAllUserPacks } from '../../actions/user_packs_actions';


// const mapStateToProps = (state, ownProps) => {
//   let packs = Object.values(state.entities.packs)
//   let userPacks = Object.values(state.entities.userPacks).map((userPack) => {
//     return {...userPack, ...state.entities.packs[userPack.packId]}
//   })
   
//   return {
//     packs: packs,
//     userPacks, userPacks,
//     displayPacks: getDisplayPacks(ownProps.category, userPacks, packs)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchAllPacks: () => dispatch(fetchAllPacks()),
//     fetchAllUserPacks: () => dispatch(fetchAllUserPacks())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PackIndex);