import { connect } from 'react-redux';
import { getRooms } from '../../actions/room_action';
import NavBar from './navbar';

const mapStateToProps = ({ entities }) => ({
    photos: entities.photos
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(getRooms())
});


export default connect(
    mapStateToProps, mapDispatchToProps)(NavBar);