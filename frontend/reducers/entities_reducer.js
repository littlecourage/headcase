import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import packsReducer from './packs_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  packs: packsReducer
})


export default entitiesReducer;