import { RECEIVE_PACK, RECEIVE_ALL_PACKS } from '../actions/packs_actions';

const packsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  
  switch (action.type) {
    case RECEIVE_ALL_PACKS:
      return action.drops;

    case RECEIVE_PACK:
      newState[action.post.id] = action.post;

    default:
      return oldState;
  }

}

export default packsReducer;