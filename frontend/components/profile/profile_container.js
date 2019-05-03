import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_action';
import { logout } from '../../actions/session_action';
import Profile from './profile';


const mapStateToProps = ({ entities }) => ({
    bookings: entities.bookings
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: (start_date, end_date) => dispatch(fetchBookings(start_date, end_date)),
    logout: () => dispatch(logout())
});


export default connect(
    mapStateToProps, mapDispatchToProps)(Profile);



// state
// grab today's guests



// logout admin, destroy booking, update price, update avail beds

