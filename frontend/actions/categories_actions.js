import * as APIUtil from '../util/categories_util';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECIEVE_CATEGORY"

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  }
}

export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category
  }
}

export const fetchAllCategories = () => (dispatch) => {
   
  return APIUtil.fetchAllCategories()
    .then((categories) => dispatch(receiveAllCategories(categories)));
}

export const fetchCategory = (categoryId) => (dispatch) => {
  return APIUtil.fetchCategory(categoryId)
    .then((category) => dispatch(receiveCategory(category)));
}