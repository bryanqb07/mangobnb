import { connect } from 'react-redux';
import { getPrices } from '../../actions/price_action';
import { getAvgPrice } from '../../reducers/selectors';
import BookingForm from './booking_form';

const mapStateToProps = ({ entities }) => ({
    prices: entities.prices,
    avgPriceRoomOne: getAvgPrice(entities, 1),
    avgPriceRoomTwo: getAvgPrice(entities, 2),
    rooms: entities.rooms
});

const mapDispatchToProps = dispatch => ({
    getPrices: (dates) => dispatch(getPrices(dates)),
});


export default connect(
    mapStateToProps, mapDispatchToProps)(BookingForm);