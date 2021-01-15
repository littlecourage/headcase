import * as APIUtil from '../util/meditations_util';

export const RECEIVE_CURRENT_MED = "RECEIVE_CURRENT_MED";
export const RECEIVE_CURRENT_UP = "RECEIVE_CURRENT_UP";
export const RECEIVE_MED_UP = "RECEIVE_MED_UP";
export const CLEAR_PLAYER = "CLEAR_PLAYER";
export const RECEIVE_USER_PACK = "RECEIVE_USER_PACK";

export const receiveCurrentMed = (currentMed) => {
  return {
    type: RECEIVE_CURRENT_MED,
    currentMed
  }
}

// export const receiveCurrentUp = (currentUp) => {
  
//   return {
//     type: RECEIVE_CURRENT_UP,
//     currentUp
//   }
// }

const receiveUserPack = (userPack) => {
  return {
    type: RECEIVE_USER_PACK,
    userPack
  }
}

// export const clearPlayer = () => {
//   return {
//     type: CLEAR_PLAYER
//   }
// }

// const receiveMedUp = (userPack) => {
//   return {
//     type: RECEIVE_MED_UP,
//     userPack
//   }
// }

export const fetchMedUserPack = (medId) => (dispatch) => {
  return APIUtil.fetchMedUserPack(medId)
    .then((userPack) => {
      return dispatch(receiveUserPack(userPack))
    })
}