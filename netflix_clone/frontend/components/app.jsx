import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Browse from './browse/browse';


const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1></h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/" component={SignUpFormContainer} />
            <Route path="/browse" component={Browse} />
            
        </Switch>
    </div>
);

export default App;