import { connect } from 'react-redux';
import PackShow from './pack_show_page';
import { fetchPack } from '../../actions/packs_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    pack: state.entities.packs[ownProps.match.params.packId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPack: (packId) => dispatch(fetchPack(packId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackShow);