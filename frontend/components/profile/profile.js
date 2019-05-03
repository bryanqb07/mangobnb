import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            booking_start: new Date(),
            booking_end: DateUtil.getFollowingDate(new Date()),
            price_start: "",
            price_end: "",
            confirmation_code: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleDestroy(e){
        e.preventDefault();
        if(confirm("Do you really want to delete this booking?")){
            console.log("delte");
        }else{
            return;
        }
    }

    componentDidMount(){
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        today = today.toDateString();
        tomorrow = tomorrow.toDateString();
        this.props.fetchBookings(today, tomorrow);
    }

    render(){
        const bookings = this.props.bookings;
        let bookingList =
          Object.keys(bookings).length > 0 ? (
            Object.keys(bookings).map(id => (
              <tr key={id}>
                <td>{id}</td>
                <td>{bookings[id].start_date}</td>
                <td>{bookings[id].end_date}</td>
                <td>NTD ${bookings[id].price_at_booking_time} </td>
                <td>{bookings[id].guest.name} </td>
                <td>{bookings[id].guest.email} </td>
                <td>{bookings[id].num_guests} </td>
                <td>{bookings[id].guest.gender} </td>
                <td>{bookings[id].room.room_type} </td>
                <td>{bookings[id].checkin_time} </td>
                <td>{bookings[id].comments} </td>
                <td>
                  <button className="search-button" onClick={this.handleDestroy.bind(this)}>
                    Cancel Booking
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
              <td>n/a</td>
            </tr>
          );
        
            return(
            <div className="admin-wrapper">
                <h1>Welcome MangoBnb Admin</h1>
                <h3 id="todays-bookings"> List of customers checking in today</h3>
                <table className="bookings-list">
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Checkin date</th>
                        <th>Checkout date</th>
                        <th>Price</th>
                        <th>Guest Name</th>
                        <th>Guest Email</th>
                        <th>Num Guests</th>
                        <th>Gender</th>
                        <th>Room Type</th>                        
                        <th>Checkin Time</th>
                        <th>Comments</th>
                        <th>Cancel Booking</th>
                    </tr>
                        { bookingList }
                    </tbody>
                </table>
                <h3>Search for booking by confirmation #</h3>
                <form>
                    <input type="text"></input>
                    <button className="search-button">Search</button>
                </form>
                    <div>
                        <h3>Search for Bookings by Date</h3>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <DatePicker
                                className="left-picker picker admin-picker"
                                // minDate={this.today}
                                // value={this.state.startDate}
                                // onChange={this.handleDateChange("startDate")}
                            />
                            <DatePicker
                                className="right-picker picker admin-picker"
                                // value={this.state.endDate}
                                // minDate={this.tomorrow}
                                // // maxDate={ this.maxDate }
                                // onChange={this.handleDateChange("endDate")}
                            />
                        <button className="search-button">Search</button>
                    </form>                  
                </div>
                <p>Adjust prices by date</p>
                <p>Adjust room availability by date</p>
                <button className="search-button" onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }    
}
    
export default Profile;
