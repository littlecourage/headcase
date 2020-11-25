import { 
  RECEIVE_ALL_MEDITATIONS, 
  RECEIVE_MEDITATION 
} from '../actions/meditations_actions';

const meditationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);

  switch (action.typpe) {
    case RECEIVE_ALL_MEDITATIONS:
      return action.meditations

    case RECEIVE_MEDITATION:
      return newState[action.meditation.id] = action.meditation;
  
    default:
      return oldState;
  }
}

export default meditationsReducer;