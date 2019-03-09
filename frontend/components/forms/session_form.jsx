import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user)
        .then(this.props.history.push('./'));
    }

    handleInput(type){
        return (e) => this.setState({ [type]: e.target.value});
    }

    render(){
        const header = this.props.formType == "/login" ? ({
            title: "Login",
            url: "/signup",
            text: "Signup",
        //    passwordType: "current-password",
        }) : ({
            title: "Signup",
            url: "/login",
            text: "Login",
        //    passwordType: "new-password",
        });

        const errors = this.props.errors;
        const errorsDisplay = errors ? ( this.props.errors.map(error => <li key={error}>{error}</li>) 
            ) : "";
        const isLogin = this.props.formType == "/login"

        const emailForm =  isLogin ? "" : (
            <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
            />
        
        );
        
        return(
            <div className="login-form-container">
                <header className="login-header">
                    <span>Have an account already? &nbsp;&nbsp;&nbsp; 
                        <Link to={header.url} >
                            {header.text}
                        </Link>
                    </span>
                    
                    <h1>
                        { header.title }
                    </h1>
                </header>
                <form>
                    <span> Username</span>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput("username")} />

                    <span> Password </span>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")} />
                    
                    { isLogin ? "" : <span>Email</span> }
                    { emailForm}

                    <button onClick={this.handleSubmit}>
                        { header.title }
                    </button>
                </form>
                <ul>
                    {errorsDisplay}
                </ul>   
            </div>
        )
    }

}

export default SessionForm;