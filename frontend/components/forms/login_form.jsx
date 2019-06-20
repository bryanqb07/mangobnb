import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user)
            .then(this.props.history.push('/profile'));
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    render() {
        const errors = this.props.errors;
        const errorsDisplay = errors ? (this.props.errors.map(error => <li key={error}>{error}</li>)
        ) : "";
        return (
            <div className="w3-padding w3-col l6 m8" style={{border: "1px solid darkgrey"}}>
            <div className="w3-container w3-yellow">
            <h1>Login</h1>
            </div>
            <div className="w3-container w3-white w3-padding-16">
            <form>  
              <span> Username {"   "}</span>
              <input
      
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />

              <span> Password </span>
              <input
         
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <button
                onClick={this.handleSubmit}
                className="w3-button w3-dark-grey"
                style={{marginLeft: "15px"}}
              >
                Login
              </button>
            </form>
            <ul>{errorsDisplay}</ul>
            </div>
          </div>
        );
    }

}

export default SessionForm;