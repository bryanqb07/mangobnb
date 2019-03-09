import { postUser, postSession, deleteSession } from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (errors) => receiveSessionErrors(errors.responseJSON));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    (errors) => receiveSessionErrors(errors.responseJSON));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
    (errors) => receiveSessionErrors(errors.responseJSON));
