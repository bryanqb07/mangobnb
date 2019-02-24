import React from 'react';
import { Link } from 'react-router-dom';

class ConfirmationPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {loading: true};
    }

    componentDidUpdate(prevProps){
        if(prevProps.booking != this.props.booking){
            this.setState({loading: false});
        }
    }

    handleClick(){
        this.props.clearBooking();
    }


    render(){
       if(this.state.loading){
           return (<div>Loading....</div>)
        }else{
            const booking = this.props.booking;
        return (
            <div className="confirmation-container">
                <div className="confirmation-header">
                    <h1>Booking Confirmed!</h1>
                    <h3>Confirmation #: {booking.confirmation_code}</h3>
                    <p>An email has been sent to
                <a href="#"> {booking.guest.email} </a>.  Please check your
                        inbox shortly and save the email for your record.
            </p>
                </div>
                <div className="confirmation-details">
                    <h1>Booking Details</h1>

                    <span>Primary Guest Name: </span><span>{booking.guest.name}</span>
                    <br />
                    <span>Primary Guest Email: </span><span> {booking.guest.email}</span>
                    <br />
                    <span>Number of Guests: </span><span> {booking.num_guests}</span>
                    <br />
                    <span>Guest(s) Gender: </span><span>{booking.guest.gender}</span>
                    <br />
                    <span>Room Type: </span><span>{booking.room.title}</span>
                    <br />
                    <span>Checkin Date: </span><span>{booking.start_date}</span>
                    <br />
                    <span>Checkout Date: </span><span>{booking.end_date}</span>
                    <br />
                    <span>Total Price: </span><span>NTD$ {booking.price_at_booking_time}</span>
                    <br />
                    <span>Confirmation #: </span><span>{booking.confirmation_code}</span>
                    <br />
                    <span>Additional Requests: </span><span>{booking.comments}</span>
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