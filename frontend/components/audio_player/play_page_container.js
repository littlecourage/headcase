import { connect } from 'react-redux';
import { fetchMeditation } from '../../actions/meditations_actions';
import PlayPage from './play_page';

const mapStateToProps = (state) => {
  let currentMed = state.entities.users[state.session.id].currentMeditation
  return {
    currentMed: currentMed,
    // currentTrack: state.entities.
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
