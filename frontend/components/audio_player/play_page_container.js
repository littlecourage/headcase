import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { fetchMeditation } from '../../actions/meditations_actions';
import PlayPage from './play_page';

const mapStateToProps = (state) => {
  debugger
  let currentUser = state.entities.users[state.session.id]
  return {
    currentMed: state.entities.users[state.session.id].currentMeditation,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeditation: (medId) => dispatch(fetchMeditation(medId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
