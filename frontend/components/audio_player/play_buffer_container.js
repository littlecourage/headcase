import PlayBuffer from './play_buffer';
import { connect } from "react-redux";
import { fetchMeditation } from '../../actions/meditations_actions';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentMedId: ownProps.match.params.meditationId,
    uPacks: Object.values(state.entities.userPacks),
    currentMed: Object.values(state.entities.meditations)[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBuffer);
