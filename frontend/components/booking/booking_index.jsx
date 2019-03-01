import React from 'react';
import * as DateUtil from '../../util/date_api_util';
import { Link } from 'react-router-dom';



class BookingIndex extends React.Component{
    constructor(props){
        super(props);
     //   this.props.startLoading();
        this.state = {
                name: "",
                email: "",
                gender: "",
                checkin_time: "12:00:PM", 
                comments: "",
                room_id: 1,
                errors: {}
        };
        this.num_guests = null;
        this.num_nights = null;
        this.start_date = null;
        this.end_date = null;
        this.NUM_BEDS = ["-- Select # Beds --", 1, 2, 3, 4];
        this.timeOptions = DateUtil.getTimeValues();
        this.handleInput = this.handleInput.bind(this);
        this.genderOptions = ["-- Select Gender --", "Male(s) Only", "Female(s) Only", "Males/Females", "Other"];
    }

    componentDidMount(){
        this.parseParams(this.props.location.search);
        const date = {
            start_date: this.start_date,
            end_date: this.end_date
        };
        this.props.getPrices(date);
        this.props.getRooms(date);
    }

    parseParams(paramsString){
        var searchParams = new URLSearchParams(paramsString);
        this.num_guests = searchParams.get("num_guests");
        this.start_date = searchParams.get("start_date");
        this.end_date = searchParams.get("end_date");
        this.num_nights = DateUtil.getNumNights(new Date(this.start_date), new Date(this.end_date));
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
            checkin_time: this.state.checkin_time,
            room_id: this.state.room_id,
            comments: this.state.comments
        };

        if(this.props.errors > 0){
            return;
        }else{
            this.props.submitGuestBooking(guest, booking);
            this.props.history.push({
                pathname: "/confirmation",
            });
        }

    }

    handleClick() {
        this.props.clearBooking();
    }
    
    render(){
   
        if (! this.props.rooms[1]){
            return(
                <div className="loader">Loading...</div>
            )
        }


        let avgPrice = this.state.room_id == 1 ? this.props.avgPriceRoomOne
        : this.props.avgPriceRoomTwo;
        let rooms = this.props.rooms ? this.props.rooms: "";
        
        if( (rooms[1].open_beds === 0 && rooms[2].open_beds === 0)
            || this.num_guests > (rooms[1].open_beds + rooms[2].open_beds)){
            return(
                <div className="no-beds-available">
                    <p>Sorry, no beds were available for the given dates.
                        Please try another search.
                    </p>
                    <Link to="/" onClick={this.handleClick.bind(this)}>Return to search page.</Link> 
                </div>
            )
        }

        return(
            <div className="booking-form-container">
  
                <div className="beds-container">
                    <h1>Room Availability</h1>
                    <div className="bed-container-1">
                        <span>Title: Male/Female Mixed Dorm Room</span><br/>
                         { rooms[1].open_beds ?
                            <span>Rooms Available: {rooms[1].open_beds}</span> : "No beds available for these dates."
                        }    
                    </div>
                    <div className="bed-container-2">
                        <span>Title: Females Only Dorm Room</span><br/>
                        { 
                            rooms[2].open_beds ? <span>Rooms Available: {rooms[2].open_beds}</span> : 
                                "No beds available for these dates."
                        }              
                    </div>
                
                </div>

                <form className="booking-form" onSubmit={this.handleSubmit.bind(this)}>
                    <label> Select a Room
                        <select onChange={this.handleInput("room_id")} 
                        value={this.state.room_id}>
                            <option value="1" disabled={ rooms[1].open_beds ? false : true}>
                            Mixed Male/Female Room</option>

                            <option value="2" disabled={ rooms[2].open_beds ? false : true}>
                                Female Only Room</option>
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
                        { this.timeOptions.map( time => <option value={time} 
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
                        <span>Checkin Date: {this.start_date}</span>
                    </div>
                    <div>
                        <span>Checkout Date: {this.end_date}</span>
                    </div>       
                    <span>
                        <span>{this.num_guests} Guest(s) x 
                        NTD${avgPrice} per Night x {this.num_nights} Night(s)</span>    
                        <br/>
                        <span>Total Price: ${avgPrice * this.num_nights}</span>
                    </span>
                    <span>
                        <button > Book Now </button>
                    </span>
                </form>    
                <br/>
                <Link to="/" onClick={this.handleClick.bind(this)}>Return to search page.</Link> 
            </div>
        )
    }
}

export default BookingIndex;

