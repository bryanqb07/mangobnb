export const RECEIVE_RESTRICTION = "RECEIVE_RESTRICTION";

export const receiveRestriction = restriction => ({
    type: RECEIVE_RESTRICTION,
    restriction
});

export const postRestriction = restriction => dispatch => {
  APIUtil.postRestriction(restriction).then(restriction => dispatch(receivePrice(restriction)));
};

export const postRestrictions = restrictions => dispatch => {
  APIUtil.postRestrictions(restriction).then(restrictions => dispatch(receivePrice(restrictions)));
};


