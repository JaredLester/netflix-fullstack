import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(login({
        email: 'borenil_bhatia@yahoo.com',
        password: 'password'
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);