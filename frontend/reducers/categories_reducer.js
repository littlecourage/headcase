import { 
    RECEIVE_CATEGORY, 
    RECEIVE_ALL_CATEGORIES 
  } from '../actions/categories_actions';

const categoriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;

    case RECEIVE_CATEGORY:
      newState[action.category.id] = action.category;

    default:
      return oldState;
  }

}

export default categoriesReducer;