import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPrices } from '../../actions/price_action';
import { getAvgPrice } from '../../reducers/selectors';
import { submitGuestBooking, clearBooking } from '../../actions/booking_action';
import BookingForm from './booking_form';



const mapStateToProps = ({ entities }, ownProps) => ({
    prices: entities.prices,
    avgPriceRoomOne: getAvgPrice(entities, 1),
    avgPriceRoomTwo: getAvgPrice(entities, 2),
    rooms: entities.rooms, // availability object by room
});

const mapDispatchToProps = dispatch => ({
    getPrices: (date) => dispatch(getPrices(date)),
    submitGuestBooking: (guest, booking) => dispatch(submitGuestBooking(guest, booking)),
    clearBooking: () => dispatch(clearBooking())
});


export default withRouter(connect(
    mapStateToProps, mapDispatchToProps)(BookingForm));