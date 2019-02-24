import React from 'react';
import * as Util from '../../util/date_api_util';
import { Link } from 'react-router-dom';


class BookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                name: "",
                email: "",
                gender: "Male(s) Only",
                checkin_time: "", 
                comments: "",
                room_id: 1
        };
        this.num_guests = null;
        this.num_nights = null;
        this.start_date = null;
        this.end_date = null;
        this.NUM_BEDS = ["-- Select # Beds --", 1, 2, 3, 4];
        this.timeOptions = Util.getTimeValues();
        this.handleInput = this.handleInput.bind(this);
        this.genderOptions = ["Male(s) Only", "Female(s) Only", "Mixed", "Other"];
        this.handleGuestCreation = this.handleGuestCreation.bind(this);
        this.handleBookingCreation = this.handleBookingCreation.bind(this);
    }

    componentDidMount(){
        this.parseParams(this.props.location.search);
        const date = {
            start_date: this.start_date,
            end_date: this.end_date
        };
        this.props.getPrices(date);
    }

    parseParams(paramsString){
        var searchParams = new URLSearchParams(paramsString);
        this.num_guests = searchParams.get("num_guests");
        this.start_date = searchParams.get("start_date");
        this.end_date = searchParams.get("end_date");
        this.num_nights = Util.getNumNights(new Date(this.start_date), new Date(this.end_date));
    }

    handleInput(type){
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        const guest = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender
        };

        const booking = {
            num_guests: this.num_guests,
            start_date: this.start_date,
            end_date: this.end_date,
            checkin_time: this.checkin_time,
            room_id: this.state.room_id,
            comments: this.state.comments
        };

        this.props.submitGuestBooking(guest, booking);

    }

    handleGuestCreation(){

        this.props.createGuest(guest);
        return "random";
    }

    handleBookingCreation(){

        this.props.createBooking(booking);
    }

    render(){
        let avgPrice = this.state.room_id == 1 ? this.props.avgPriceRoomOne
        : this.props.avgPriceRoomTwo;

        return(
            <div className="booking-form-container">
  
                <form className="booking-form" onSubmit={this.handleSubmit.bind(this)}>
                    <label> Select a Room
                        <select onChange={this.handleInput("room_id")} 
                        value={this.state.room_id}>
                            <option value="1">Mixed Male/Female Room</option>
                            <option value="2">Female Only Room</option>
                        </select>
                    </label>
                    
                    <label> Primary Guest Name
                        <input type="text" 
                        value={this.state.name}
                        onChange={this.handleInput("name")}/>
                    </label>
                    <label> Primary Guest Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")} />
                    </label>
                    <label>Estimated Checkin Time (optional)
                        <select value={this.state.checkin_time} 
                            onChange={this.handleInput("checkin_time")}>
                        { this.timeOptions.map(time => <option value={time} 
                            key={time}>{time}</option>)
                        }
                      </select>
                    </label>
                    <label>Guest(s) Gender
                        <select value={this.state.gender} 
                            onChange={this.handleInput("gender")}>
                        { this.genderOptions.map(gender => <option value={gender} 
                            key={gender}>{gender}</option>)
                        }
                      </select>
                    </label>
                    <label> Additional Requests
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleInput("comments")}>
                        </textarea>
                    </label>
                    <div>
                        <span>Start Date: {this.start_date}</span>
                    </div>
                    <div>
                        <span>End Date: {this.end_date}</span>
                    </div>       
                    <span>
                        <span>Price: ${avgPrice} x ${this.num_nights}</span>
                        <br/>
                        <span>Total Price: ${avgPrice * this.num_nights}</span>
                    </span>
                    <span>
                        <button > Book Now </button>
                    </span>
                </form>    
                <br/>
                <Link to="/">Return to search page.</Link> 
            </div>
        )
    }
}

export default BookingForm;


// loading 