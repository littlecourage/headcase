import * as APIUtil from '../util/meditations_util';

export const RECEIVE_CURRENT_MED = "RECEIVE_CURRENT_MED";
export const RECEIVE_CURRENT_UP = "RECEIVE_CURRENT_UP";
export const RECEIVE_MED_UP = "RECEIVE_MED_UP";

export const receiveCurrentMed = (currentMed) => {
  return {
    type: RECEIVE_CURRENT_MED,
    currentMed
  }
}

export const receiveCurrentUp = (currentUp) => {
  return {
    type: RECEIVE_CURRENT_UP,
    currentUp
  }
}

// const receiveMedUp = (userPack) => {
//   return {
//     type: RECEIVE_MED_UP,
//     userPack
//   }
// }

export const fetchMedUserPack = (medId) => (dispatch) => {
  return APIUtil.fetchMedUserPack(medId)
    .then((userPack) => {
      return dispatch(receiveCurrentUp(userPack))
    })
}