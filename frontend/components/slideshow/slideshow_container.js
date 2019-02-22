import { connect } from 'react-redux';
import SlideShow from './slideshow';

const mapStateToProps = ({ entities }) => ({
    photos: entities.photos.slice(1)
});

export default connect(
    mapStateToProps)(SlideShow);