import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import packsReducer from './packs_reducer';
import categoriesReducer from './categories_reducer';
import userPacksReducer from './user_packs_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  packs: packsReducer,
  categories: categoriesReducer,
  userPacks: userPacksReducer
})


export default entitiesReducer;