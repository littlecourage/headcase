import { connect } from 'react-redux';
import PackIndex from './pack_index';
import { fetchAllPacks } from '../../actions/packs_actions';

const mapStateToProps = (state) => {
  return {
    packs: Object.values(state.entities.packs)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPacks: () => dispatch(fetchAllPacks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackIndex);