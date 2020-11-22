import { connect } from 'react-redux';
import PackIndex from './pack_index';
import { fetchAllPacks } from '../../actions/packs_actions';

const getDisplayPacks = (cat, packs) => {
  if (cat === undefined) {
    return packs
  }
   
  return packs.filter((pack) => pack.categoryId == cat.id)
}

const mapStateToProps = (state, ownProps) => {
  let packs = Object.values(state.entities.packs)
   
  return {
    packs: packs,
    displayPacks: getDisplayPacks(ownProps.category, packs)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPacks: () => dispatch(fetchAllPacks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackIndex);