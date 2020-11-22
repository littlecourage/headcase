import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchAllCategories } from '../../actions/categories_actions';
import { fetchAllPacks } from '../../actions/packs_actions';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';

const getDisplayPacks = (userPacks, packs) => {

  let packIds = userPacks.map((userPack) => userPack.packId)
  let allPacks = userPacks.slice();

  for (let i = 0; i < packs.length; i++) {
    const pack = packs[i];
    if (!packIds.includes(pack.id)) {
      allPacks.push(pack);
    }
  }

  return allPacks
}

const mapStateToProps = (state) => {
  let packs = Object.values(state.entities.packs)
  let userPacks = Object.values(state.entities.userPacks).map((userPack) => {
    return { ...userPack, ...state.entities.packs[userPack.packId] }
  })
   
  return {
    categories: Object.values(state.entities.categories),
    displayPacks: getDisplayPacks(userPacks, packs)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchAllPacks: () => dispatch(fetchAllPacks()),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);