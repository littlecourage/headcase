import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In</Link>,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);