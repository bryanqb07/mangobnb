import { connect } from 'react-redux';
import { clearBooking } from '../../actions/booking_action';
import ConfirmationPage from './confirmation_page';

const mapStateToProps = (state) => ({
    booking: state.entities.bookings ? state.entities.bookings : "",
    // guest: state.entities.guests ? state.entities.guests : "",
    // rooms: state.entities.rooms ,
    loading: state.ui.loading.confirmationLoading
   // guest: entities.guests ? entities.guests : ""
});

const mapDispatchToProps = dispatch => ({
    clearBooking: () => dispatch(clearBooking())
});

export default connect(
    mapStateToProps, mapDispatchToProps)(ConfirmationPage);