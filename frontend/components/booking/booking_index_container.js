import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPrices } from '../../actions/price_action';
import { getRooms } from '../../actions/room_action';
import { getAvgPrice } from '../../reducers/selectors';

import { 
        //createGuest,
        //createBooking, 
        submitGuestBooking,
        clearBooking
        } from '../../actions/booking_action';

import BookingIndex from './booking_index';

const mapStateToProps = (state) => ({
    prices: state.entities.prices,
    errors: state.errors.booking,
    loading: state.ui.loading.searchResultsLoading,
    rooms: state.entities.rooms, // availability object by room
    avgPriceRoomOne: getAvgPrice(state, 1),
    avgPriceRoomTwo: getAvgPrice(state, 2),
    // roomPhotos: [state.entities.photos.photoUrls[2], state.entities.photos.photoUrls[5]]
});

const mapDispatchToProps = dispatch => ({
    getPrices: (date) => dispatch(getPrices(date)),
    getRooms: (date) => dispatch(getRooms(date)),
    // createGuest: guest => dispatch(createGuest(guest)),
    // createBooking: booking => dispatch(createBooking(booking)),
    submitGuestBooking: (guest, booking) => dispatch(submitGuestBooking(guest, booking)),
    clearBooking: () => dispatch(clearBooking())
});


export default withRouter(connect(
    mapStateToProps, mapDispatchToProps)(BookingIndex));