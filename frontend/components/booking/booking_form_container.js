import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPrices } from '../../actions/price_action';
import { getAvgPrice } from '../../reducers/selectors';
import { 
        //createGuest,
        //createBooking, 
        submitGuestBooking,
        clearBooking} from '../../actions/booking_action';
import BookingForm from './booking_form';



const mapStateToProps = (state) => ({
    prices: state.entities.prices,
    errors: state.ui.errors,
    avgPriceRoomOne: getAvgPrice(state, 1),
    avgPriceRoomTwo: getAvgPrice(state, 2),
    rooms: state.entities.rooms, // availability object by room
});

const mapDispatchToProps = dispatch => ({
    getPrices: (date) => dispatch(getPrices(date)),
    // createGuest: guest => dispatch(createGuest(guest)),
    // createBooking: booking => dispatch(createBooking(booking)),
    submitGuestBooking: (guest, booking) => dispatch(submitGuestBooking(guest, booking)),
    clearBooking: () => dispatch(clearBooking())
});


export default withRouter(connect(
    mapStateToProps, mapDispatchToProps)(BookingForm));