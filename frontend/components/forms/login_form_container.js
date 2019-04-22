import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import SessionForm from './login_form';

const mapStateToProps = ({ errors }, ownProps) => ({
    errors: errors.session,
    formType: ownProps.match.path 
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps,mapDispatchToProps)(SessionForm);