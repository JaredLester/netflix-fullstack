import React from 'react';
import { Link } from 'react-router-dom'

class SignUpSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearErrors = this.handleClearErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
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

    demoLogin(e) {
        e.preventDefault();
        this.setState({
            email: 'borenil_bhatia@yahoo.com',
            password: 'password' 
        })
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
                        <img src="https://fontmeme.com/temporary/ef5e03deb5f37342d5aadfefd2385825.png" alt="Otakuflix"/>
                        
                        <Link to="/login" className="btn btn-rounded">Login</Link>
                    </div>
                    <div className="showcase-content">
                        <form onSubmit={this.handleSubmit} className="sign-up-form-box">
                        <h1>See what's next</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                    <div className='blackbox'>
                    
                        <input type="text"
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="sign-up-input"
                            />
                        
                        
                            <input type="password"
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="sign-up-input"
                            />
                        
                        <br/>
                        <br/>
                    </div>
                        <input className="sign-up-button" type="submit" value={this.props.formType} />
                        <br/>
                            <div className="errors">{this.renderErrors()}</div>
                        <br/>
                        <a href="#" className="btn btn-xl" onClick={this.demoLogin}>
                            Demo sign-up
                        </a>
                    </form>
                    </div>
                </header>
            </div>
        );
    }
}

export default SignUpSessionForm;
