import { 
  RECEIVE_USER_PACK, 
  RECEIVE_ALL_USER_PACKS 
} from '../actions/user_packs_actions';

const userPacksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_USER_PACKS:
      return action.userPacks;

    case RECEIVE_USER_PACK:
      return newState[action.userPack.id] = action.userPack;
  
    default:
      return oldState;
  }
}

export default userPacksReducer;