import React from 'react';
import * as Util from '../../util/date_api_util';

class BookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            guest: {
                name: "",
                email: "",
                gender: "",
            },
            booking: {
                checkin_time: "", 
                comments: "",
                room_id: null
            }
        };
        this.timeOptions = Util.getTimeValues();
        this.handleInput = this.handleInput.bind(this);
        this.genderOptions = ["Male(s) Only", "Female(s) Only", "Mixed", "Other"];
    }

    handleInput(category, type){
        return (e) => this.setState({ [category]: { [type]: e.target.value }});
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        //console.log(this.props);
        return(
            <div className="booking-form-container">
                <div className="room-option-container">

                
                </div>




                <form className="booking-form" onSubmit={this.handleSubmit.bind(this)}>
                    <label> Primary Guest Name
                        <input type="text" 
                        value={this.state.guest.name}
                        onChange={this.handleInput("guest", "name")}/>
                    </label>
                    <label> Primary Guest Email
                        <input type="text"
                            value={this.state.guest.email}
                            onChange={this.handleInput("guest", "email")} />
                    </label>
                    <label>Estimated Checkin Time (optional)
                        <select value={this.state.booking.checkin_time} 
                            onChange={this.handleInput("booking", "checkin_time")}>
                        { this.timeOptions.map(time => <option value={time} 
                            key={time}>{time}</option>)
                        }
                      </select>
                    </label>
                    <label>Guest(s) Gender (optional)
                        <select value={this.state.guest.gender} 
                            onChange={this.handleInput("guest", "gender")}>
                        { this.genderOptions.map(gender => <option value={gender} 
                            key={gender}>{gender}</option>)
                        }
                      </select>
                    </label>
                    <label> Additional Requests
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleInput("booking", "comments")}>
                            { this.state.booking.comments }
                        </textarea>
                    </label>
                    <span>
                        <button > Book Now </button>
                    </span>

                </form>     
            </div>
        )
    }
}

export default BookingForm;


// loading 