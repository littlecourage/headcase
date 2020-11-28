import * as APIUtil from '../util/meditation_completions_util';

export const RECEIVE_MEDITATION_COMPLETION = "RECEIVE_MEDITATION_COMPLETION";

const receiveMeditationCompletion = (completion) => {
  
  return {
    type: RECEIVE_MEDITATION_COMPLETION,
    completion
  }
}

export const createMeditationCompletion = (medCom) => (dispatch) => {
  
  APIUtil.createMeditationCompletion(medCom)
    .then((newCompletion) => dispatch(receiveMeditationCompletion(newCompletion)))
}