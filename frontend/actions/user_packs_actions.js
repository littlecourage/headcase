import * as APIUtil from '../util/user_packs_util'

export const RECEIVE_ALL_USER_PACKS = "RECEIVE_ALL_USER_PACKS";
export const RECEIVE_USER_PACK = "RECEIVE_USER_PACK";
export const REMOVE_USER_PACK = "REMOVE_USER_PACK";

const receiveAllUserPacks = (userPacks) => {
  return {
    type: RECEIVE_ALL_USER_PACKS,
    userPacks
  }
}

const receiveUserPack = (userPack) => {
  return {
    type: RECEIVE_USER_PACK,
    userPack
  }
}

const removeUserPack = (userPackId) => {
  return {
    type: REMOVE_USER_PACK,
    userPackId
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

export const createUserPack = (userPack) => (dispatch) => {
  return APIUtil.createUserPack(userPack)
    .then((newUserPack) => dispatch(receiveUserPack(newUserPack)));
}

export const deleteUserPack = (userPackId) => (dispatch) => {
  return APIUtil.deleteUserPack(userPackId)
    .then(() => dispatch(removeUserPack(userPackId)))
}