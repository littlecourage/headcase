import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PlayBar from '../audio_player/play_bar';
import PlayPage from '../audio_player/play_page';


const Modal = (props) => {

  if (!props.modal) {
    return null
  }

  let modalComponent;
  switch (modalComponent) {
    case 'bottomPlayer':
      modalComponent = <PlayBar />;
      break;
    case 'fullPlayer':
      modalComponent = <PlayPage />;
      break;
    default:
      return null;
  }

  return (
    <div className="modalContainer">
      <div className="modalElement" onClick={(e) => stopPropogation()}>
        {modalComponent}
      </div>
    </div>
  )

}



const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
