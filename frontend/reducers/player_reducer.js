import { RECEIVE_MED_UP } from '../actions/meditations_actions';
import { RECEIVE_CURRENT_UP, RECEIVE_CURRENT_MED } from '../actions/player_actions';
import { RECEIVE_USER_PACK } from '../actions/user_packs_actions';

const playerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_UP:
      newState.currentUp = action.currentUp;
      return newState;

    case RECEIVE_CURRENT_MED:
      newState.currentMedId = action.currentMed;
      return newState;

    case RECEIVE_USER_PACK:
      newState.currentUpId = action.userPack.id;
      return newState;

    // case RECEIVE_MED_UP:
    //   newState.currentMedUp = action.currentMedUp;
    //   return newState;

    default:
      return oldState;
  }
}

export default playerReducer