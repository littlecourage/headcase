import { connect } from 'react-redux';
import { fetchMeditation } from '../../actions/meditations_actions';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';
import { createMeditationCompletion } from '../../actions/meditation_completions_actions';
import PlayPage from './play_page';

const mapStateToProps = (state) => {

  let currentMed = state.entities.users[state.session.id].currentMeditation;
  let uPacks = Object.values(state.entities.userPacks);
  let currentUp = uPacks.find(up => up.currentMeditation.id === currentMed.id);

  return {
    currentMed: currentMed,
    currentTrack: state.entities.users[state.session.id].trackUrl,
    currentUp: currentUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    fetchAllUserPacks: () => dispatch(fetchAllUserPacks()),
    action: (completion) => dispatch(createMeditationCompletion(completion))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
