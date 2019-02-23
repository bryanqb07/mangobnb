import { connect } from 'react-redux';
import { getRooms } from '../../actions/room_action';
import BookingForm from './booking_form';

const mapStateToProps = ({ entities }) => ({
    photos: entities.photos
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(getRooms())
});


export default connect(
    mapStateToProps, mapDispatchToProps)(NavBar);