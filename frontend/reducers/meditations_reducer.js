import { 
  RECEIVE_ALL_MEDITATIONS, 
  RECEIVE_MEDITATION 
} from '../actions/meditations_actions';

const meditationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_MEDITATIONS:
      return action.meditations

    case RECEIVE_MEDITATION:
      const { meditation } = action;
      newState[meditation.id] = meditation;
      
      return newState;
    default:
      return oldState;
  }
}

export default meditationsReducer;