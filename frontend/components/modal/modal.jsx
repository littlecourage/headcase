import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SmallAudioContainer from '../audio_player/small_audio';
import FullAudioContainer from '../audio_player/full_audio_container';


const Modal = (props) => {

  if (!props.modal) {
    return null
  }

  let modalComponent;
  switch (modalComponent) {
    case 'bottomPlayer':
      modalComponent = <SmallAudioContainer />;
      break;
    case 'fullPlayer':
      modalComponent = <FullAudioContainer />;
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
