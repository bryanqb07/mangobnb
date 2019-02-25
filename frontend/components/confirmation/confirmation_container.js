import { connect } from 'react-redux';
import { clearBooking } from '../../actions/booking_action';
import ConfirmationPage from './confirmation_page';

const mapStateToProps = ({ entities }) => ({
    booking: entities.bookings ? entities.bookings : "",
   // guest: entities.guests ? entities.guests : ""
});

const mapDispatchToProps = dispatch => ({
    clearBooking: () => dispatch(clearBooking())
});

export default connect(
    mapStateToProps, mapDispatchToProps)(ConfirmationPage);