import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";
// import Price from './price';
import BookingsList from './bookings_list';
import PricesList from './prices_list';
// import Rooms from './rooms';

class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount(){
        let today = new Date();
        let tomorrow = new Date();
        let next_week = new Date();
        tomorrow.setDate(today.getDate() + 1);
        next_week.setDate(today.getDate() + 7);
        today = today.toDateString();
        tomorrow = tomorrow.toDateString();
        next_week = next_week.toDateString();
        this.props.fetchBookings(today, tomorrow, null);
        const date = {
            start_date: today,
            end_date: next_week
        };
        this.props.getPrices(date);
        this.props.getRooms(date);
    }

    render(){
        return (
        <div className="admin-wrapper">
            <h1>Welcome MangoBnb Admin</h1>
            <BookingsList 
                bookings={this.props.bookings} 
                fetchBookings={this.props.fetchBookings}
                destroyBooking={this.props.destroyBooking}
            />
            <PricesList 
                prices={this.props.prices}
                getPrices={this.props.getPrices}
                rooms={this.props.rooms}
                getRooms={this.props.getRooms}
                postPrice={this.props.postPrice}
                postPrices={this.props.postPrices}
            />
            <button
              className="search-button"
              id="admin-logout"
              onClick={this.handleLogout.bind(this)}
            >
              Logout
            </button>
          </div>
        );
    }    
}
    
export default Profile;
