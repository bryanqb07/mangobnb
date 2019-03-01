import React from 'react';
import { Link } from 'react-router-dom';
import * as DateUtil from '../../util/date_api_util';


class ConfirmationPage extends React.Component{
    constructor(props){
        super(props);
    }


    handleClick(){
        this.props.clearBooking();
    }

    render(){
        if (this.props.loading) {
            return (
                <div className="loader">Loading...</div>
            )
        }else{
            const booking = this.props.booking;
            // const guest = this.props.guest;
        return (
            <div className="confirmation-container">
                <div className="confirmation-header">
                    <h1>Booking Confirmed!</h1>
                    <h3>Confirmation #: {booking.confirmation_code}</h3>
                    <p>A confirmation email has been sent to
                     <a href="#"> {booking.guest.email} </a>.  Please check your
                        inbox shortly and save the email for your record.
                     </p>
                </div>
                <div className="confirmation-details">
                    <h1>Booking Details</h1>

                    <b>Primary Guest Name: </b><span>{booking.guest.name}</span>
                    <br />
                    <b>Primary Guest Email: </b><span> {booking.guest.email}</span>
                    <br />
                    <b>Number of Guests: </b><span> {booking.num_guests}</span>
                    <br />
                    <b>Guest(s) Gender: </b><span>{booking.guest.gender}</span>
                    <br />
                    <b>Room Type: </b><span>{booking.room.title}</span>
                    <br />
                    <b>Checkin Time: </b><span>{booking.checkin_time}</span>
                    <br />
                    <b>Checkin Date: </b><span>{booking.start_date}</span>
                    <br />
                    <b>Checkout Date: </b><span>{booking.end_date}</span>
                    <br />
                    <b>Total Price: </b><span>NTD$ {booking.price_at_booking_time}</span>
                    <br />
                    <b>Confirmation #: </b><span>{booking.confirmation_code}</span>
                    <br />
                    <b>Additional Requests: </b><span>{booking.comments}</span>
                    <br />
                </div>

                <div className="confirmation-contact-messages">
                    <p>
                        For any changes to your reservation, please contact us at
                <a href="tel: 5551234567"> 555-123-4567 </a>  or email us at
                <a href="mailto: mangostationtw@gmail.com"> mangostationtw@gmail.com</a>.
                        We appreciate your booking and look forward to hosting you soon!
                </p>
                </div>
                <Link to="/" onClick={this.handleClick.bind(this)}>Return to search page.</Link>
            </div>
        )}
    }

}


export default ConfirmationPage;