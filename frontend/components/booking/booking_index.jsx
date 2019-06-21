import React from 'react';
import * as DateUtil from '../../util/date_api_util';
import { Link } from 'react-router-dom';

import RoomsDetail from './rooms_detail';
import BookingForm from './booking_form';


class BookingIndex extends React.Component{
    constructor(props){
        super(props);
        this.num_guests = null;
        this.num_nights = null;
        this.start_date = null;
        this.end_date = null;
    }

    handleClick(){
        this.props.clearBooking();
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

    
    render(){
   
        if (! this.props.rooms[1]){
            return(
                <div className="loader">Loading...</div>
            )
        }

        let rooms = this.props.rooms ? this.props.rooms: null;
        let prices = this.props.prices ? this.props.prices : null;
        
        if( (rooms[1].open_beds === 0 && rooms[2].open_beds === 0)
            || ( this.num_guests > rooms[1].open_beds && this.num_guests > rooms[2].open_beds) 
            || (Object.keys(prices).length != this.num_nights)
            ){
            return(
                <div className="no-beds-available">
                    <p>Sorry, no beds were available for the given dates.
                        Please try another search.
                    </p>
                    <Link to="/" onClick={this.handleClick.bind(this)}>Return to search page.</Link> 
                </div>
            )
        }

        return (
          <div>
            <div className="booking-container w3-mobile">
              <RoomsDetail rooms={rooms} />
              <BookingForm
                num_guests={this.num_guests}
                num_nights={this.num_nights}
                start_date={this.start_date}
                end_date={this.end_date}
                rooms={rooms}
                submitGuestBooking={this.props.submitGuestBooking}
                avgPriceRoomOne={this.props.avgPriceRoomOne}
                avgPriceRoomTwo={this.props.avgPriceRoomTwo}
                errors={this.props.errors}
              />
              

            </div>
          </div>
        );
    }
}

export default BookingIndex;

