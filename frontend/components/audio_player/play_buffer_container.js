import PlayBuffer from './play_buffer';
import { connect } from "react-redux";
import { showUser } from '../../actions/session_actions';
import { fetchMeditation } from '../../actions/meditations_actions';
import { fetchAllUserPacks, fetchUserPack } from '../../actions/user_packs_actions';
import { receiveCurrentMed, fetchMedUserPack } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  
  let currentMedId = parseInt(ownProps.match.params.meditationId);
  let uPacks = Object.values(state.entities.userPacks);
  let currentUpId = null;
  let included = false;
  if (state.ui.player.currentUp) {
    currentUpId = state.ui.player.currentUp.id
    let meds = Object.keys(state.ui.player.currentUp.meditations).map(med => med.toString());
    if (meds.includes(`${currentMedId}`)) {
      included = true;
    }
  }

  return {
    currentUser: state.entities.users[state.session.id],
    currentMedId: currentMedId,
    currentUp: state.ui.player.currentUp,
    currentUpId: currentUpId,
    uPacks: uPacks,
    included: included,
    currentMed: Object.values(state.entities.meditations).find(med => med.id === currentMedId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    receiveCurrentMed: (currentMed) => dispatch(receiveCurrentMed(currentMed)),
    fetchMedUserPack: (medId) => dispatch(fetchMedUserPack(medId)),
    fetchUserPack: (upId) => dispatch(fetchUserPack(upId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBuffer);
