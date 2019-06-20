import { connect } from 'react-redux';
import HomePage from './home_page';
import { getPhotos } from '../../actions/photos_action';

const mapStateToProps = ( state ) => ({
    photos: state.entities.photos,
});

const mapDispatchToProps = dispatch => ({
    getPhotos: () => dispatch(getPhotos())
});

export default connect(
    mapStateToProps, mapDispatchToProps)(HomePage);
