import * as APIUtil from '../util/meditations_util';

export const RECEIVE_CURRENT_MED = "RECEIVE_CURRENT_MED";
export const RECEIVE_CURRENT_UP = "RECEIVE_CURRENT_UP";
export const RECEIVE_MED_UP = "RECEIVE_MED_UP";
export const CLEAR_PLAYER = "CLEAR_PLAYER";
export const RECEIVE_USER_PACK = "RECEIVE_USER_PACK";
export const RECEIVE_UP_ERRORS = "RECEIVE_UP_ERRORS";


export const receiveCurrentMed = (currentMed) => {
  return {
    type: RECEIVE_CURRENT_MED,
    currentMed
  }
}

const receiveUserPack = (userPack) => {
  return {
    type: RECEIVE_USER_PACK,
    userPack
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_UP_ERRORS,
    errors
  }
}


export const fetchMedUserPack = (medId) => (dispatch) => {
  return APIUtil.fetchMedUserPack(medId)
    .then((userPack) => dispatch(receiveUserPack(userPack))
    ,(err) => (
      dispatch(receiveErrors(err.responseJSON))
    ))
}