import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, demoLogin }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <div>
                <p className="btn btn-rounded " onClick={demoLogin}>Free Demo</p>
            </div>
            {/* <Link to="/login">Login</Link> */}
      {/* &nbsp;or&nbsp; */}
            {/* <Link to="/signup">Sign up!</Link> */}
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.email}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;