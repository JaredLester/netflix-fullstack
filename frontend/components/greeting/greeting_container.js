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
        email: 'joe_Shmoe123@wahoo.com',
        password: 'password'
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);