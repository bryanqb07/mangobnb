import React from 'react';
import { postContactForm } from '../../util/subscriber_api_util';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            response: [""]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(type){
        return e => this.setState({ [type]: e.target.value });
    }    

    handleClick(e){
        e.preventDefault();
        postContactForm(this.state).then(response => this.setState({response: [response.status]}), 
            errors => this.setState({response: errors.responseJSON}));
    }

    render() {
        return(
        <div className="w3-container" id="contact">
            <h2>Contact</h2>
            <p>If you have any questions, do not hesitate to ask them.</p>
            <i className="fa fa-map-marker w3-text-red" style={{width:"30px"}}></i> Taipei, Taiwan<br/>
                    <i className="fa fa-phone w3-text-red" style={{width:"30px"}}></i> Phone: +886 0988 792 057<br/>
            <i className="fa fa-envelope w3-text-red" style={{width:"30px"}}> </i> Email: mangostationtw@gmail.com<br/>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" 
                required name="Name" onChange={this.handleChange("name")} value={this.state.name}/></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" 
                placeholder="Email" required name="Email" onChange={this.handleChange("email")} value={this.state.email}/></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" 
                        placeholder="Message" required name="Message" onChange={this.handleChange("message")} value={this.state.message}/></p>
            <p><button onClick={this.handleClick} className="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
            {this.state.response[0].length > 0 ? <ul>{ this.state.response.map(item => <li key={item}>{item}</li>) }</ul> : ""}
        </div>
        )
    }
}

export default ContactForm;
