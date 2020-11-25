import * as APIUtil from '../util/user_packs_util'

export const RECEIVE_ALL_USER_PACKS = "RECEIVE_ALL_USER_PACKS";
export const RECEIVE_USER_PACK = "RECEIVE_USER_PACK"

export const receiveAllUserPacks = (userPacks) => {
  return {
    type: RECEIVE_ALL_USER_PACKS,
    userPacks
  }
}

export const receiveUserPack = (userPack) => {
  return {
    type: RECEIVE_USER_PACK,
    userPack
  }
}

export const fetchAllUserPacks = () => (dispatch) => {
  return APIUtil.fetchAllUserPacks()
    .then((payload) => dispatch(receiveAllUserPacks(payload)));
}

export const fetchUserPack = (userPackId) => (dispatch) => {
  return APIUtil.fetchUserPack(userPackId)
    .then((userPack) => dispatch(receiveUserPack(userPack)))
}