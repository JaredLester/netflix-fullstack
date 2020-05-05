import React from 'react';
import {Link} from 'react-router-dom'

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClearErrors(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <header className="showcase">
                    <div className="showcase-top">
                        <img src="https://fontmeme.com/temporary/ef5e03deb5f37342d5aadfefd2385825.png" alt="Otakuflix" />
                        
                        
                    </div>
                    <div className="showcase-content">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className='login-form'>
                           <p>Login</p>

                                <input type="text"
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />


                                <input type="password"
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />


                                <input className="login-button" type="submit" value={this.props.formType} />
                                <br/>
                                <div className="errors">{this.renderErrors()}</div>
                                <br/>
                                <div className="back-to-message"> New to Otakuflix? Back to <a href="#" className="back-to-signup">sign-up</a>.</div>
                            </div>
                            <br />
                            <br />
                        </form>
                    </div>
                </header>
            </div>
            // ###########################
            //     
            //     <div className="login-form-container">
            //         <form onSubmit={this.handleSubmit} className="login-form-box">
            //             Welcome to OtakuFlix!
            //   <br />
            //   Please {this.props.formType} or {this.props.navLink}
            //             {this.renderErrors()}
            //             <div className="login-form">
            //                 <br />
            //                 <label className="sign-up-email">Email:
            //       <input type="text"
            //                         value={this.state.email}
            //                         onChange={this.update('email')}
            //                         className="login-input"
            //                     />
            //                 </label>
            //                 <br />
            //                 <label className="sign-up-password">Password:
            //       <input type="password"
            //                         value={this.state.password}
            //                         onChange={this.update('password')}
            //                         className="login-input"
            //                     />
            //                 </label>
            //                 <br />
            //                 <input className="session-submit" type="submit" value={this.props.formType} />
            //             </div>
            //         </form>
            //     </div>
        );
    }
}

export default LoginSessionForm;
