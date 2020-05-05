import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import SignUpSessionForm from './sign_up_session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        demoLogin: () => dispatch(login(demoUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSessionForm);
