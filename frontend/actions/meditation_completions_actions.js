import * as APIUtil from '../util/meditation_completions_util';

export const RECEIVE_MEDITATION_COMPLETION = "RECEIVE_MEDITATION_COMPLETION";

const receiveMeditationCompletion = (meditationCompletion) => {
  
  return {
    type: RECEIVE_MEDITATION_COMPLETION,
    meditationCompletion
  }
}

export const createMeditationCompletion = (meditationCompletion) => (dispatch) => {
  
  APIUtil.createMeditationCompletion(meditationCompletion)
    .then((newCompletion) => dispatch(receiveMeditationCompletion(newCompletion)))
}