import * as APIUtil from '../util/meditations_util';

export const RECEIVE_ALL_MEDITATIONS = "RECEIVE_ALL_MEDITATIONS";
export const RECEIVE_MEDITATION = "RECEIVE_MEDITATION";

const receiveAllMeditations = (meditations) => {
  return {
    type: RECEIVE_ALL_MEDITATIONS,
    meditations
  }
}

const receiveMeditation = (meditation) => {
  return {
    type: RECEIVE_MEDITATION,
    meditation
  }
}

export const fetchAllMeditations = () => (dispatch) => {
  return APIUtil.fetchAllMeditations()
    .then((meditations) => {
      
      return dispatch(receiveAllMeditations(meditations))
    });
  }

export const fetchMeditation = (meditationId) => (dispatch) => {
  return APIUtil.fetchMeditation(meditationId)
    .then((meditation) => {
      
      return dispatch(receiveMeditation(meditation))
    })
}