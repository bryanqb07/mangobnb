import { connect } from 'react-redux';
import SlideShow from './slideshow';

const mapStateToProps = ( state ) => ({
    photos: state.entities.photos,
    loading: state.ui.loading.homePageLoading
});

export default connect(
    mapStateToProps)(SlideShow);