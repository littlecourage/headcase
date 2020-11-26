import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { fetchMeditation } from '../../actions/meditations_actions';
import PlayPage from './play_page';

const mapStateToProps = (state) => {

  let currentMed = state.entities.users[state.session.id].currentMeditation
  debugger
  return {
    currentMed: currentMed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
