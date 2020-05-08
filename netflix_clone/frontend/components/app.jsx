import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Browse from './browse/browse';
import VideoContainer from './video/video_container'

const App = () => (
    <div>
        <header>
            {/* <Link to="/" className="header-link">
                <h1></h1>
            </Link> */}
            {/* <GreetingContainer /> */}
        </header>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/" component={SignUpFormContainer} />
            <ProtectedRoute path="/browse" component={Browse} />
            <ProtectedRoute path="/videos/:videoId" component={VideoContainer} />

            
        </Switch>
    </div>
);

export default App;