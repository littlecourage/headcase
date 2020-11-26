// import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import PlayPageContainer from '../audio_player/play_page_container';


// const Modal = (props) => {

//   if (!props.modal) {
//     return null
//   }

//   let modalComponent;
//   switch (props.modal) {
//     case 'playBar':
//       modalComponent = <PlayBar />;
//       break;
//     case 'playPage':
//       modalComponent = <PlayPageContainer />;
//       break;
//     default:
//       return null;
//   }

//   return (
//     <div className="modalContainer">
//       <div className="modalElement" onClick={(e) => stopPropogation()}>
//         {modalComponent}
//       </div>
//     </div>
//   )

// }



// const mapStateToProps = (state) => {
//   return {
//     modal: state.ui.modal
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
