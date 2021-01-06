import { 
  RECEIVE_MEDITATION_COMPLETION 
} from '../actions/meditation_completions_actions'


const meditationCompletionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MEDITATION_COMPLETION:
      newState[action.meditationCompletion.id] = action.meditationCompletion;
      return newState
  
    default:
      return oldState;
  }


}

export default meditationCompletionsReducer;