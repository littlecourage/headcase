import { connect } from 'react-redux';
import { fetchMeditation } from '../../actions/meditations_actions';
import { fetchAllUserPacks } from '../../actions/user_packs_actions';
import { createMeditationCompletion } from '../../actions/meditation_completions_actions';
import PlayPage from './play_page';

const mapStateToProps = (state, ownProps) => {
  let currentMedId = parseInt(ownProps.currentMed.id);
  let currentMed = ownProps.currentMed
  let uPacks = ownProps.uPacks;
  let currentUp = uPacks.find(up => (
    Object.values(up.meditations).find(med => med.id === currentMedId)
  ));
  let currentTrack = currentMed.trackUrl;
  return {
    currentMedId: currentMedId,
    currentMed: currentMed,
    currentUp: currentUp, 
    currentTrack: currentTrack
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
