import { RECEIVE_MED_UP } from '../actions/meditations_actions';
import { RECEIVE_CURRENT_UP, RECEIVE_CURRENT_MED, CLEAR_PLAYER } from '../actions/player_actions';
import { RECEIVE_USER_PACK } from '../actions/user_packs_actions';

const _nullPlayer = Object.freeze({ currentUp: null, currentMedId: null })

const playerReducer = (oldState = _nullPlayer, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER_PACK:
      newState.currentUp = action.userPack;
      return newState;

    case RECEIVE_CURRENT_MED:
      newState.currentMedId = parseInt(action.currentMed);
      return newState;

    case CLEAR_PLAYER:
      return _nullPlayer; 

    // case RECEIVE_USER_PACK:
    //   newState.currentUpId = action.userPack.id;
    //   return newState;

    // case RECEIVE_MED_UP:
    //   newState.currentMedUp = action.currentMedUp;
    //   return newState;

    default:
      return oldState;
  }
}

export default playerReducer