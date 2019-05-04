import { connect } from 'react-redux';
import { fetchBookings, destroyBooking } from '../../actions/booking_action';
import { logout } from '../../actions/session_action';
import { getPrices } from "../../actions/price_action";
import { getRooms } from "../../actions/room_action";
// import { withRouter } from 'react-router-dom';
import Profile from './profile';


const mapStateToProps = ({ entities }) => ({
  bookings: entities.bookings,
  rooms: entities.rooms,
  prices: entities.prices
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: (start_date, end_date, confirm_code) => dispatch(fetchBookings(start_date, end_date, confirm_code)),
    destroyBooking: id => dispatch(destroyBooking(id)),
    logout: () => dispatch(logout()),
    getPrices: (date) => dispatch(getPrices(date)),
    getRooms: (date) => dispatch(getRooms(date))
});


export default connect(
    mapStateToProps, mapDispatchToProps)(Profile);



// state
// grab today's guests



// logout admin, destroy booking, update price, update avail beds

