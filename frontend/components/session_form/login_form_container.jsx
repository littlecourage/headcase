import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link className="form_link" to="/signup">Sign Up</Link>,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);