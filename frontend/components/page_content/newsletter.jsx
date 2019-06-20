import React from 'react';
import { postSubscriber } from '../../util/subscriber_api_util';

class NewsLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            response: [""]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({email: e.target.value});
        // console.log(e.target.value);
        // console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        postSubscriber({email: this.state.email}).then(response => this.setState({ response: [response.status] }),
            errors => this.setState({ response: errors.responseJSON }));
    }

    render(){
        console.log(this.state);
        return(
            <div className="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off" style={{margin:"32px 0"}}>
                <h2>Get the best offers first!</h2>
                <p>Join our newsletter.</p>
                <label>E-mail</label>
                <input value={this.state.email} onChange={this.handleChange.bind(this)} className="w3-input w3-border" type="text" placeholder="Your Email address" />
                <button type="button" onClick={this.handleSubmit} className="w3-button w3-red w3-margin-top">Subscribe</button>
                {this.state.response[0].length > 0 ? <ul>{this.state.response.map(item => <li key={item}>{item}</li>)}</ul> : ""}
            </div>
        )
    }
}

export default NewsLetter;