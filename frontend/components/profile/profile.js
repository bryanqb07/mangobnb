import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";
import Price from './price';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: DateUtil.getFollowingDate(new Date()),
            price_start: "",
            price_end: "",
            confirmation_code: "",
            booking_id: -1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    handleSubmit(e) {
        e.preventDefault();
        var target_ele = document.getElementById("todays-bookings");
        target_ele.textContent = "List of Bookings";
        this.props.fetchBookings(this.state.startDate.toDateString(), this.state.endDate.toDateString(), null);
    }

    handleDestroy(e){
        e.preventDefault();
        const id = e.target.value;
        if(confirm("Do you really want to delete this booking?")){
            this.props.destroyBooking(id);
            var target_row = document.getElementById(id);
            target_row.parentNode.removeChild(target_row);
        }else{
            return;
        }
    }

    handleDateChange(type) {
        if (type === "startDate") { //allows auto-updating of end date 
            //when new start date selected
            return (e) => this.setState({
                [type]: e,
                endDate: DateUtil.getFollowingDate(e)
            });
        } else {
            return (e) => this.setState({ [type]: e });
        }
    }

    handleConfirmation(e){
        e.preventDefault();
        var target_ele = document.getElementById("todays-bookings");
        target_ele.textContent = "List of Bookings";
        this.props.fetchBookings("Apr 30 1900", "May 01 1900", this.state.confirmation_code);
    }

    handleInput(e){
        this.setState({confirmation_code: e.target.value});
    }

    componentDidMount(){
        let today = new Date();
        let tomorrow = new Date();
        let next_month = new Date();
        tomorrow.setDate(today.getDate() + 1);
        next_month.setDate(today.getDate() + 30);
        today = today.toDateString();
        tomorrow = tomorrow.toDateString();
        next_month = next_month.toDateString();
        this.props.fetchBookings(today, tomorrow, null);
        const date = {
            start_date: today,
            end_date: next_month
        };
        this.props.getPrices(date);
        this.props.getRooms(date);
    }

    render(){
        const bookings = this.props.bookings;
        let bookingList =
          Object.keys(bookings).length > 0 ? (
            Object.keys(bookings).map(id => (
              <tr id={id} key={id}>
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
                <td>{bookings[id].confirmation_code} </td>
                <td>
                    { bookings[id].end_date > new Date()  ? 
                  <button value={id} className="search-button" onClick={this.handleDestroy.bind(this)}>
                        Cancel Booking
                  </button> : "n/a" }
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
                        <th>Confirm. #</th>
                        <th>Cancel Booking</th>
                    </tr>
                        { bookingList }
                    </tbody>
                </table>
                <h3>Search for booking by confirmation #</h3>
                <form onSubmit={this.handleConfirmation.bind(this)}>
                    <input value={this.state.confirmation_code} 
                            onChange={this.handleInput.bind(this)}
                            type="text"
                            ></input>
                    <button className="search-button">Search</button>
                </form>
                    <div>
                        <h3>Search for Bookings by Date</h3>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <DatePicker
                                className="left-picker picker admin-picker"
                                // minDate={this.today}
                                value={this.state.startDate}
                                onChange={this.handleDateChange("startDate")}
                            />
                            <DatePicker
                                className="right-picker picker admin-picker"
                                value={this.state.endDate}
                                // minDate={this.tomorrow}
                                // // maxDate={ this.maxDate }
                                onChange={this.handleDateChange("endDate")}
                            />
                        <button className="search-button" onSubmit={this.handleSubmit.bind(this)}>Search</button>
                    </form>                  
                </div>
                <Price />
                <p>Adjust prices by date</p>
                <p>Adjust room availability by date</p>
                <button className="search-button" onClick={this.handleLogout.bind(this)}>Logout</button>
            </div>
        )
    }    
}
    
export default Profile;
