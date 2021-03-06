import { connect } from 'react-redux';
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, ownProps) => ({
    errors: errors.session,
    formType: ownProps.match.path
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(SessionForm);