import React from 'react';
import { withRouter } from 'react-router-dom';
import * as DateUtil from '../../util/date_api_util';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gender: "",
            checkin_time: "12:00:PM",
            comments: "",
            room_id: 1,
            errors: {}
        };
        this.timeOptions = DateUtil.getTimeValues();
        this.handleInput = this.handleInput.bind(this);
        this.genderOptions = ["--- Select Gender ---", "Male(s) Only", "Female(s) Only", "Males/Females", "Other"];
    }


    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const guest = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender
        };

        const booking = {
            num_guests: this.props.num_guests,
            start_date: this.props.start_date,
            end_date: this.props.end_date,
            checkin_time: this.state.checkin_time,
            room_id: this.state.room_id,
            comments: this.state.comments
        };

        if (this.props.errors > 0) {
            return;
        } else {
            this.props.submitGuestBooking(guest, booking);
            this.props.history.push({
                pathname: "/confirmation",
            });
        }

    }

    handleClick() {
        this.props.clearBooking();
    }

    render() {

        let avgPrice = this.state.room_id == 1 ? this.props.avgPriceRoomOne
            : this.props.avgPriceRoomTwo;

        return (
                <div className="booking-form-container">
                    <h3>Booking Details</h3>
                    <form className="booking-form" onSubmit={this.handleSubmit.bind(this)}>
                        <span> Select a Room </span>
                        <select onChange={this.handleInput("room_id")}
                            value={this.state.room_id}>
                            <option value="1" disabled={this.props.rooms[1].open_beds ? false : true}>
                                Mixed Male/Female Room</option>

                            <option value="2" disabled={this.props.rooms[2].open_beds ? false : true}>
                                Female Only Room</option>
                        </select>

                        <span> Primary Guest's Name</span>
                        <input type="text"
                            value={this.state.name}
                            onChange={this.handleInput("name")} />

                        <span> Primary Guest Email</span>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")} />


                        <span>Estimated Checkin Time</span>
                        <select id="checkin-time" value={this.state.checkin_time}
                            onChange={this.handleInput("checkin_time")}>
                            {this.timeOptions.map(time => <option value={time}
                                key={time}>{time}</option>)
                            }
                        </select>


                        <span>Guest(s) Gender</span>
                        <select value={this.state.gender} id="gender"
                            onChange={this.handleInput("gender")}>
                            {this.genderOptions.map(gender => <option value={gender}
                                key={gender}>{gender}</option>)
                            }
                        </select>


                        <span> Additional Requests</span>
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleInput("comments")}>
                        </textarea>

                        <span>Checkin Date: {this.start_date}</span>

                        <span>Checkout Date: {this.end_date}</span>

                        <span>{this.props.num_guests} Guest(s) x
                            NTD${avgPrice} per Night x {this.props.num_nights} Night(s)</span>

                        <span>Total Price: NTD${avgPrice * this.props.num_nights}</span>
                        <br />
                        <button > Book Now </button>
                    </form>
                    <br />
                    {/* <Link to="/" onClick={this.handleClick.bind(this)}>Return to search page.</Link>  */}
                </div>
        )
    }
}

export default withRouter(BookingForm);

