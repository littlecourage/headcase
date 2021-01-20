import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  }
}

export const login = (user) => (dispatch) => {
  return APIUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user))
    , (err) => (
      dispatch(receiveErrors(err.responseJSON))
    ))
}

export const signup = (user) => (dispatch) => {
  return APIUtils.signup(user)
    .then((newUser) => dispatch(receiveCurrentUser(newUser))
    , (err) => (
      dispatch(receiveErrors(err.responseJSON))
    ))
}

export const logout = () => (dispatch) => {
  return APIUtils.logout()
    .then((user) => dispatch(logoutCurrentUser()))
}

export const showUser = (userId) => (dispatch) => {
  return APIUtils.showUser(userId)
    .then((user) => dispatch(receiveCurrentUser(user)));
}