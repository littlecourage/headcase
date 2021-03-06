import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, login, removeErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link className="form_link" to="/login">Log In</Link>,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);