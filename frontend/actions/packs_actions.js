import * as APIUtil from '../util/packs_util';

export const RECEIVE_ALL_PACKS = "RECEIVE_ALL_PACKS";
export const RECEIVE_PACK = "RECEIVE_PACK";

export const receiveAllPacks = (packs) => {
  return {
    type: RECEIVE_ALL_PACKS,
    packs
  }
}

export const receivePack = (pack) => {
  return {
    type: RECEIVE_PACK,
    pack
  }
}

export const fetchAllPacks = () => (dispatch) => {
  return APIUtil.fetchAllPacks()
    .then((packs) => dispatch(receiveAllPacks(packs)));
}

export const fetchPack = (packId) => (dispatch) => {
  return APIUtil.fetchPack(packId)
    .then((pack) => dispatch(receivePack(pack)));
}